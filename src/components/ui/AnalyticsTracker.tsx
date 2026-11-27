"use client";

import { useEffect } from "react";
import { captureUtmAttribution } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    captureUtmAttribution();
  }, []);

  return null;
}
