// import { Suspense } from "react"
// import { Routes } from "@blitzjs/next"
// import Head from "next/head"
// import Link from "next/link"
// import { usePaginatedQuery } from "@blitzjs/rpc"
// import { useRouter } from "next/router"
// import Layout from "src/core/layouts/Layout"
// import getSensors from "src/sensors/queries/getSensors"

// const ITEMS_PER_PAGE = 100

// export const SensorsList = () => {
//   const router = useRouter()
//   const page = Number(router.query.page) || 0
  // const [{ sensors, hasMore }] = usePaginatedQuery(getSensors, {
  //   orderBy: { id: "asc" },
  //   skip: ITEMS_PER_PAGE * page,
  //   take: ITEMS_PER_PAGE,
  // })

//   const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
//   const goToNextPage = () => router.push({ query: { page: page + 1 } })

//   return (
//     <div>
//       <ul>
//         {sensors.map((sensor) => (
//           <li key={sensor.id}>
//             <Link href={Routes.ShowSensorPage({ sensorId: sensor.id })}>{sensor.name}</Link>
//           </li>
//         ))}
//       </ul>

//       <button disabled={page === 0} onClick={goToPreviousPage}>
//         Previous
//       </button>
//       <button disabled={!hasMore} onClick={goToNextPage}>
//         Next
//       </button>
//     </div>
//   )
// }

// const SensorsPage = () => {
//   return (
//     <Layout>
//       <Head>
//         <title>Sensors</title>
//       </Head>

//       <div>
//         <p>
//           <Link href={Routes.NewSensorPage()}>Create Sensor</Link>
//         </p>

//         <Suspense fallback={<div>Loading...</div>}>
//           <SensorsList />
//         </Suspense>
//       </div>
//     </Layout>
//   )
// }

// export default SensorsPage

import {
  Card,
  Text,
  Divider,
  LineChart,
  Icon,
  Title,
  Tracking,
  TrackingBlock,
  Flex,
  Bold,
  Block,
  Color,
} from "@tremor/react"
import { Suspense } from "react"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"

const latency = [
  {
    Date: "01.01.2022",
    "Avg. Response Time": 0.95,
  },
  {
    Date: "02.01.2022",
    "Avg. Response Time": 0.01,
  },
  {
    Date: "03.01.2022",
    "Avg. Response Time": 0.01,
  },
]

const statusColors: { [key: string]: Color } = {
  Operational: "emerald",
  Downtime: "rose",
  Maintenance: "rose",
  Degraded: "rose",
}

const availability = [
  { id: 1, status: "Operational" },
  { id: 2, status: "Downtime" },
  { id: 3, status: "Operational" },
  { id: 4, status: "Operational" },
  { id: 5, status: "Operational" },
  { id: 6, status: "Operational" },
  { id: 7, status: "Operational" },
  { id: 8, status: "Operational" },
  { id: 9, status: "Operational" },
  { id: 10, status: "Operational" },
  { id: 11, status: "Operational" },
  { id: 12, status: "Operational" },
  { id: 13, status: "Operational" },
  { id: 14, status: "Operational" },
  { id: 15, status: "Operational" },
  { id: 16, status: "Operational" },
  { id: 17, status: "Operational" },
  { id: 18, status: "Operational" },
  { id: 19, status: "Operational" },
  { id: 20, status: "Maintenance" },
  { id: 21, status: "Operational" },
  { id: 22, status: "Operational" },
  { id: 23, status: "Operational" },
  { id: 24, status: "Degraded" },
  { id: 25, status: "Operational" },
  { id: 26, status: "Operational" },
  { id: 27, status: "Operational" },
  { id: 28, status: "Operational" },
  { id: 29, status: "Operational" },
  { id: 30, status: "Operational" },
  { id: 31, status: "Operational" },
  { id: 32, status: "Operational" },
  { id: 33, status: "Operational" },
  { id: 34, status: "Operational" },
  { id: 35, status: "Operational" },
  { id: 36, status: "Degraded" },
  { id: 37, status: "Operational" },
  { id: 38, status: "Operational" },
  { id: 39, status: "Operational" },
  { id: 40, status: "Operational" },
  { id: 41, status: "Operational" },
  { id: 42, status: "Operational" },
  { id: 43, status: "Operational" },
  { id: 44, status: "Degraded" },
  { id: 45, status: "Operational" },
  { id: 46, status: "Operational" },
  { id: 47, status: "Operational" },
  { id: 48, status: "Operational" },
  { id: 49, status: "Operational" },
  { id: 50, status: "Operational" },
  { id: 51, status: "Operational" },
  { id: 52, status: "Operational" },
  { id: 53, status: "Operational" },
  { id: 54, status: "Operational" },
  { id: 55, status: "Operational" },
  { id: 56, status: "Operational" },
  { id: 57, status: "Operational" },
  { id: 58, status: "Operational" },
  { id: 59, status: "Operational" },
  { id: 60, status: "Operational" },
  { id: 61, status: "Operational" },
  { id: 62, status: "Operational" },
  { id: 63, status: "Operational" },
  { id: 64, status: "Operational" },
  { id: 65, status: "Operational" },
  { id: 66, status: "Operational" },
  { id: 67, status: "Operational" },
  { id: 68, status: "Operational" },
  { id: 69, status: "Operational" },
  { id: 70, status: "Operational" },
  { id: 71, status: "Operational" },
  { id: 72, status: "Operational" },
  { id: 73, status: "Operational" },
  { id: 74, status: "Operational" },
]

const valueFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}s`

const UserInfo = () => {
  const user = useCurrentUser()
  const date = new Date()
  return (
    <Block textAlignment="text-center">
      <Title marginTop="mt-2">Fall Detection For {user?.email}</Title>
      <Text textAlignment="text-center">As of {date.toLocaleDateString()}
      </Text>
    </Block>
  )
}

export default function Example() {

  return (
    <Card>
      <Suspense fallback="Loading...">
        <UserInfo />
      </Suspense>

      <Divider />

      <Flex marginTop="mt-4">
        <Flex justifyContent="justify-start" spaceX="space-x-1">
          {/* <Icon color="emerald" /> */}
          <Text>
            <Bold>API</Bold>
          </Text>
        </Flex>
        <Text>99.87% uptime</Text>
      </Flex>
      <Tracking marginTop="mt-2">
        {availability.map((item) => (
          <TrackingBlock key={item.id} color={statusColors[item.status]} tooltip={item.status} />
        ))}
      </Tracking>
      <Title marginTop="mt-6">Avg. response time per day</Title>
      <LineChart
        marginTop="mt-4"
        data={latency}
        dataKey="Date"
        categories={["Avg. Response Time"]}
        colors={["gray"]}
        valueFormatter={valueFormatter}
        showLegend={false}
        yAxisWidth="w-12"
        height="h-80"
      />
    </Card>
  )
}
