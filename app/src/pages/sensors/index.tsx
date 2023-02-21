import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { usePaginatedQuery } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import getSensors from "src/sensors/queries/getSensors"

const ITEMS_PER_PAGE = 100

export const SensorsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ sensors, hasMore }] = usePaginatedQuery(getSensors, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {sensors.map((sensor) => (
          <li key={sensor.id}>
            <Link href={Routes.ShowSensorPage({ sensorId: sensor.id })}>{sensor.name}</Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const SensorsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sensors</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewSensorPage()}>Create Sensor</Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <SensorsList />
        </Suspense>
      </div>
    </Layout>
  )
}

export default SensorsPage
