"use client";

import { useState } from "react";
import FoodPreferenceForm from "@/components/FoodPreferenceForm";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState<string>("");

  function handleSubmitted() {
    setShowForm(false);
    setToast("✅ Preferences Submitted!");

    // auto-hide message after 2.5s
    window.setTimeout(() => setToast(""), 2500);
  }

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "32px 16px" }}>
      <h1
        style={{
          fontSize: 40,
          fontWeight: 1000,
          textAlign: "center",
          marginBottom: 16,
          letterSpacing: 1,
        }}
      >
        Food Preference Survey
      </h1>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 16,
          letterSpacing: 1,
        }}
      >
        Share Your Food Opinions & See What Everyone Else Is Thinking!
      </h2>
      <p style={{ marginBottom: 20, opacity: 0.85 }}>
        Click this button to input your food preferences!
      </p>

      <button
        type="button"
        onClick={() => setShowForm((v) => !v)}
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #ccc",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {toast && (
        <div
          style={{
            marginTop: 14,
            display: "inline-block",
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid #e5e5e5",
            fontWeight: 600,
          }}
        >
          {toast}
        </div>
      )}

      {showForm && (
        <div style={{ marginTop: 20 }}>
          <FoodPreferenceForm onSubmitted={handleSubmitted} />
        </div>
      )}
    </main>
  );
}
