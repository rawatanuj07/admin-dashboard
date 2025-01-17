import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/auth/signin" || path === "/auth/signup" || path === "/landing";
  const token = request.cookies.get("SessionToken")?.value || "";

  if (path.startsWith("/_next/") || path.startsWith("/api/")) {
    return NextResponse.next();
  }

  if (isPublicPath && token) {
    console.log("Redirecting to home page");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    console.log("Redirecting to sign-in page");
    return NextResponse.redirect(new URL("/landing", request.url));
  }
  console.log(`Proceeding with request to URL: ${request.url}`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/signup", "/auth/signin", "/:path*"],
};
