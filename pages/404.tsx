import Head from "next/head"

const Page404 = () => {
  return (
    <>
      <Head>
        <title>404 - Benali Mouad</title>
      </Head>
      <section className="text-gr-50 bg-gr-900 px-4 h-full flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold pb-4 mb-4 border-b border-gr-500">
            404
          </h1>
          <p className="text-2xl tracking-widest">
            Cette page est introuvable.
          </p>
        </div>
      </section>
    </>
  )
}

export default Page404
