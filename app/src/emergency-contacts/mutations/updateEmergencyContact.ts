import { resolver } from "@blitzjs/rpc"
import db from "db"
import { UpdateEmergencyContactSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdateEmergencyContactSchema),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const emergencyContact = await db.emergencyContact.update({ where: { id }, data })

    return emergencyContact
  }
)
