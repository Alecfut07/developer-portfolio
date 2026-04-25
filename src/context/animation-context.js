"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  startTransition,
} from "react";

const defaultSettings = {
  duration: 700,
  delay: 100,
  easing: "ease-out",
  intensity: 0.5,
  enabled: true,
  preset: "moderate",
};

const presets = {
  subtle: { duration: 500, delay: 50, easing: "ease-out", intensity: 0.3 },
  moderate: { duration: 700, delay: 100, easing: "ease-out", intensity: 0.5 },
  playful: { duration: 800, delay: 150, easing: "ease-in-out", intensity: 0.7 },
  dramatic: { duration: 1000, delay: 200, easing: "ease-in-out", intensity: 1 },
  none: { enabled: false },
};

const AnimationContext = createContext(undefined);

export function AnimationProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem("animationSettings");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      startTransition(() => {
        setSettings((prev) => ({ ...prev, ...parsed }));
      });
    } catch (error) {
      console.error("Failed to parse animation settings: ", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("animationSettings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (next) =>
    setSettings((prev) => ({ ...prev, ...next }));

  const applyPreset = (preset) => {
    const presetSettings = presets[preset];
    setSettings((prev) => ({ ...prev, ...presetSettings }));
  };

  return (
    <AnimationContext.Provider
      value={{ settings, updateSettings, applyPreset }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const ctx = useContext(AnimationContext);
  if (ctx === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return ctx;
}
