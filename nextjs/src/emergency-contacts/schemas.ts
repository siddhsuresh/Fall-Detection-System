import { z } from "zod"

export const EmergencyContactSchema = z.object({
  userId: z.number(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  id: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const UpdateEmergencyContactSchema = EmergencyContactSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteEmergencyContactSchema = z.object({
  id: z.number(),
})
