import { NextResponse, URLPattern, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("I log always");
  if (request.nextUrl.pathname.startsWith("/about")) {
    console.log("log when about page is open");
  }
  const geo = request.geo;
  const ip = request.ip;
  const url = request.url;
  const ua = userAgent(request);
  const urlpath = new URLPattern({ pathname: "/about" });
  console.log("geo", geo);
  console.log("ip", ip);
  console.log("url", urlpath.exec("https://localhost:3000/about"));
  console.log("ua", ua);

  return;
}
