import { useEffect, useRef, useState, useCallback } from "react";

function getLuminanceAt(x, y) {
  try {
    const elements = document.elementsFromPoint(x, y);
    for (const el of elements) {
      if (el.dataset.cursorLayer) continue;
      const bg = window.getComputedStyle(el).backgroundColor;
      if (!bg || bg === "transparent" || bg === "rgba(0, 0, 0, 0)") continue;
      const match = bg.match(/[\d.]+/g);
      if (!match || match.length < 3) continue;
      const r = parseFloat(match[0]);
      const g = parseFloat(match[1]);
      const b = parseFloat(match[2]);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
  } catch (_) {}
  return 0;
}

function GlitchCursor() {
  const mainRef = useRef(null);

  const isDarkRef  = useRef(true);
  const hoveredRef = useRef(false);

  const [isDark,  setIsDark]  = useState(true);
  const [hovered, setHovered] = useState(false);

  const SIZE = 26;
  const HALF = SIZE / 2;

  const applyColors = useCallback((x, y) => {
    const lum  = getLuminanceAt(x, y);
    const dark = lum <= 0.55;
    if (dark !== isDarkRef.current) {
      isDarkRef.current = dark;
      setIsDark(dark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      if (mainRef.current) {
        mainRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      applyColors(e.clientX, e.clientY);
    };

    const onOver = (e) => {
      const isClickable =
        e.target.tagName === "A"      ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a")         ||
        e.target.closest("button");
      if (isClickable) {
        hoveredRef.current = true;
        setHovered(true);
      }
    };

    const onOut = () => {
      hoveredRef.current = false;
      setHovered(false);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, [applyColors]);

  const mainColor = hovered ? "#a855f7" : isDark ? "#ffffff" : "#111111";

  const crosshairSVG = (color, isHov = false) => {
    const s = SIZE;
    const h = s / 2;
    const gap     = isHov ? 6  : 4;
    const lineLen = isHov ? 13 : 9;
    const stroke  = isHov ? 1.8 : 1.2;

    return (
      <svg
        width={s} height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={{ overflow: "visible", display: "block" }}
      >
        <circle cx={h} cy={h} r={isHov ? 2.2 : 1.6} fill={color} />

        <line x1={h} y1={h - gap} x2={h} y2={h - gap - lineLen}
          stroke={color} strokeWidth={stroke} strokeLinecap="round" />
        <line x1={h} y1={h + gap} x2={h} y2={h + gap + lineLen}
          stroke={color} strokeWidth={stroke} strokeLinecap="round" />
        <line x1={h - gap} y1={h} x2={h - gap - lineLen} y2={h}
          stroke={color} strokeWidth={stroke} strokeLinecap="round" />
        <line x1={h + gap} y1={h} x2={h + gap + lineLen} y2={h}
          stroke={color} strokeWidth={stroke} strokeLinecap="round" />

        {isHov && (
          <circle cx={h} cy={h} r={18}
            fill="none" stroke={color}
            strokeWidth={0.8} strokeDasharray="3 4" opacity={0.6}
          />
        )}

        {[
          [h-14,h-14,h-14,h-9, h-14,h-14,h-9, h-14],
          [h+14,h-14,h+14,h-9, h+14,h-14,h+9, h-14],
          [h-14,h+14,h-14,h+9, h-14,h+14,h-9, h+14],
          [h+14,h+14,h+14,h+9, h+14,h+14,h+9, h+14],
        ].map(([x1,y1,x2,y2,x3,y3,x4,y4], i) => (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={color} strokeWidth={isHov ? 1.4 : 1} strokeLinecap="round" />
            <line x1={x3} y1={y3} x2={x4} y2={y4}
              stroke={color} strokeWidth={isHov ? 1.4 : 1} strokeLinecap="round" />
          </g>
        ))}
      </svg>
    );
  };

  return (
    <>
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>

      <div
        ref={mainRef}
        data-cursor-layer="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          marginLeft: `-${HALF}px`,
          marginTop: `-${HALF}px`,
          transition: "none",
        }}
      >
        {crosshairSVG(mainColor, hovered)}
      </div>
    </>
  );
}

export default GlitchCursor;