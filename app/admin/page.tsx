"use client";

import React, { useState } from "react";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    await new Promise((r) => setTimeout(r, 700));

    if (!username || !password) {
      setError("Isi username dan password dulu yaaaa.");
    } else if (username === "admin" && password === "password") {
      setSuccess("Login berhasil (contohh)");
    } else {
      setError("Username / password salah (contohhh)");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND LOGO HIMSI */}
      <img
        src="/logohimsi2.webp"
        alt="bg logo"
        style={{
          position: "absolute",
          width: "450px",
          opacity: 0.25,
          filter: "blur(4px)",
          zIndex: 1,
        }}
      />

      {/* CARD */}
      <form
        onSubmit={handleSubmit}
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 420,
          borderRadius: 18,
          padding: "32px 28px",
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(10px) saturate(140%)",
          WebkitBackdropFilter: "blur(10px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <img
          src="/logohimsi2.jpg"
          alt="Logo"
          style={{
            width: 55,
            margin: "0 auto 12px auto",
            display: "block",
          }}
        />

        <h2
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Login Admin HIMSI
        </h2>

        {/* USERNAME */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 500 }}>Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginTop: 6,
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 15,
            }}
          />
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: 22 }}>
          <label style={{ fontWeight: 500 }}>Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              marginTop: 6,
              borderRadius: 10,
              border: "1px solid #ccc",
              fontSize: 15,
            }}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 10,
            background: "#800000",
            border: "none",
            color: "white",
            fontWeight: 600,
            fontSize: 16,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "transform 0.15s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.04)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {loading ? "Loading..." : "Masuk"}
        </button>

        {/* STATUS MESSAGE */}
        <div style={{ minHeight: 36, marginTop: 14 }}>
          {error && (
            <div
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                background: "rgba(200,0,0,0.1)",
                color: "#8b0000",
                fontSize: 13,
              }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                background: "rgba(0,140,40,0.1)",
                color: "#0b5127",
                fontSize: 13,
              }}
            >
              {success}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
