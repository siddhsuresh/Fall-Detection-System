import { resolver } from "@blitzjs/rpc"
import db from "db"
import { FalldetectorSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(FalldetectorSchema),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const falldetector = await db.falldetector.create({ data: input })

    return falldetector
  }
)
