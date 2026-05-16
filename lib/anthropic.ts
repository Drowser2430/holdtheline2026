import Anthropic from "@anthropic-ai/sdk";

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn(
    "[anthropic] ANTHROPIC_API_KEY is not set. AI tools will fail until it is configured."
  );
}

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Default model — Claude Sonnet 4.6 is a strong balance of capability and cost.
export const DEFAULT_MODEL = "claude-sonnet-4-6";
