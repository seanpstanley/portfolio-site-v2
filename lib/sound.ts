"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "bubble-sound";

const listeners = new Set<() => void>();

function read(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// sound is opt-in: off on the server and until the visitor turns it on
export function useSoundEnabled() {
  const enabled = useSyncExternalStore(subscribe, read, () => false);

  const toggle = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, read() ? "off" : "on");
    } catch {
      // storage unavailable: nothing to persist
    }
    listeners.forEach((listener) => listener());
  }, []);

  return { enabled, toggle };
}

let audio: AudioContext | null = null;

// a short synthesized "pop": a pitch-dropping blip plus a tiny noise click
export function playPop() {
  if (typeof window === "undefined" || !("AudioContext" in window)) return;
  audio ??= new AudioContext();
  const t = audio.currentTime;

  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(480 + Math.random() * 160, t);
  osc.frequency.exponentialRampToValueAtTime(120, t + 0.08);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.3, t + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
  osc.connect(gain).connect(audio.destination);
  osc.start(t);
  osc.stop(t + 0.12);

  const length = Math.floor(audio.sampleRate * 0.015);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / length);
  }
  const noise = audio.createBufferSource();
  const noiseGain = audio.createGain();
  noise.buffer = buffer;
  noiseGain.gain.value = 0.12;
  noise.connect(noiseGain).connect(audio.destination);
  noise.start(t);
}
