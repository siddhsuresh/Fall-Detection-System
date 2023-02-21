import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateSensorSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateSensorSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const sensor = await db.sensor.update({ where: { id }, data })

    return sensor
  }
)
