import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("refreshToken");

  const path = request.nextUrl.pathname;

  if (path == "/admin" || path.startsWith("/admin")) {
    if (!token) {
      console.log("no token");
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas de solicitud excepto las que comienzan con:
     * - api (rutas API)
     * - _next/static (archivos estáticos)
     * - _next/image (archivos de optimización de imágenes)
     * - favicon.ico (archivo favicon)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
