/* eslint-disable @next/next/no-img-element -- next/og (Satori) only renders plain <img> */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "About ZHM Real Estate LLC – Dubai real estate agency since 2010, led by founder Mohammad Shahbaz Rasheed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HEADLINE = "ZHM Real Estate";

// Brand fonts (same as the site). If Google Fonts is unreachable at build time we
// fall back to next/og's default font rather than failing the build.
async function loadGoogleFont(family: string, weight: number, text?: string) {
  try {
    const query = `family=${family.replace(/ /g, "+")}:wght@${weight}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
    const css = await (await fetch(`https://fonts.googleapis.com/css2?${query}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

async function dataUri(file: string, mime: string) {
  const buf = await readFile(join(process.cwd(), "public", file));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function Image() {
  const [logo, founder, sans, serifFont] = await Promise.all([
    dataUri("nava_logo.png", "image/png"),
    dataUri("images/about/image-2.jpeg", "image/jpeg"),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Cormorant Garamond", 700, HEADLINE),
  ]);
  // Passing `fonts` replaces next/og's default font, so custom fonts are only used when the body font loaded too.
  const serif = sans ? serifFont : null;
  const fonts = sans
    ? [
        { name: "Inter", data: sans, weight: 400 as const, style: "normal" as const },
        ...(serif ? [{ name: "Cormorant", data: serif, weight: 700 as const, style: "normal" as const }] : []),
      ]
    : undefined;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0f172a", position: "relative" }}>
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(212,175,55,0.22), rgba(212,175,55,0) 70%)",
          }}
        />

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 780, padding: "56px 64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={logo} width={74} height={80} alt="" />
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 2, background: "#d4af37" }} />
              <div style={{ color: "#d4af37", fontSize: 22, letterSpacing: 6 }}>ABOUT US</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#ffffff",
                fontSize: serif ? 92 : 76,
                lineHeight: 1.05,
                fontFamily: serif ? "Cormorant" : undefined,
              }}
            >
              {HEADLINE}
            </div>
            <div style={{ color: "#f0d06e", fontSize: 30, marginTop: 18 }}>
              Dubai&apos;s trusted real estate agency since 2010
            </div>
            <div style={{ color: "#94a3b8", fontSize: 24, marginTop: 22 }}>
              Buy · Sell · Invest — Dubai, Abu Dhabi &amp; Sharjah
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#cbd5e1", fontSize: 22 }}>
            <div style={{ width: 10, height: 10, borderRadius: 9999, background: "#d4af37" }} />
            Business Bay, Dubai · www.zhmrealestatellc.ae
          </div>
        </div>

        {/* Founder */}
        <div style={{ display: "flex", position: "relative", width: 420, height: 630 }}>
          <img src={founder} width={420} height={630} alt="" style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0) 22%), linear-gradient(0deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0) 30%)",
            }}
          />
          <div style={{ position: "absolute", left: 36, right: 12, bottom: 34, display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 22 }}>Mohammad Shahbaz Rasheed</div>
            <div style={{ color: "#d4af37", fontSize: 18, letterSpacing: 4, marginTop: 6 }}>FOUNDER &amp; CEO</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
