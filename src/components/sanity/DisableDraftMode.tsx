// src/components/DisableDraftMode.tsx

"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/api/draft-mode/disable");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-1/2 right-4 z-50 -translate-y-1/2 bg-gray-50 px-4 py-2 text-black"
    >
      Disable Draft Mode
    </button>
  );
}
