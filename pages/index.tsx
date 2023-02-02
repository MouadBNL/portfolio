import type { NextPage } from "next"

import Button from "@/components/UI/button"
import ALink from "@/components/UI/a-link"
import Section from "@/components/UI/section"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

import { Entry } from "contentful"
import { useEffect } from "react"
import { Project } from "@/types/project"
import { createContentfulClient } from "@/utils/contentful"
import Head from "next/head"

export async function getStaticProps() {
  try {
    const client = createContentfulClient()

    const res = await client.getEntries({
      content_type: "project",
      "fields.featured": true,
    })

    return {
      props: {
        projects: res.items,
      },
    }
  } catch (error) {
    return {
      props: {
        projects: null,
      },
    }
  }
}

const HeroSection = () => {
  return (
    <section className="bg-gr-900 text-gr-50 relative z-0 px-8">
      <div className="absolute bottom-0 right-2 md:right-4 lg:right-16">
        <span
          className="block mb-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
        >
          mouadbnl.2k01@gmail.com
        </span>
        <div
          className="h-4 md:h-28 bg-primary mx-auto"
          style={{ width: "2px" }}
        ></div>
      </div>
      <div className="min-h-screen flex items-center justify-center container mx-auto flex-col py-28">
        <div className="md:w-10/12 lg:w-7/12 mb-36">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8">
            Bienvenue, je suis Benali Mouad, Développeur web
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-400 w-full md:w-10/12 mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum
          </p>
          <div className="flex justify-center">
            <Button>
              <>Contact me</>
            </Button>
          </div>
        </div>

        <div className="flex items-stretch justify-between  w-full sm:w-9/12 md:w-11/12 lg:w-9/12 flex-col md:flex-row gap-y-8">
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col flex-grow-0 flex-shrink-0">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-4">À propos de moi</h3>
              <p className="text-gr-400 text-lg text-justify">
                Etudiant en génie logiciel passionné par le développement web.
                Je travaille avec Laravel/PHP, NodeJS, Vue.js et TailwindCSS, et
                j'ai hâte de mettre mes connaissances à profit dans un cadre
                professionnel.
              </p>
            </div>
            <div className="mt-auto">
              <ALink href="#">
                <>Voir mon blog</>
              </ALink>
            </div>
          </div>
          <div
            className="hidden md:block bg-gr-400"
            style={{ width: "1px" }}
          ></div>
          <div
            className="block md:hidden bg-gr-400"
            style={{ height: "1px" }}
          ></div>
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col flex-grow-1 flex-shrink-0">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-4">Mon travail</h3>
              <p className="text-gr-400 text-lg text-justify">
                J'ai de l'expérience dans la création d'applications Web
                dynamiques et réactives, et je cherche toujours à apprendre et à
                grandir en tant que développeur.
              </p>
            </div>
            <div className="mt-auto">
              <ALink href="#">
                <>Voir mes projets</>
              </ALink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SkillsSection = () => {
  return (
    <Section backgroundColor="bg-gr-800" title="Skills">
      <>
        <h2 className="text-3xl md:text-4xl w-full lg:w-2/3 xl:w-1/2 font-bold mb-12">
          Une liste des compétences que j'ai développées au fil du temps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            name="HTML"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 384 448"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L34.9 395.8L191.5 448L349.1 395.8L384 0H0ZM308.2 127.9H124.4L128.5 177.3H304.1L290.5 325.7L192.6 352.7V353H191.5L92.8 325.7L86.8 249.9H134.5L138 288L191.5 302.5L245.2 288L251.2 225.8H84.3L71.5 80.2H312.6L308.2 127.9Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="CSS"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 384 448"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L34.9 395.8L192 448L349.1 395.8L384 0H0ZM313.1 80L308.3 127.3L193 176.6L192.7 176.7H304.2L291.4 323.3L193.2 352L94.4 322.8L88 248.9H136.9L140.1 287.2L192.7 300.5L247.4 285.1L251.1 223.5L84.8 223V222.9L84.6 223L81 176.7L193.1 130L199.6 127.3H76.7L70.9 80H313.1Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="Javascript"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 448 448"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V448H448V0H0ZM243.8 349.4C243.8 393 218.2 412.9 180.9 412.9C147.2 412.9 127.7 395.5 117.7 374.4L152 353.7C158.6 365.4 164.6 375.3 179.1 375.3C192.9 375.3 201.7 369.9 201.7 348.8V205.7H243.8V349.4ZM343.4 412.9C304.3 412.9 279 394.3 266.7 369.9L301 350.1C310 364.8 321.8 375.7 342.5 375.7C359.9 375.7 371.1 367 371.1 354.9C371.1 340.5 359.7 335.4 340.4 326.9L329.9 322.4C299.5 309.5 279.4 293.2 279.4 258.9C279.4 227.3 303.5 203.3 341 203.3C367.8 203.3 387 212.6 400.8 237L368 258C360.8 245.1 353 240 340.9 240C328.6 240 320.8 247.8 320.8 258C320.8 270.6 328.6 275.7 346.7 283.6L357.2 288.1C393 303.4 413.1 319.1 413.1 354.3C413.1 392.1 383.3 412.9 343.4 412.9Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="PHP"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 640 338"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M320 17.5C491.4 17.5 623.2 89.7 623.2 169C623.2 248.3 491.3 320.5 320 320.5C148.6 320.5 16.8 248.3 16.8 169C16.8 89.7 148.7 17.5 320 17.5ZM320 0.700012C143.3 0.700012 0 76 0 169C0 262 143.3 337.3 320 337.3C496.7 337.3 640 262 640 169C640 76 496.7 0.700012 320 0.700012ZM218.2 155.5C210.3 196 182.4 191.8 148.1 191.8L161.8 121.2C199.8 121.2 225.6 117.1 218.2 155.5ZM97.4 263.3H134.1L142.8 218.5C183.9 218.5 209.4 221.5 233 199.4C259.1 175.4 265.9 132.7 247.3 111.3C237.6 100.1 222 94.6 200.8 94.6H130.1L97.4 263.3ZM283.1 49.7H319.6L310.9 94.5C342.4 94.5 371.6 92.2 385.7 105.2C400.5 118.8 393.4 136.2 377.4 218.3H340.4C355.8 138.9 358.7 132.3 353.1 126.3C347.7 120.5 335.4 121.7 305.7 121.7L286.9 218.3H250.4L283.1 49.7ZM505 155.5C497 196.6 468.3 191.8 434.9 191.8L448.6 121.2C486.8 121.2 512.4 117.1 505 155.5ZM384.2 263.3H421L429.7 218.5C472.9 218.5 496.8 221 519.9 199.4C546 175.4 552.8 132.7 534.2 111.3C524.5 100.1 508.9 94.6 487.7 94.6H417L384.2 263.3Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="TailwindCSS"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 448 267"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M224 0C164.281 0 126.948 29.6667 112 89C134.41 59.3455 160.538 48.222 190.385 55.6296C207.448 59.8555 219.552 72.1326 233.115 85.7212C254.99 107.871 280.51 133.482 336 133.482C395.719 133.482 433.052 103.815 448 44.4818C425.615 74.1606 399.486 85.2841 369.615 77.8522C352.552 73.6263 340.448 61.3492 326.885 47.7605C304.938 25.5014 279.526 0 224 0ZM112 133.482C52.2813 133.482 14.9479 163.148 0 222.482C22.434 192.827 48.5625 181.704 78.3854 189.111C95.4479 193.337 107.552 205.614 121.115 219.239C142.99 241.353 168.51 267 224 267C283.719 267 321.052 237.333 336 178C313.615 207.655 287.486 218.754 257.615 211.298C240.552 207.072 228.448 194.795 214.885 181.206C193.01 159.056 167.49 133.409 112 133.409V133.482Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="VueJS"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 448 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M356.9 0.300003H280L224 88.9L176 0.300003H0L224 384L448 0.300003H356.9ZM55.7 32.3H109.5L224 230.5L338.4 32.3H392.2L224 320.5L55.7 32.3Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="React"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 512 449"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M418.2 145.2C412.8 143.4 407.4 141.7 402 140.1C402.9 136.4 403.7 132.7 404.5 129C416.8 69.4 408.7 21.5 381.4 5.70001C355.1 -9.39999 312.2 6.30001 268.8 44.1C264.5 47.8 260.3 51.7 256.3 55.6C253.6 53 250.8 50.4 248 47.9C202.5 7.50001 156.9 -9.49999 129.6 6.40001C103.4 21.6 95.6 66.7 106.6 123.1C107.7 128.7 108.9 134.2 110.3 139.8C103.9 141.6 97.6 143.6 91.7 145.7C38.3 164.2 0 193.4 0 223.6C0 254.8 40.8 286.1 96.3 305.1C100.8 306.6 105.3 308.1 109.9 309.4C108.4 315.4 107.1 321.3 105.9 327.4C95.4 382.9 103.6 426.9 129.8 442C156.8 457.6 202.2 441.6 246.4 402.9C249.9 399.8 253.4 396.6 256.9 393.2C261.3 397.5 265.9 401.6 270.5 405.6C313.3 442.4 355.6 457.3 381.7 442.2C408.7 426.6 417.5 379.3 406.1 321.7C405.2 317.3 404.2 312.8 403.1 308.2C406.3 307.3 409.4 306.3 412.5 305.3C470.2 286.2 512 255.3 512 223.6C512 193.3 472.6 163.9 418.2 145.2ZM282.9 60.3C320.1 27.9 354.8 15.2 370.6 24.3C387.5 34 394 73.2 383.4 124.7C382.7 128.1 382 131.4 381.1 134.7C358.9 129.7 336.4 126.1 313.8 124.1C300.8 105.5 286.6 87.7 271.2 71C275.1 67.3 278.9 63.8 282.9 60.3ZM167.2 275.5C172.3 284.2 177.5 292.9 183 301.4C167.4 299.7 151.9 297.2 136.6 293.9C141 279.5 146.5 264.6 152.9 249.4C157.5 258.2 162.2 266.9 167.2 275.5ZM136.9 155.2C151.3 152 166.6 149.4 182.5 147.4C177.2 155.7 172 164.2 167.1 172.8C162.2 181.3 157.4 190 152.9 198.8C146.6 183.9 141.3 169.3 136.9 155.2ZM164.3 224.1C170.9 210.3 178.1 196.8 185.7 183.5C193.3 170.2 201.5 157.3 210.1 144.6C225.1 143.5 240.4 142.9 256 142.9C271.6 142.9 287 143.5 301.9 144.6C310.4 157.2 318.5 170.1 326.2 183.3C333.9 196.5 341.1 210 347.9 223.7C341.2 237.5 334 251.1 326.3 264.5C318.7 277.8 310.6 290.7 302.1 303.5C287.2 304.6 271.7 305.1 256 305.1C240.3 305.1 225.1 304.6 210.4 303.7C201.7 291 193.5 278 185.8 264.7C178.1 251.4 171 237.9 164.3 224.1ZM344.9 275.3C350 266.5 354.8 257.6 359.5 248.6C365.9 263.1 371.5 277.8 376.4 292.9C360.9 296.4 345.2 299.1 329.4 300.9C334.8 292.5 339.9 283.9 344.9 275.3ZM359.3 198.8C354.6 190 349.8 181.2 344.8 172.6C339.9 164.1 334.8 155.7 329.5 147.4C345.6 149.4 361 152.1 375.4 155.4C370.8 170.2 365.4 184.6 359.3 198.8ZM256.2 86.3C266.7 97.7 276.6 109.7 285.8 122.1C266 121.2 246.1 121.2 226.3 122.1C236.1 109.2 246.2 97.2 256.2 86.3ZM140.2 25C157 15.2 194.3 29.2 233.6 64C236.1 66.2 238.6 68.6 241.2 71C225.7 87.7 211.4 105.5 198.3 124.1C175.7 126.1 153.3 129.6 131.1 134.5C129.8 129.4 128.7 124.2 127.6 119C118.2 70.6 124.4 34.1 140.2 25ZM115.7 288.6C111.5 287.4 107.4 286.1 103.3 284.7C82 278 57.8 267.4 40.3 253.5C30.2 246.5 23.4 235.7 21.5 223.6C21.5 205.3 53.1 181.9 98.7 166C104.4 164 110.2 162.2 116 160.5C122.8 182.2 131 203.5 140.5 224.1C130.9 245 122.6 266.6 115.7 288.6ZM232.3 386.6C215.8 401.7 196.7 413.7 175.9 421.9C164.8 427.2 152 427.7 140.6 423.2C124.7 414 118.1 378.7 127.1 331.2C128.2 325.6 129.4 320 130.8 314.5C153.2 319.3 175.8 322.6 198.7 324.3C211.9 343 226.4 360.9 241.9 377.7C238.7 380.8 235.5 383.8 232.3 386.6ZM256.8 362.3C246.6 351.3 236.4 339.1 226.5 326C236.1 326.4 246 326.6 256 326.6C266.3 326.6 276.4 326.4 286.4 325.9C277.2 338.6 267.3 350.7 256.8 362.3ZM387.5 392.3C386.6 404.5 380.6 415.9 371 423.6C355.1 432.8 321.2 420.8 284.6 389.4C280.4 385.8 276.2 381.9 271.9 377.9C287.2 361 301.3 343.1 314.1 324.3C337 322.4 359.8 318.9 382.3 313.8C383.3 317.9 384.2 322 385 326C389.9 347.6 390.7 370.1 387.5 392.3ZM405.7 284.8C402.9 285.7 400.1 286.6 397.2 287.4C390.2 265.6 381.6 244.3 371.7 223.6C381.3 203.2 389.4 182.2 396.2 160.7C401.4 162.2 406.4 163.8 411.2 165.4C457.8 181.4 490.5 205.2 490.5 223.4C490.5 243 455.6 268.3 405.7 284.8ZM256 269.8C281.3 269.8 301.8 249.3 301.8 224C301.8 198.7 281.3 178.2 256 178.2C230.7 178.2 210.2 198.7 210.2 224C210.2 249.3 230.7 269.8 256 269.8Z"
                  fill="white"
                />
              </svg>
            }
          />
          <SkillCard
            name="Laravel"
            icon={
              <svg
                className="h-8 w-8"
                viewBox="0 0 498 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M497.4 115.83C497.321 115.598 497.228 115.37 497.12 115.15C496.977 114.72 496.8 114.302 496.59 113.9C496.428 113.65 496.247 113.413 496.05 113.19C495.83 112.862 495.59 112.548 495.33 112.25C495.1 112.03 494.81 111.85 494.56 111.65C494.275 111.404 493.974 111.177 493.66 110.97L397.4 55.55C396.184 54.8478 394.804 54.4782 393.4 54.4782C391.996 54.4782 390.616 54.8478 389.4 55.55L293.12 111C292.811 111.209 292.517 111.44 292.24 111.69C291.968 111.873 291.707 112.074 291.46 112.29C291.198 112.582 290.958 112.893 290.74 113.22C290.57 113.46 290.35 113.67 290.2 113.93C289.998 114.334 289.824 114.752 289.68 115.18C289.6 115.41 289.47 115.62 289.4 115.86C289.217 116.538 289.123 117.237 289.12 117.94V223.18L208.9 269.37V63.44C208.902 62.7339 208.808 62.0308 208.62 61.35C208.56 61.11 208.42 60.9 208.34 60.67C208.2 60.2434 208.026 59.8287 207.82 59.43C207.68 59.17 207.45 58.96 207.28 58.71C207.06 58.3818 206.82 58.0678 206.56 57.77C206.311 57.5566 206.05 57.3563 205.78 57.17C205.5 56.9269 205.206 56.6998 204.9 56.49L108.61 1.07C107.394 0.36785 106.014 -0.00180054 104.61 -0.00180054C103.206 -0.00180054 101.826 0.36785 100.61 1.07L4.34011 56.49C4.02756 56.6944 3.73314 56.9252 3.46011 57.18C3.18433 57.3631 2.92046 57.5635 2.67011 57.78C2.41147 58.0726 2.17419 58.3834 1.96011 58.71C1.78011 58.96 1.56011 59.17 1.41011 59.43C1.20519 59.8281 1.03457 60.2429 0.900108 60.67C0.790889 60.8877 0.694067 61.1114 0.610108 61.34C0.426138 62.0249 0.332015 62.7308 0.330108 63.44V393.14C0.326275 394.548 0.694107 395.932 1.39645 397.152C2.09878 398.373 3.11075 399.386 4.33011 400.09L196.83 510.93C197.258 511.146 197.703 511.326 198.16 511.47C198.37 511.55 198.57 511.67 198.79 511.73C200.133 512.09 201.547 512.09 202.89 511.73C203.09 511.68 203.26 511.57 203.44 511.51C203.923 511.358 204.391 511.164 204.84 510.93L397.4 400.09C398.619 399.386 399.631 398.373 400.334 397.152C401.036 395.932 401.404 394.548 401.4 393.14V287.88L493.64 234.77C494.867 234.062 495.884 233.041 496.586 231.811C497.289 230.581 497.653 229.186 497.64 227.77V117.92C497.646 117.216 497.565 116.514 497.4 115.83ZM104.6 17.28L184.79 63.43L104.59 109.61L24.4101 63.44L104.6 17.28ZM192.85 77.28V278.6L146.32 305.39L112.63 324.79V123.5L159.16 96.71L192.85 77.28ZM192.85 490.06L16.3701 388.5V77.32L50.0601 96.7L96.5801 123.5V338.68C96.6004 338.982 96.6405 339.283 96.7001 339.58C96.724 339.977 96.7775 340.371 96.8601 340.76C96.9618 341.07 97.0889 341.371 97.2401 341.66C97.3515 342.005 97.492 342.339 97.6601 342.66C97.845 342.931 98.0453 343.192 98.2601 343.44C98.4602 343.735 98.6807 344.016 98.9201 344.28C99.1501 344.5 99.4401 344.66 99.6901 344.86C99.9631 345.097 100.25 345.318 100.55 345.52L192.74 397.7L192.85 490.06ZM200.85 383.89L120.79 338.57L204.88 290.16L297.14 237.05L377.27 283.18L318.47 316.74L200.85 383.89ZM385.37 388.46L208.88 490.11V397.8L339.6 323.2L385.37 297.05V388.46ZM385.37 269.33L351.68 250L305.15 223.21V131.79L338.84 151.19L385.37 178V269.33ZM393.37 164.05L313.17 117.88L393.37 71.72L473.55 117.87L393.37 164.05ZM401.37 269.33V178L448 151.19L481.68 131.79V223.18L401.37 269.33Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </>
    </Section>
  )
}

const ProjectsSection = ({ projects }: { projects: Entry<Project>[] }) => {
  return (
    <Section backgroundColor="bg-gr-900" title="Projets">
      <>
        <div className="mb-12 flex justify-between items-start flex-col md:flex-row gap-y-8">
          <h2 className="text-3xl md:text-4xl w-full md:w-8/12 xl:w-4/12 font-bold">
            Découvrez les derniers projets que j'ai réalisés
          </h2>

          <ALink href="/projects">
            <>Voir tous les projets</>
          </ALink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 xl:gap-x-8 gap-y-12">
          {/* <ProjectCard title="PFE Insight" icon={<>F</>} technologies={['VueJs', 'Laravel']} github="test" demo="test" />
              <ProjectCard title="FEE7 Platform" technologies={['VueJs', 'Laravel', 'fdsgsd', 'fdgsfgdsf', 'fdgsfdgs']} github="test" demo="test" />
              <ProjectCard title="Judge0 package" technologies={['ReactJS', 'Laravel', 'Judge0']} github="test" /> */}

          {projects.map((p) => (
            <ProjectCard project={p.fields} key={p.sys.id} />
          ))}
        </div>
      </>
    </Section>
  )
}

const ContactSection = () => {
  return (
    <Section backgroundColor="bg-gr-800" title="Contact">
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-16">
          <div>
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-gr-50 xl:w-2/3 mb-8">
                Intéressé par mon travail ? Prenons contact !
              </h2>

              <h4 className="text-gr-300 text-xl mb-4">Mon email</h4>
              <ALink href="#">
                <>mouadbnl.2k01@gmail.com</>
              </ALink>
            </div>
          </div>

          <ContactForm />
        </div>
      </>
    </Section>
  )
}

interface HomePageProps {
  projects: Entry<Project>[]
}

const Home = ({ projects }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Benali Mouad - Portfolio</title>
      </Head>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  )
}

export default Home
