import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  // handle i18n routing
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ar"],
    defaultLocale: "en",
  });

  return handleI18nRouting(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
