"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEventName, type AnalyticsPayload } from "@/lib/analytics";

interface TrackedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: AnalyticsEventName;
  eventData?: AnalyticsPayload;
  children: ReactNode;
}

export function TrackedLink({
  eventName,
  eventData,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(eventName, eventData);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
