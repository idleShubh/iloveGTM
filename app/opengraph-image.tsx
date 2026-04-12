import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "iloveGTM — GTM tools and ideas that actually drive growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 80% -10%, #efe7d8, transparent 60%), radial-gradient(900px 500px at -10% 110%, #efe7d8, transparent 60%), #f6f1e8",
          fontFamily: "serif",
          color: "#1a1612",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "-0.01em",
          }}
        >
          <span>i</span>
          <span style={{ color: "#b4542a", fontStyle: "italic" }}>love</span>
          <span>gtm</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              color: "#6b625a",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#b4542a",
              }}
            />
            Waitlist open
          </div>

          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1040,
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <span>Go-to-market ideas that</span>
            <span style={{ color: "#b4542a", fontStyle: "italic" }}>
              actually
            </span>
            <span>drive growth.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6b625a",
          }}
        >
          <span>ilovegtm.com</span>
          <span>@idleshubh</span>
        </div>
      </div>
    ),
    size
  );
}
