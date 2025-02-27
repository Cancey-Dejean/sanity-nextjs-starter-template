import type { Metadata } from "next";
import Head from "next/head";

import PageBuilderPage from "@/components/sanity/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { PageOnboarding } from "@/components/_demo/Onboarding";
import { GetPageQueryResult } from "../../../../sanity.types";
import { getPageQuery, pagesSlugs } from "@/sanity/lib/queries";
import Container from "@/components/container";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { data: page } = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  });

  return {
    title: page?.name,
    description: page?.heading,
  } satisfies Metadata;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const [{ data: page }] = await Promise.all([
    sanityFetch({ query: getPageQuery, params }),
  ]);

  if (!page?._id) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    );
  }

  return (
    <div className="my-12 lg:my-24">
      <Head>
        <title>{page.heading}</title>
      </Head>
      <Container>
        <div className="mb-20 border-b border-gray-100 pb-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              {page.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed font-light text-gray-600 uppercase lg:text-lg">
              {page.subheading}
            </p>
          </div>
        </div>
      </Container>

      <PageBuilderPage page={page as GetPageQueryResult} />
    </div>
  );
}
