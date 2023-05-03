import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Particles from "@/components/particles"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6  pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Link
            href={siteConfig.links.linkedin}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm inline-flex font-medium"
            target="_blank"
          >
            Connect with me on Linkedin
            <Icons.SmilePlus className="ml-1" size={16} />
          </Link>

          <h1 className=" font-heading text-5xl sm:text-5xl md:text-6xl lg:text-8xl">
            Noodle Saddle
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-md sm:leading-8">
            Hi, my name is Tserenbal Ganbat , a web developer with UI UX
            designer skills specialized on building exceptional digital
            experience, backed up by {new Date().getFullYear() - 2018} years of
            travel industry expertise.
          </p>
          <div className="space-x-4 mt-4">
            <Link href="/about" className={cn(buttonVariants({ size: "lg" }))}>
              <Icons.arrowRight className="mr-1" size={16} />
              About
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
          </p>
        </div>
      </section> */}
    </>
  )
}
