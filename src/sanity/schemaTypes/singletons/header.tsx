import { defineArrayMember, defineField, defineType } from "sanity";

import * as demo from "@/sanity/lib/initialValues";
import { Settings } from "lucide-react";

/**
 * Settings schema Singleton.  Singletons are single documents that are displayed not in a collection, handy for things like site settings and other global configurations.
 * Learn more: https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
 */

export const header = defineType({
  name: "header",
  title: "Header",
  type: "document",
  icon: Settings,
  fields: [
    defineField({
      name: "logo",
      description: "This field is the logo of your website.",
      title: "Logo",
      type: "image",
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryMenu",
      description: "This field is the primary menu of your website.",
      title: "Primary Menu",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "secondaryMenu",
      description: "This field is the secondary menu of your website.",
      title: "Secondary Menu",
      type: "array",
      of: [{ type: "link" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Header",
      };
    },
  },
});
