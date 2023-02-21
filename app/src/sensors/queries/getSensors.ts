import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetSensorsInput
  extends Pick<Prisma.SensorFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetSensorsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: sensors,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.sensor.count({ where }),
      query: (paginateArgs) => db.sensor.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      sensors,
      nextPage,
      hasMore,
      count,
    }
  }
)
