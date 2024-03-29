import ALink from "@/components/UI/a-link"
import { Project } from "@/types/project"
import { createContentfulClient } from "@/utils/contentful"
import { Entry } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Head from "next/head"

const client = createContentfulClient()

export const getStaticPaths = async () => {
  const res = await client.getEntries<Project>({
    content_type: "project",
  })

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const slug = params.slug as string
  const res = await client.getEntries<Project>({
    content_type: "project",
    "fields.slug": slug,
  })

  return {
    props: {
      project: res.items[0],
    },
  }
}

interface ProjectDetailsProps {
  project: Entry<Project>
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  console.log(project)
  const pageTitle = `${project.fields.title} - Benali Mouad`
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="bg-gr-900 py-24 text-gr-50 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold lg:w-1/2 mt-24 mb-8">
            {project.fields.title}
          </h1>
          <p className="lg:w-2/3 text-xl text-gray-400">
            {project.fields.summary}
          </p>
        </div>
      </section>
      {project.fields.thumbnail.fields.file.url && (
        <section className="w-full aspect-video bg-gr-800 relative overflow-hidden">
          <img
            className="absolute inset-0 object-cover w-full"
            src={`https:${project.fields.thumbnail.fields.file.url}`}
            alt=""
          />
        </section>
      )}
      <section className="py-32 bg-gr-900 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="">
            <div className="sticky top-24">
              {!!project.fields.client && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gr-400 mb-2">Client</h3>
                  <h3 className="text-2xl font-medium text-gr-50">
                    {project.fields.client}
                  </h3>
                </div>
              )}
              {!!project.fields.service && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gr-400 mb-2">
                    Service
                  </h3>
                  <h3 className="text-2xl font-medium text-gr-50">
                    {project.fields.service}
                  </h3>
                </div>
              )}
              {!!project.fields.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gr-400 mb-2">
                    Technologies
                  </h3>
                  <h3 className="text-2xl font-medium text-gr-50">
                    {project.fields.technologies.join(", ")}
                  </h3>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2 contentful-rich-text order-3 lg:order-2 lg:mt-0 mt-16">
            {!!project.fields.about ? (
              <div>
                {documentToReactComponents(project.fields.about, {
                  renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: (node) => (
                      <figure className="mt-8 mb-12">
                        <img
                          className="mb-2"
                          src={node.data?.target?.fields?.file?.url}
                          alt={node.data?.target?.fields?.title}
                        />
                        <figcaption className="text-center text-gr-500">
                          {node.data?.target?.fields?.title}
                        </figcaption>
                      </figure>
                    ),
                  },
                })}
              </div>
            ) : (
              <p>Section à propos du projet en cours de développement</p>
            )}
          </div>

          <div className="order-2 lg:order-3">
            <div className="sticky top-24 flex flex-col justify-end">
              {!!project.fields.github && (
                <div className="mb-8 ml-auto">
                  <h3 className="text-xl font-bold text-gr-400 mb-2">GitHub</h3>
                  <ALink
                    href={project.fields.github}
                    target="_blank"
                    ariaLabel="open-project"
                  >
                    <span className="text-xl">Visit repo</span>
                  </ALink>
                </div>
              )}
              {!!project.fields.demo && (
                <div className="mb-8 ml-auto">
                  <h3 className="text-xl font-bold text-gr-400 mb-2">Demo</h3>
                  <ALink
                    href={project.fields.demo}
                    target="_blank"
                    ariaLabel="open-project"
                  >
                    <span className="text-xl">Live demo</span>
                  </ALink>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDetails
