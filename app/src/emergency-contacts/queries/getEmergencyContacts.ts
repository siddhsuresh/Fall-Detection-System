import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetEmergencyContactsInput
  extends Pick<Prisma.EmergencyContactFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetEmergencyContactsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: emergencyContacts,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.emergencyContact.count({ where }),
      query: (paginateArgs) => db.emergencyContact.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      emergencyContacts,
      nextPage,
      hasMore,
      count,
    }
  }
)
