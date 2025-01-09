import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/auth/signin" || path === "/auth/signup";
  const token = request.cookies.get("token")?.value || "";
  console.log(`Path: ${path}, Token: ${token}`);

  console.log(`Path: ${path}, IsPublicPath: ${isPublicPath}, Token: ${token}`);
  // Allow static files and API routes
  if (path.startsWith("/_next/") || path.startsWith("/api/")) {
    return NextResponse.next();
  }

  console.log(`Path: ${request.nextUrl.pathname}`);

  if (isPublicPath && token) {
    console.log("Redirecting to home page");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    console.log("Redirecting to sign-in page");
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  console.log(`Proceeding with request to URL: ${request.url}`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/signup", "/auth/signin", "/:path*"],
};
