import { resolver } from "@blitzjs/rpc"
import db from "db"
import { DeleteEmergencyContactSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(DeleteEmergencyContactSchema),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emergencyContact = await db.emergencyContact.deleteMany({ where: { id } })

    return emergencyContact
  }
)
