import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("SessionToken")?.value || "";

  // Ignore Next.js internals and API routes
  if (path.startsWith("/_next/") || path.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Restrict root "/" to authenticated users only
  if (path === "/" && !token) {
    return NextResponse.redirect(new URL("/landing", request.url));
  }

  // For all other routes (including "/landing", "/auth/signin", "/auth/signup"), no restriction
  // Authenticated users can access both "/" and "/landing"
  // Unauthenticated users can access "/landing", "/auth/signin", "/auth/signup"
  return NextResponse.next();
}

// This matcher applies to all routes except assets, API, etc.
export const config = {
  matcher: ["/((?!_next|api).*)"],
};
