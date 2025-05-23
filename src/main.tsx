
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react"
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = "pk_test_aGFybWxlc3MtbXVsbGV0LTY1LmNsZXJrLmFjY291bnRzLmRldiQ"
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    clerkJSVersion="5.56.0-snapshot.v20250312225817"
    signInUrl="/sign-in"
    signUpUrl="/sign-up"
    signInFallbackRedirectUrl="/dashboard"
    signUpFallbackRedirectUrl="/sign-in"
    signInForceRedirectUrl="/dashboard"
    signUpForceRedirectUrl="/sign-in"
    afterSignOutUrl="/"
  >
    <App />
  </ClerkProvider>
);
