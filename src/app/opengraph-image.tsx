import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "NM-TECH IT – Softwareentwicklung, KI-Integration & Automatisierung aus Lastrup";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "radial-gradient(circle at 25% 40%, #1a140c 0%, #050505 60%)",
          color: "#e8e8e8",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={340} height={293} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "#E8C77A", textTransform: "uppercase" }}>
            Software Engineer & Digitalisierungspartner
          </div>
          <div style={{ fontSize: 58, lineHeight: 1.1, marginTop: 24 }}>
            Software, KI & Automatisierung
          </div>
          <div style={{ fontSize: 28, color: "#c8c8c8", marginTop: 28 }}>
            Nikita Aleschkin · Lastrup · Cloppenburg · Emsland
          </div>
        </div>
      </div>
    ),
    size
  );
}
