'use client';

import { useEffect } from "react";
import Script from "next/script";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Client component mounted");
  }, []);

  return (
    <>
      {/* Script d'initialisation Chatbase */}
      <Script
        id="chatbase-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if ((!window.chatbase || window.chatbase("getState") !== "initialized")) {
                window.chatbase = (...args) => {
                  if (!window.chatbase.q) window.chatbase.q = [];
                  window.chatbase.q.push(args);
                };
              }
            })();
          `,
        }}
      />

      {/* Chargement du widget Chatbase */}
      <Script
        src="https://www.chatbase.co/embed.min.js"
        strategy="afterInteractive"
      />

      {/* Contenu du site */}
      {children}
    </>
  );
}
