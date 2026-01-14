"use client";

import { useState } from "react";
import Image from "next/image";
import { heroContent } from "@/data";
import { type Hobby } from "@/types";
import HobbyModal from "./HobbyModal";

export default function Hobbies() {
  const hobbies = heroContent.hobbies;
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);

  if (!hobbies?.length) return null;

  return (
    <section className="bg-background py-10 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Beyond code</h2>
          <p className="text-(--color-text)/75">Things that keep me curious and balanced.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby) => {
            const cover = hobby.media?.find((m) => m.type === "image");
            const hasDetails = hobby.details && hobby.details.sections.length > 0;
            return (
              <div
                key={hobby.title}
                onClick={() => hasDetails && setSelectedHobby(hobby)}
                className={`flex flex-col rounded-2xl bg-secondary/20 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${hasDetails ? "cursor-pointer" : ""}`}
              >
                {cover ? (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-background">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold text-primary">{hobby.title}</h3>
                <p className="mt-2 text-(--color-text)/80 leading-relaxed">{hobby.description}</p>
                {hasDetails && (
                  <p className="mt-3 text-sm text-accent font-medium">Click to learn more →</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hobby Modal */}
      {selectedHobby && (
        <HobbyModal
          hobby={selectedHobby}
          isOpen={!!selectedHobby}
          onClose={() => setSelectedHobby(null)}
        />
      )}
    </section>
  );
}
