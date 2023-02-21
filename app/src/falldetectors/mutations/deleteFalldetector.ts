import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteFalldetectorSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteFalldetectorSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const falldetector = await db.falldetector.deleteMany({ where: { id } })

    return falldetector
  }
)
