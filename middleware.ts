import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  console.log("session" + session);

  if (
    request.nextUrl.pathname === "/sign-in" ||
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/dashboard" 
  ) {
    if (session) {
      return NextResponse.redirect(
        new URL(`/dashboard/${session.user?.email}`, request.url)
      );
    }
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname === "/dashboard:path*" ||
    request.nextUrl.pathname === "/resume:path*"
  ) {
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-in", "/dashboard:path*", "/resume:path*", "/"],
};
