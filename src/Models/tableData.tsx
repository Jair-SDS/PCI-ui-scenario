import { z } from "zod";

const SpacialObjct = z.object({
  designation: z.string(),
  discovery_date: z.string(),
  h_mag: z.string(),
  moid_au: z.string(),
  q_au_1: z.string(),
  q_au_2: z.string(),
  period_yr: z.string(),
  i_deg: z.string(),
  pha: z.string(),
  orbit_class: z.string(),
});

export type SpacialObjct = z.infer<typeof SpacialObjct>;
