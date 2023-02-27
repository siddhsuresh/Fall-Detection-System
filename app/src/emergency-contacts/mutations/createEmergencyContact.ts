import { resolver } from "@blitzjs/rpc"
import db from "db"
import { EmergencyContactSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(EmergencyContactSchema),
  resolver.authorize(),
  async (input) => {
    const emergencyContact = await db.emergencyContact.create({ data: input })
    return emergencyContact
  }
)
