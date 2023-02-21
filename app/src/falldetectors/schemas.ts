import { z } from "zod"

export const FalldetectorSchema = z.object({
  accuracyMaximum: z.number(),
  gyroMaximum: z.number(),
  accuracyKurtosi: z.number(),
  gyroKurtosi: z.number(),
  linMar: z.number(),
  accuracySkewness: z.number(),
  gyroSkewness: z.number(),
  postGyroMaximum: z.number(),
  postLinMaximum: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const UpdateFalldetectorSchema = FalldetectorSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteFalldetectorSchema = z.object({
  id: z.number(),
})
