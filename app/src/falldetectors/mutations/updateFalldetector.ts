import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateFalldetectorSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateFalldetectorSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const falldetector = await db.falldetector.update({ where: { id }, data })

    return falldetector
  }
)
