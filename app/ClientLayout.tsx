'use client';

import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "dogqc3KRy9ulAk6FKPNFg"); // Mets ici le bon ID Chatbase
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <>{children}</>;
}
