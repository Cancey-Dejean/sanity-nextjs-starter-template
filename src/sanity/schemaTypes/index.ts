import { type SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/pageType";
import { blockContentType } from "./objects/blockContentType";
import { infoSection } from "./blocks/infoSection";
import { callToAction } from "./blocks/callToAction";
import { linkType } from "./objects/linkType";
import { postType } from "./documents/postType";
import { authorType } from "./documents/authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    pageType,
    postType,
    authorType,

    // Objects
    blockContentType,
    infoSection,
    callToAction,
    linkType,
  ],
};
