import { ImageResponse } from "next/og";

export const alt =
  "Sean Stanley — frontend developer who likes stuff that looks good.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dome =
  "radial-gradient(circle at 30% 22%, #f8f7f4 0%, #ebeae6 50%, #d9d7d1 100%)";

/** The link-preview card: a slice of the control panel, rendered at build time. */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e4e3df",
      }}
    >
      <div
        style={{
          width: 1040,
          height: 470,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 44,
          borderRadius: 40,
          background: "#ebeae6",
          boxShadow:
            "-14px -14px 30px rgba(255,255,255,0.95), 18px 22px 44px rgba(118,106,88,0.28)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 22, letterSpacing: 4, color: "#5c5c64" }}>
            PORTFOLIO
          </span>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              background: "#ff5b1f",
              boxShadow: "0 0 18px rgba(255,91,31,0.8)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            padding: 10,
            borderRadius: 26,
            background: "#dfddd8",
            boxShadow:
              "inset 4px 6px 12px rgba(118,106,88,0.32), inset -4px -4px 10px rgba(255,255,255,0.95)",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "baseline",
              gap: 28,
              padding: "26px 34px",
              borderRadius: 18,
              background: "#111113",
            }}
          >
            <span style={{ fontSize: 84, color: "#ff5b1f", fontWeight: 700 }}>
              01
            </span>
            <span
              style={{
                fontSize: 84,
                color: "#f2efe8",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              sean stanley
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 32, color: "#46464e" }}>
            Frontend developer who likes stuff that looks good.
          </span>
          <div style={{ display: "flex", gap: 14 }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  background: i === 2 ? "#dfddd8" : dome,
                  boxShadow:
                    i === 2
                      ? "inset 3px 4px 6px rgba(118,106,88,0.32)"
                      : "-3px -3px 6px rgba(255,255,255,0.95), 4px 6px 10px rgba(118,106,88,0.32)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
