import { resolver } from "@blitzjs/rpc"
import db from "db"
import { SensorSchema } from "../schemas"

export default resolver.pipe(resolver.zod(SensorSchema), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const sensor = await db.sensor.create({ data: input })

  return sensor
})
