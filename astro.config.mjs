// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "La Biblioteca de Alejandría",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Programación",

          autogenerate: { directory: "programing" },
          /*items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],*/
        },
        {
          label: "Física",
          autogenerate: { directory: "physic" },
        },
        {
          label: "Matemática",
          autogenerate: { directory: "math" },
        },
        {
          label: "Videografía",
          autogenerate: { directory: "video" },
        },
        {
          label: "Fotografía",
          autogenerate: { directory: "photo" },
        },
      ],
    }),
  ],
});
