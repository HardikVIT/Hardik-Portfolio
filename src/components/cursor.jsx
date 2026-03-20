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
  const mainRef  = useRef(null);
  const redRef   = useRef(null);
  const blueRef  = useRef(null);

  const pos       = useRef({ x: -300, y: -300 });
  const isMoving  = useRef(false);
  const idleTimer = useRef(null);
  const glitchRaf = useRef(null);

  // Use refs for color state so RAF reads latest value without re-renders
  const isDarkRef     = useRef(true);
  const hoveredRef    = useRef(false);

  // Still need state to trigger SVG re-render when color actually changes
  const [isDark,   setIsDark]   = useState(true);
  const [hovered,  setHovered]  = useState(false);

  const SIZE = 26;
  const HALF = SIZE / 2;

  const place = (el, x, y, ox = 0, oy = 0) => {
    if (!el) return;
    el.style.transform = `translate(${x + ox}px, ${y + oy}px)`;
  };

  // Apply cursor colors directly to DOM — zero React re-render lag
  const applyColors = useCallback((x, y) => {
    const lum  = getLuminanceAt(x, y);
    const dark = lum <= 0.55;

    // Only trigger React re-render when value actually flips
    if (dark !== isDarkRef.current) {
      isDarkRef.current = dark;
      setIsDark(dark);
    }
  }, []);

  const stopGlitch = useCallback(() => {
    cancelAnimationFrame(glitchRaf.current);
    isMoving.current = false;
    const { x, y } = pos.current;
    place(redRef.current,  x, y);
    place(blueRef.current, x, y);
  }, []);

  const animateGlitch = useCallback(() => {
    if (!isMoving.current) return;
    const rx = (Math.random() - 0.5) * 8;
    const ry = (Math.random() - 0.5) * 3;
    const bx = (Math.random() - 0.5) * 3;
    const by = (Math.random() - 0.5) * 8;
    const { x, y } = pos.current;
    place(redRef.current,  x, y, rx, ry);
    place(blueRef.current, x, y, bx, by);
    glitchRaf.current = requestAnimationFrame(animateGlitch);
  }, []);

  useEffect(() => {
    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Move main cursor — instant, no delay
      place(mainRef.current, e.clientX, e.clientY);

      // Sample bg color on every move — synchronous, no timer
      applyColors(e.clientX, e.clientY);

      if (!isMoving.current) {
        isMoving.current = true;
        glitchRaf.current = requestAnimationFrame(animateGlitch);
      }

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(stopGlitch, 150);
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
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      clearTimeout(idleTimer.current);
      cancelAnimationFrame(glitchRaf.current);
    };
  }, [animateGlitch, stopGlitch, applyColors]);

  const mainColor    = hovered ? "#a855f7" : isDark ? "#ffffff" : "#111111";
  const ghostBlend   = isDark ? "screen" : "multiply";
  const redColor     = isDark ? "#ff2255" : "#cc0033";
  const cyanColor    = isDark ? "#00ddff" : "#0088cc";
  const ghostOpacity = isDark ? 0.5 : 0.4;

  const crosshairSVG = (color, opacity = 1, isHov = false) => {
    const s = SIZE;
    const h = s / 2;
    const gap     = isHov ? 6  : 4;
    const lineLen = isHov ? 13 : 9;
    const stroke  = isHov ? 1.8 : 1.2;

    return (
      <svg
        width={s} height={s}
        viewBox={`0 0 ${s} ${s}`}
        style={{ overflow: "visible", opacity, display: "block" }}
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

  const baseStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    willChange: "transform",
    marginLeft: `-${HALF}px`,
    marginTop: `-${HALF}px`,
    transition: "none",
  };

  return (
    <>
      <style>{`*, *::before, *::after { cursor: none !important; }`}</style>

      <div ref={redRef} data-cursor-layer="true"
        style={{ ...baseStyle, mixBlendMode: ghostBlend }}>
        {crosshairSVG(redColor, ghostOpacity, hovered)}
      </div>

      <div ref={blueRef} data-cursor-layer="true"
        style={{ ...baseStyle, mixBlendMode: ghostBlend }}>
        {crosshairSVG(cyanColor, ghostOpacity, hovered)}
      </div>

      <div ref={mainRef} data-cursor-layer="true" style={baseStyle}>
        {crosshairSVG(mainColor, 1, hovered)}
      </div>
    </>
  );
}

export default GlitchCursor;