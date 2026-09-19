import "./globals.css"
import { Poppins } from "next/font/google"
import Script from "next/script"

const chatwootBaseUrl =
  process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL ??
  "https://alternate-appears-mainland-toward.trycloudflare.com"
const chatwootWebsiteToken =
  process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN ??
  "d8nTdbYfSHcqYFZDxPbbpBJ6"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "MQuyen - Personal Profile",
  description: "Trang web cá nhân của MQuyen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Script id="chatwoot-sdk" strategy="afterInteractive">
          {`
            (function(d, t) {
              var BASE_URL = ${JSON.stringify(chatwootBaseUrl)};
              var g = d.createElement(t);
              var s = d.getElementsByTagName(t)[0];
              g.src = BASE_URL + "/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g, s);
              g.onload = function() {
                window.chatwootSDK.run({
                  websiteToken: ${JSON.stringify(chatwootWebsiteToken)},
                  baseUrl: BASE_URL
                });
              };
            })(document, "script");
          `}
        </Script>
      </body>
    </html>
  )
}
