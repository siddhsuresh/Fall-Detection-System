import { z } from "zod"

export const SensorSchema = z.object({
  accX: z.number(),
  accY: z.number(),
  accZ: z.number(),
  gyroX: z.number(),
  gyroY: z.number(),
  gyroZ: z.number(),
  // template: __fieldName__: z.__zodType__(),
})

export const UpdateSensorSchema = SensorSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteSensorSchema = z.object({
  id: z.number(),
})
