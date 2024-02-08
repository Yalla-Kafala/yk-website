import AppTheme from "@/src/utils/AppTheme";
import type { Metadata } from "next";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Container, CssBaseline } from "@mui/material";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Navbar from "@/src/components/Navbar";
import AppFooter from "@/src/components/AppFooter";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Yalla Kafala",
  description: "Yalla Kafala",
};

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) => {
  const messages = useMessages();

  return (
    <html dir={locale === "en" ? "ltr" : "rtl"} lang={locale}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider theme={AppTheme}>
              <CssBaseline />
              <Container sx={{ padding: 0, maxWidth: "lg" }}>
                <Navbar />
                {children}
                <AppFooter />
              </Container>
            </ThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default LocaleLayout;
