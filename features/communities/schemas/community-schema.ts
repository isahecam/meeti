import { z } from "zod"

export const CommunitySchema = z.object({
  name: z.string().trim().nonempty({ error: "Establece el nombre de la comunidad" }),
  description: z.string().trim().nonempty({ error: "Establece la descripción de la comunidad" }),
  image: z.url({
    protocol: /^https?$/,
    hostname: z.regexes.domain,
    error: "Establece una portada para la comunidad",
  }),
})

export type CommunityType = z.infer<typeof CommunitySchema>
