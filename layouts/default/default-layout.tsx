import { ReactElement } from "react"
import DefaultHeader from "./default-header"
import DefaultFooter from "./default-footer"
import Script from "next/script"

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="antialiased">
      <DefaultHeader />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script strategy="lazyOnload" id="google-analytics-script">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}</Script>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col">{children}</main>
        <DefaultFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
