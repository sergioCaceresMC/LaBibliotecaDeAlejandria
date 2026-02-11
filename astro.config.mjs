// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://sergioCaceresMC.github.io",
  base: "/LaBibliotecaDeAlejandria/",
  output: "static",

  integrations: [
    starlight({
      title: "La Biblioteca de Alejandría",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sergioCaceresMC/LaBibliotecaDeAlejandria",
        },
      ],
      sidebar: [
        {
          label: "Acerca de la biblioteca",
          autogenerate: { directory: "biblioteca" },
        },
        {
          label: "Programación",
          autogenerate: { directory: "programing" },
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
