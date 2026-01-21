"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Volume2, VolumeX } from "lucide-react";
import { typingTestConfig } from "@/data/typingTest";
import confetti from "canvas-confetti";

interface GlobalStats {
  wins: number;
  losses: number;
}

export default function TypingTest() {
  const [currentSentence, setCurrentSentence] = useState("");
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [globalStats, setGlobalStats] = useState<GlobalStats>({ wins: 0, losses: 0 });
  const [showResult, setShowResult] = useState(false);
  const [won, setWon] = useState(false);
  const [ghostPosition, setGhostPosition] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundsLoaded, setSoundsLoaded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const restartButtonRef = useRef<HTMLButtonElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBuffersRef = useRef<{ [key: string]: AudioBuffer[] }>({});
  const ghostIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load keyboard sounds
  useEffect(() => {
    const loadSounds = async () => {
      try {
        audioContextRef.current = new AudioContext();
        
        // Define sound types with their folder and file patterns
        const soundConfig = [
          { type: "keystroke", folder: "keystrokes", prefix: "keystroke", count: 8 },
          { type: "spacebar", folder: "spacebars", prefix: "spacebar", count: 4 },
          { type: "backspace", folder: "backspaces", prefix: "backspace", count: 6 },
          { type: "enter", folder: "enters", prefix: "enter", count: 2 },
          { type: "tab", folder: "tabs", prefix: "tab", count: 7 },
        ];
        
        let loadedCount = 0;

        for (const config of soundConfig) {
          audioBuffersRef.current[config.type] = [];
          
          for (let i = 1; i <= config.count; i++) {
            try {
              const response = await fetch(`/sounds/keyboard/${config.folder}/${config.prefix}${i}.wav`);
              if (!response.ok) continue;
              
              const arrayBuffer = await response.arrayBuffer();
              const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);
              audioBuffersRef.current[config.type].push(audioBuffer);
              loadedCount++;
            } catch {
              // Sound file not found, skip silently
            }
          }
        }
        
        setSoundsLoaded(loadedCount > 0);
      } catch {
        console.log("Web Audio API not supported or sounds not available");
      }
    };

    const fetchStats = async () => {
      try {
        const response = await fetch("/api/typing-stats");
        const data = await response.json();
        setGlobalStats(data);
      } catch {
        console.error("Failed to fetch stats");
      }
    };

    loadSounds();
    fetchStats();

    return () => {
      if (ghostIntervalRef.current) {
        clearInterval(ghostIntervalRef.current);
      }
    };
  }, []);

  // Ghost cursor animation - simulates typing at your WPM
  useEffect(() => {
    if (isActive && startTime && !isComplete) {
      // Calculate how many characters should be typed per millisecond at your WPM
      // WPM = (chars / 5) / minutes => chars = WPM * 5 * minutes
      // chars per ms = (WPM * 5) / (60 * 1000)
      const charsPerMs = (typingTestConfig.yourWpm * 5) / (60 * 1000);

      ghostIntervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const ghostChars = Math.floor(elapsed * charsPerMs);
        setGhostPosition(Math.min(ghostChars, currentSentence.length));
      }, 50);

      return () => {
        if (ghostIntervalRef.current) {
          clearInterval(ghostIntervalRef.current);
        }
      };
    }
  }, [isActive, startTime, isComplete, currentSentence.length]);

  const playSound = useCallback(
    (type: "keystroke" | "spacebar" | "backspace" | "enter" | "tab") => {
      if (!soundEnabled || !audioContextRef.current || !audioBuffersRef.current[type]?.length) return;

      // Resume audio context if it's suspended (browser autoplay policy)
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      const buffers = audioBuffersRef.current[type];
      const buffer = buffers[Math.floor(Math.random() * buffers.length)];

      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      
      // Add slight volume variation for realism
      const gainNode = audioContextRef.current.createGain();
      gainNode.gain.value = 0.3 + Math.random() * 0.2;
      
      source.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      source.start();
    },
    [soundEnabled]
  );

  const fetchGlobalStats = async () => {
    try {
      const response = await fetch("/api/typing-stats");
      const data = await response.json();
      setGlobalStats(data);
    } catch {
      console.error("Failed to fetch stats");
    }
  };

  const submitResult = async (didWin: boolean) => {
    try {
      await fetch("/api/typing-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ won: didWin }),
      });
      fetchGlobalStats();
    } catch {
      console.error("Failed to submit result");
    }
  };

  const startTest = () => {
    const randomSentence =
      typingTestConfig.sentences[Math.floor(Math.random() * typingTestConfig.sentences.length)];
    setCurrentSentence(randomSentence);
    setTypedText("");
    setStartTime(null);
    setIsActive(true);
    setIsComplete(false);
    setShowResult(false);
    setGhostPosition(0);
    setWpm(0);
    setAccuracy(100);

    // Focus the input after a short delay to ensure it's rendered
    // Use preventScroll to avoid browser auto-scrolling to the hidden input
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 50);
  };

  // Reset mid-test counts as a loss
  const resetTest = () => {
    // Only count as loss if test was started (timer running)
    if (isActive && startTime && !isComplete) {
      submitResult(false);
    }

    if (ghostIntervalRef.current) {
      clearInterval(ghostIntervalRef.current);
    }

    startTest();
  };

  const handleContainerClick = () => {
    if (isActive && !isComplete) {
      inputRef.current?.focus({ preventScroll: true });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isActive || isComplete) return;

    // Tab to focus restart button (monkeytype style)
    if (e.key === "Tab") {
      e.preventDefault();
      playSound("tab");
      restartButtonRef.current?.focus();
      return;
    }

    // Start timer on first keypress
    if (!startTime && e.key.length === 1) {
      setStartTime(Date.now());
    }

    // Play appropriate sound
    if (e.key === " ") {
      playSound("spacebar");
    } else if (e.key === "Backspace") {
      playSound("backspace");
    } else if (e.key === "Enter") {
      playSound("enter");
    } else if (e.key.length === 1) {
      playSound("keystroke");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive || isComplete) return;

    const value = e.target.value;
    setTypedText(value);

    // Calculate accuracy
    let correctChars = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === currentSentence[i]) {
        correctChars++;
      }
    }
    setAccuracy(value.length > 0 ? Math.round((correctChars / value.length) * 100) : 100);

    // Calculate live WPM
    if (startTime) {
      const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
      const wordsTyped = value.length / 5; // standard: 5 chars = 1 word
      setWpm(Math.round(wordsTyped / timeElapsed) || 0);
    }

    // Check if complete
    if (value.length === currentSentence.length) {
      const finalTime = Date.now();
      setIsComplete(true);
      setIsActive(false);

      if (ghostIntervalRef.current) {
        clearInterval(ghostIntervalRef.current);
      }

      const timeElapsed = (finalTime - (startTime || finalTime)) / 1000 / 60;
      const wordsTyped = value.length / 5;
      const finalWpm = Math.round(wordsTyped / timeElapsed);
      setWpm(finalWpm);

      // Calculate final accuracy
      let finalCorrect = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] === currentSentence[i]) {
          finalCorrect++;
        }
      }
      const finalAccuracy = Math.round((finalCorrect / value.length) * 100);
      setAccuracy(finalAccuracy);

      // Must beat WPM AND have at least 90% accuracy to win
      const didWin = finalWpm > typingTestConfig.yourWpm && finalAccuracy >= 90;
      setWon(didWin);
      setShowResult(true);
      submitResult(didWin);

      if (didWin) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#22c55e", "#10b981", "#34d399"],
        });
      }
    }
  };

  const winRate =
    globalStats.wins + globalStats.losses > 0
      ? ((globalStats.wins / (globalStats.wins + globalStats.losses)) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="relative bg-background/50 rounded-2xl p-6 border border-secondary/30">
      {/* Hidden Input - positioned absolutely to not affect layout */}
      <input
        ref={inputRef}
        type="text"
        value={typedText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="absolute opacity-0 pointer-events-none top-0 left-0 w-0 h-0"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        disabled={isComplete}
        tabIndex={-1}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-foreground">Challenge me to a Typing Speed Test!</h4>
        {soundsLoaded && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-foreground/40 hidden sm:inline">Use my custom keyboard&apos;s sounds!</span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                soundEnabled
                  ? "bg-accent/20 text-accent hover:bg-accent/30"
                  : "bg-secondary/30 text-foreground/40 hover:text-foreground/60"
              }`}
              aria-label={soundEnabled ? "Mute sounds" : "Unmute sounds"}
              tabIndex={-1}
            >
              {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Global Stats */}
      <div className="text-center mb-6 p-3 bg-secondary/20 rounded-xl">
        <p className="text-sm font-mono">
          <span className="text-green-400 font-semibold">{globalStats.wins} Wins</span>
          <span className="text-foreground/40 mx-2">|</span>
          <span className="text-red-400 font-semibold">{globalStats.losses} Losses</span>
          <span className="text-foreground/40 mx-2">|</span>
          <span className="text-accent font-semibold">{winRate}% Win Rate</span>
        </p>
        <p className="text-foreground/50 text-xs mt-1">
          Beat my <span className="text-accent font-semibold">{typingTestConfig.yourWpm} WPM</span> with
          {" "}<span className="text-accent font-semibold">90%+ accuracy</span> to win!
        </p>
      </div>

      {/* Typing Area */}
      {!isActive && !isComplete ? (
        <motion.button
          onClick={startTest}
          className="w-full py-4 bg-accent/20 hover:bg-accent/30 rounded-xl text-accent font-medium transition-colors border border-accent/30"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          Start Typing Test
        </motion.button>
      ) : (
        <div className="space-y-4">
          {/* Sentence Display */}
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            className="font-mono text-base sm:text-lg leading-relaxed p-4 bg-secondary/20 rounded-xl cursor-text min-h-25 relative select-none"
          >
            {currentSentence.split("").map((char, index) => {
              const isTyped = index < typedText.length;
              const isCorrect = isTyped && typedText[index] === char;
              const isIncorrect = isTyped && typedText[index] !== char;
              const isCursor = index === typedText.length;
              const isGhostCursor = index === ghostPosition && !isComplete;

              return (
                <span
                  key={index}
                  className={`relative ${
                    isCorrect
                      ? "text-foreground"
                      : isIncorrect
                        ? "text-red-400 bg-red-400/20"
                        : "text-foreground/30"
                  }`}
                >
                  {/* Ghost cursor - your simulated typing speed */}
                  {isGhostCursor && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 animate-pulse" />
                  )}
                  {/* User cursor */}
                  {isCursor && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent animate-pulse" />
                  )}
                  {char}
                </span>
              );
            })}

            {/* Click to focus hint */}
            {isActive && !isComplete && (
              <p className="absolute bottom-2 right-3 text-xs text-foreground/30">
                Tab + Enter to restart
              </p>
            )}
          </div>

          {/* Restart button (Tab target) */}
          <div className="flex justify-center">
            <button
              ref={restartButtonRef}
              onClick={resetTest}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  playSound("enter");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-foreground/50 hover:text-foreground hover:bg-secondary/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:text-accent"
              tabIndex={-1}
            >
              <RotateCcw className="h-4 w-4" />
              <span className="text-sm">Restart</span>
            </button>
          </div>

          {/* Live Stats */}
          <div className="flex justify-center gap-6 text-sm font-mono">
            <div className="flex items-center gap-2">
              <span className="text-foreground/50">WPM:</span>
              <span className="text-accent font-semibold">{wpm}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground/50">Accuracy:</span>
              <span className="text-accent font-semibold">{accuracy}%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground/50">Ghost:</span>
              <span className="text-accent/50 font-semibold">{typingTestConfig.yourWpm} WPM</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 text-xs text-foreground/40">
            <div className="flex items-center gap-1">
              <span className="w-2 h-4 bg-accent rounded-sm" />
              <span>Your cursor</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-4 bg-accent/30 rounded-sm" />
              <span>My ghost cursor</span>
            </div>
          </div>
        </div>
      )}

      {/* Result */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-6 p-6 rounded-xl border text-center ${
              won
                ? "bg-green-500/10 border-green-500/30"
                : "bg-secondary/20 border-secondary/30"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${won ? "text-green-400" : "text-foreground"}`}>
              {won ? "🎉 You Win!" : "Nice Try!"}
            </h3>
            <p className="text-foreground/70 mb-1">
              Your WPM: <span className="text-accent font-bold">{wpm}</span>
              <span className="mx-2 text-foreground/40">vs</span>
              My WPM: <span className="text-accent font-bold">{typingTestConfig.yourWpm}</span>
            </p>
            <p className={`text-sm mb-2 ${accuracy >= 90 ? "text-foreground/50" : "text-red-400"}`}>
              Accuracy: {accuracy}%{accuracy < 90 && " (90% required)"}
            </p>
            {!won && (
              <p className="text-foreground/40 text-xs mb-4">
                {wpm <= typingTestConfig.yourWpm && accuracy < 90
                  ? "Need higher WPM and accuracy"
                  : wpm <= typingTestConfig.yourWpm
                    ? "Need higher WPM to win"
                    : "Need at least 90% accuracy to win"}
              </p>
            )}
            {won && <div className="mb-4" />}
            <button
              onClick={startTest}
              className="inline-flex items-center gap-2 px-6 py-2 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent font-medium transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
