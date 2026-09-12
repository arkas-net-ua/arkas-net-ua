"use client";

import { useLayoutEffect, useRef, type ReactNode, type RefObject } from "react";

function useFitScreen(outerRef: RefObject<HTMLDivElement | null>, innerRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = (scale: number) => {
      const next = String(scale);
      if ("zoom" in inner.style) {
        inner.style.zoom = next;
        inner.style.transform = "";
        inner.style.width = "";
        inner.style.height = "";
        return;
      }
      inner.style.zoom = "";
      inner.style.transformOrigin = "top left";
      if (scale < 1) {
        inner.style.transform = `scale(${next})`;
        inner.style.width = `${100 / scale}%`;
        inner.style.height = `${100 / scale}dvh`;
      } else {
        inner.style.transform = "";
        inner.style.width = "";
        inner.style.height = "";
      }
    };

    const fit = () => {
      apply(1);
      const available = Math.round(window.visualViewport?.height ?? outer.clientHeight);
      const needed = inner.scrollHeight;
      apply(needed > available + 2 ? Math.max(0.68, available / needed) : 1);
    };

    const frame = requestAnimationFrame(fit);
    const ro = new ResizeObserver(() => requestAnimationFrame(fit));
    ro.observe(inner);
    inner.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", fit, { once: true });
    });
    window.addEventListener("resize", fit);
    window.visualViewport?.addEventListener("resize", fit);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("resize", fit);
      window.visualViewport?.removeEventListener("resize", fit);
    };
  }, [innerRef, outerRef]);
}

export function FitScreen({ children, className }: { children: ReactNode; className?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  useFitScreen(outerRef, innerRef);

  return (
    <div className={["fit-screen", className].filter(Boolean).join(" ")} ref={outerRef}>
      <div className="fit-screen-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
}

export function HomeScreen({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  useFitScreen(outerRef, innerRef);

  return (
    <div className="home-screen" ref={outerRef}>
      <div className="home-screen-fit" ref={innerRef}>
        {children}
      </div>
    </div>
  );
}
