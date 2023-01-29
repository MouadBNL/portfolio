import { ReactElement } from "react"

interface SectionProps {
  children: ReactElement
  title: string
  backgroundColor: string
}

const Section = ({ children, title, backgroundColor }: SectionProps) => {
  return (
    <section className={"py-24 text-gr-50 " + backgroundColor}>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold">
          <span className="text-primary">{"<"}</span>
          {title}
          <span className="text-primary">{">"}</span>
        </h3>
        <div className="py-8">{children}</div>
        <h3 className="text-2xl font-bold text-right">
          <span className="text-primary">{"</"}</span>
          {title}
          <span className="text-primary">{">"}</span>
        </h3>
      </div>
    </section>
  )
}

export default Section
