import { ReactElement } from "react"
import DefaultHeader from "./default-header"
import DefaultFooter from "./default-footer"

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="antialiased">
      <DefaultHeader />
      <div className="flex flex-col min-h-screen">
        <main>{children}</main>
        <DefaultFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
