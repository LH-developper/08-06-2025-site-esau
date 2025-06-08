'use client';

import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Client component mounted");
  }, []);

  return <>{children}</>;
}
