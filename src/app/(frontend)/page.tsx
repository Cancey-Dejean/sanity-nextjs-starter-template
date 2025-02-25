import Hero from "@/components/blocks/Hero";
import GetStartedCode from "@/components/_demo/GetStartedCode";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <div className="via-background relative bg-gradient-to-r from-red-200 from-0% via-40%">
        <div className="from-background absolute top-0 h-40 w-full bg-gradient-to-b"></div>
        <div className="from-background absolute bottom-0 h-40 w-full bg-gradient-to-t"></div>

        <Container className="relative">
          <div className="mx-auto max-w-2xl py-20 text-center lg:max-w-4xl lg:px-12">
            <div className="flex flex-col items-center gap-4">
              <div className="text-md prose leading-6 uppercase">
                A starter template for
              </div>
              <h1 className="font-display text-foreground text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <Link className="text-red-500" href="https://sanity.io/">
                  Sanity
                </Link>{" "}
                +{" "}
                <Link className="text-foreground" href="https://nextjs.org/">
                  Next.js
                </Link>
              </h1>
            </div>
            <div className="prose sm:prose-lg md:prose-xl lg:prose-2xl mt-6 space-y-6 text-gray-700">
              <p>
                This starter is a statically generated site that uses Next.js
                for the frontend and Sanity to handle its content. It comes with
                a standalone Sanity Studio that offers features like real-time
                collaboration, instant side-by-side content previews, and
                intuitive editing.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <GetStartedCode />
              <Link
                href="https://www.sanity.io/docs"
                className="inline-flex text-xs text-red-500 underline hover:text-gray-900 md:text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sanity Documentation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-1 inline h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-gray-10 border-t">
        <div className="container">
          <aside className="py-12 sm:py-20">
            {/* <Suspense>{await AllPosts()}</Suspense> */}
          </aside>
        </div>
      </div>
      {/* <Hero /> */}
    </>
  );
}
