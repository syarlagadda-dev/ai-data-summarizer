"use client";

import { useMemo, useState } from "react";

type Choice = {
  id: string;
  left: string;
  right: string;
};

type Props = {
  onSubmitted: () => void;
};

export default function FoodPreferenceForm({ onSubmitted }: Props) {
  const questions: Choice[] = useMemo(
    () => [
      { id: "q1", left: "🍕 Pizza", right: "🍔 Burger" },
      { id: "q2", left: "🍣 Sushi", right: "🌮 Tacos" },
      { id: "q3", left: "🍜 Ramen", right: "🍝 Pasta" },
      { id: "q4", left: "🍛 Curry", right: "🍲 Stew" },
      { id: "q5", left: "🍩 Donuts", right: "🍰 Cake" },
      { id: "q6", left: "🍫 Chocolate", right: "🍦 Ice cream" },
      { id: "q7", left: "🥞 Pancakes", right: "🧇 Waffles" },
      { id: "q8", left: "🍟 French fries", right: "🧅 Onion rings" },
      { id: "q9", left: "🥗 Caesar salad", right: "🥙 Falafel wrap" },
      { id: "q10", left: "🍤 Shrimp", right: "🐟 Salmon" },
    ],
    [],
  );

  const [answers, setAnswers] = useState<Record<string, "left" | "right" | "">>(
    () =>
      Object.fromEntries(questions.map((q) => [q.id, ""])) as Record<
        string,
        "left" | "right" | ""
      >,
  );
  const allAnswered = Object.values(answers).every((v) => v !== "");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault(); // don’t reload page
    console.log("Selections:", answers);
    onSubmitted(); // close form + show message
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 14,
        padding: 18,
        marginTop: 8,
      }}
    >
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>
        Choose your preferences
      </h2>

      <div style={{ display: "grid", gap: 12 }}>
        {questions.map((q, idx) => (
          <fieldset
            key={q.id}
            style={{
              border: "1px solid #efefef",
              borderRadius: 12,
              padding: 12,
            }}
          >
            <legend style={{ padding: "0 6px", fontWeight: 700 }}>
              Pair {idx + 1}
            </legend>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: 8,
              }}
            >
              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: "10px 12px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="radio"
                  name={q.id}
                  value="left"
                  checked={answers[q.id] === "left"}
                  onChange={() =>
                    setAnswers((prev) => ({ ...prev, [q.id]: "left" }))
                  }
                />
                <span style={{ fontSize: 16 }}>{q.left}</span>
              </label>

              <label
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: 12,
                  padding: "10px 12px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  type="radio"
                  name={q.id}
                  value="right"
                  checked={answers[q.id] === "right"}
                  onChange={() =>
                    setAnswers((prev) => ({ ...prev, [q.id]: "right" }))
                  }
                />
                <span style={{ fontSize: 16 }}>{q.right}</span>
              </label>
            </div>
          </fieldset>
        ))}
      </div>

      {!allAnswered && (
        <p style={{ marginTop: 10, fontSize: 13, opacity: 0.7 }}>
          Please select one option for each pair.
        </p>
      )}

      <button
        type="submit"
        disabled={!allAnswered}
        style={{
          marginTop: 16,
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #ccc",
          cursor: allAnswered ? "pointer" : "not-allowed",
          fontWeight: 700,
          opacity: allAnswered ? 1 : 0.5,
        }}
      >
        {allAnswered ? "Submit" : "Answer all questions to submit"}
      </button>
    </form>
  );
}
