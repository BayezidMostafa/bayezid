"use client";

import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

function Cursor() {
  const cursorDotOutline = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const cursorVisible = useRef<boolean>(false);
  const cursorEnlarged = useRef<boolean>(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  const onMouseEnter = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };
  const onMouseLeave = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };
  const onMouseDown = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const onMouseUp = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };
  const onResize = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  };

  /**
   * Hooks
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      window.addEventListener("resize", onResize);
      requestRef.current = requestAnimationFrame(animateDotOutline);

      handleLinks();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("resize", onResize);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, []);

  let { x, y } = mousePosition;
  let endX = width / 2;
  let endY = height / 2;

  /**
   * Position Dot (cursor)
   * @param {MouseEvent} e
   */
  function positionDot(e: MouseEvent) {
    cursorVisible.current = true;
    toggleCursorVisibility();
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    if (cursorDot.current) {
      cursorDot.current.style.top = `${endY}px`;
      cursorDot.current.style.left = `${endX}px`;
    }
  }

  /**
   * Toggle Cursor Visibility
   */
  function toggleCursorVisibility() {
    if (cursorVisible.current) {
      if (cursorDot.current) cursorDot.current.style.opacity = "1";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.opacity = "1";
    } else {
      if (cursorDot.current) cursorDot.current.style.opacity = "0";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.opacity = "0";
    }
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorEnlarged.current) {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(5)";
    } else {
      if (cursorDot.current)
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      if (cursorDotOutline.current)
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(1)";
    }
  }

  /**
   * Handle Links
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinks() {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
      });
    });
  }

  /**
   * Animate Dot Outline
   * Animates cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = `${y}px`;
        cursorDotOutline.current.style.left = `${x}px`;
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
}

export default Cursor;
