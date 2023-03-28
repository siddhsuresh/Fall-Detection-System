import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteSensorSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteSensorSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const sensor = await db.sensor.deleteMany({ where: { id } })

    return sensor
  }
)
