import { GROUPS } from "@/constants";
import { Home } from "lucide-react";

import { defineField, defineType } from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: Home,
  groups: GROUPS,
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "pageBuilder",
      title: "Page builder",
      type: "array",
      group: "pageBuilder",
      of: [{ type: "callToAction" }, { type: "infoSection" }],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/array-type#efb1fe03459d
          views: [
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/static/blocks/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "metaTitle",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Page",
      };
    },
  },
});
