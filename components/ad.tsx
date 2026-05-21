"use client";

import { useEffect } from "react";

interface AdProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal";
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function Ad({ 
  adSlot, 
  adFormat = "auto", 
  fullWidth = true,
  className = "" 
}: AdProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ 
          display: "block",
          textAlign: "center",
        }}
        data-ad-client="ca-pub-XXXXXXXXXX" // Replace with your AdSense publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? "true" : "false"}
      />
    </div>
  );
}

// Horizontal ad for between content sections
export function HorizontalAd({ adSlot }: { adSlot: string }) {
  return (
    <div className="my-8 rounded-lg bg-secondary/30 p-4">
      <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
      <Ad adSlot={adSlot} adFormat="horizontal" />
    </div>
  );
}

// Sidebar ad for lesson pages
export function SidebarAd({ adSlot }: { adSlot: string }) {
  return (
    <div className="sticky top-24 rounded-lg bg-secondary/30 p-4">
      <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
      <Ad adSlot={adSlot} adFormat="vertical" />
    </div>
  );
}

// In-article ad for between paragraphs
export function InArticleAd({ adSlot }: { adSlot: string }) {
  return (
    <div className="my-6 py-4 border-y border-border">
      <p className="text-xs text-muted-foreground text-center mb-2">Advertisement</p>
      <Ad adSlot={adSlot} adFormat="fluid" />
    </div>
  );
}
