import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetEmergencyContact = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(
  resolver.zod(GetEmergencyContact),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emergencyContact = await db.emergencyContact.findFirst({ where: { id } })

    if (!emergencyContact) throw new NotFoundError()

    return emergencyContact
  }
)
