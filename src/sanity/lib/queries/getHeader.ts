import { sanityFetch } from "../live";
import { defineQuery } from "groq";

export async function getHeader() {
  const getHeaderQuery = defineQuery(`*[_type == "header"][0] {
    logo,
      primaryMenu [] {
      href,
      label,
      page->{name, "slug": slug.current},
      post->{title, "slug": slug.current}
    },
    secondaryMenu [] {
      href,
      label,
      page->{name, "slug": slug.current},
      post->{title, "slug": slug.current}
    }
  }`);

  const header = await sanityFetch({ query: getHeaderQuery });
  return header.data;
}
