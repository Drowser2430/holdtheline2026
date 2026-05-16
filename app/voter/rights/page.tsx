"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Disclaimer from "@/components/Disclaimer";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const VOTER_TYPES = [
  { value: "first-time", label: "First-time voter" },
  { value: "returning", label: "Returning voter (I've voted before)" },
  { value: "moved-recently", label: "I've moved in the last 12 months" },
  { value: "college-student", label: "College student voting from campus" },
  {
    value: "formerly-incarcerated",
    label: "Formerly incarcerated — checking my rights",
  },
  { value: "disability", label: "Voter with a disability" },
];

export default function RightsGeneratorPage() {
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [voterType, setVoterType] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/rights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state, zip, voterType }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data.markdown);
      }
    } catch (err) {
      setError("Network error. Please try again, or call 1-866-OUR-VOTE.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-narrow py-12">
      <Link
        href="/voter"
        className="text-sm text-gray-600 hover:text-navy mb-4 inline-block"
      >
        ← Back to Voter Portal
      </Link>

      <p className="text-gold font-semibold uppercase tracking-wide text-sm mb-3 mt-4">
        AI Tool · Free
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        State Voter Rights Generator
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Tell us your state and a bit about your situation. You&apos;ll get a
        personalized one-page guide to your voting rights for the 2026 election.
      </p>

      {!result && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-lg p-6 space-y-5"
        >
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-semibold text-charcoal mb-2"
            >
              Your state
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            >
              <option value="">Select a state…</option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-semibold text-charcoal mb-2"
            >
              ZIP code <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="zip"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              maxLength={5}
              pattern="\d{5}"
              placeholder="92110"
              className="w-full border border-gray-300 rounded-md p-3 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>

          <div>
            <label
              htmlFor="voterType"
              className="block text-sm font-semibold text-charcoal mb-2"
            >
              Which best describes you?
            </label>
            <select
              id="voterType"
              value={voterType}
              onChange={(e) => setVoterType(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            >
              <option value="">Select an option…</option>
              {VOTER_TYPES.map((v) => (
                <option key={v.value} value={v.value}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading || !state || !voterType}
            className="w-full bg-navy text-white font-semibold py-3 px-6 rounded-md hover:bg-navy-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Generating your guide…" : "Generate my rights guide"}
          </button>

          <p className="text-xs text-gray-500">
            We don&apos;t store your information. Your guide is generated fresh
            every time and disappears when you close this page.
          </p>
        </form>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mt-6">
          <p className="font-semibold">{error}</p>
          <button
            onClick={() => {
              setError(null);
              setResult(null);
            }}
            className="underline text-sm mt-2"
          >
            Try again
          </button>
        </div>
      )}

      {result && (
        <div className="mt-2">
          <Disclaimer />

          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 prose-custom">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                setResult(null);
                setState("");
                setZip("");
                setVoterType("");
              }}
              className="btn-outline text-center"
            >
              Generate another guide
            </button>
            <button
              onClick={() => window.print()}
              className="btn-secondary text-center"
            >
              Print or save as PDF
            </button>
          </div>

          <div className="mt-10 bg-navy text-white rounded-lg p-6 text-center">
            <p className="text-sm text-gray-300 mb-1">Need help right now?</p>
            <p className="text-2xl font-bold text-gold mb-1">
              Call 1-866-OUR-VOTE
            </p>
            <p className="text-xs text-gray-400">
              Free Election Protection hotline. Lawyers in every state.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
