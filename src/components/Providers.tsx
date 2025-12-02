"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { config } from "@/config";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={config.oauth.google.clientId}>
      {children}
    </GoogleOAuthProvider>
  );
}
