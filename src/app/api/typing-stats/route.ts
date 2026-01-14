import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Initialize Redis client - will be undefined if env vars are not set
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

export async function GET() {
  if (!redis) {
    // Return mock data if Redis is not configured
    return NextResponse.json({ wins: 0, losses: 0 });
  }

  try {
    const wins = (await redis.get<number>("typing-test:wins")) || 0;
    const losses = (await redis.get<number>("typing-test:losses")) || 0;
    
    return NextResponse.json({ wins, losses });
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return NextResponse.json({ wins: 0, losses: 0 });
  }
}

export async function POST(request: Request) {
  if (!redis) {
    // Return success even if Redis is not configured (for local development)
    return NextResponse.json({ success: true });
  }

  try {
    const { won } = await request.json();
    
    if (won) {
      await redis.incr("typing-test:wins");
    } else {
      await redis.incr("typing-test:losses");
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update stats:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
