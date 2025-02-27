import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/pageType";
import { blockContentType } from "./objects/blockContentType";

import { linkType } from "@/sanity/schemaTypes/objects/linkType";
import { postType } from "@/sanity/schemaTypes/documents/postType";
import { authorType } from "@/sanity/schemaTypes/documents/authorType";
import { infoSection } from "@/components/blocks/Info/schema";
import { callToAction } from "@/components/blocks/CTA/schema";
import { header } from "./singletons/header";
import { buttonType } from "./objects/buttonType";
import { homepageType } from "./documents/homepage";
import { seoType } from "./singletons/seoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    homepageType,
    pageType,
    postType,
    authorType,

    // Objects
    seoType,
    blockContentType,
    linkType,
    buttonType,

    // Blocks
    infoSection,
    callToAction,

    // Singletons
    header,
  ],
};
