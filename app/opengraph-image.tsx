import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Engine AI — AI Orchestration for NZ Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Logo mark */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          fill="none"
          style={{ marginBottom: "32px" }}
        >
          <rect x="6" y="8" width="40" height="13" rx="2" fill="#e8e8e8" />
          <rect x="10" y="26" width="40" height="13" rx="2" fill="#e8e8e8" opacity="0.6" />
          <rect x="14" y="44" width="40" height="13" rx="2" fill="#e8e8e8" opacity="0.3" />
        </svg>

        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#e8e8e8",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginBottom: "20px",
          }}
        >
          Engine AI
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "#C4A35A",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            fontWeight: 400,
          }}
        >
          AI Orchestration for NZ Business
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(to right, transparent, #C4A35A, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
