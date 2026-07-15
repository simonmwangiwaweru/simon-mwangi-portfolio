import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAFAF7",
          color: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "#FF5C39",
          }}
        >
          Full-Stack Developer &amp; Designer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 32,
            maxWidth: 900,
            color: "rgba(10,10,10,0.75)",
          }}
        >
          {site.pitch}
        </div>
      </div>
    ),
    size,
  );
}
