import { ReactElement } from "react"
import DefaultHeader from "./default-header"
import DefaultFooter from "./default-footer"

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="antialiased">
      <DefaultHeader />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col">{children}</main>
        <DefaultFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
