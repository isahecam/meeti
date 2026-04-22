import { z } from "zod"

export const CommunitySchema = z.object({
  name: z.string().trim().nonempty({ error: "Establece el nombre de la comunidad" }),
  description: z.string().trim().nonempty({ error: "Establece la descripción de la comunidad" }),
})

export type CommunityType = z.infer<typeof CommunitySchema>
