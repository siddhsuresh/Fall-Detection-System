import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetFalldetectorsInput
  extends Pick<Prisma.FalldetectorFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetFalldetectorsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: falldetectors,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.falldetector.count({ where }),
      query: (paginateArgs) => db.falldetector.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      falldetectors,
      nextPage,
      hasMore,
      count,
    }
  }
)
