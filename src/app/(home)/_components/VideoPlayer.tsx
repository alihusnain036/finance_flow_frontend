"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoPlayer({
  src = "/videos/sample.mp4",
  poster,
}: {
  src?: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video || hasFailed) return;

    if (video.paused) {
      video.play().then(
        () => setIsPlaying(true),
        () => setHasFailed(true)
      );
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-dark-blue shadow-xl ring-1 ring-white/10">
      {/* Shown until the video plays, and kept if the file is missing. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#123a8f_0%,#041038_55%,#010725_100%)]"
      />

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onError={() => setHasFailed(true)}
        onEnded={() => setIsPlaying(false)}
        className={`relative h-full w-full object-cover transition-opacity ${
          hasFailed ? "opacity-0" : "opacity-100"
        }`}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label="Play product tour"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-dark-blue/40 transition hover:bg-dark-blue/25"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition group-hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
          <span className="text-sm font-medium text-white/80">
            Watch the 2 minute tour
          </span>
        </button>
      )}

      {isPlaying && (
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label="Pause product tour"
          className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
        >
          <Pause className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
