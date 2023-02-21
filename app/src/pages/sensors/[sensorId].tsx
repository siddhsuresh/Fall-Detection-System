import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
import getSensor from "src/sensors/queries/getSensor"
import deleteSensor from "src/sensors/mutations/deleteSensor"

export const Sensor = () => {
  const router = useRouter()
  const sensorId = useParam("sensorId", "number")
  const [deleteSensorMutation] = useMutation(deleteSensor)
  const [sensor] = useQuery(getSensor, { id: sensorId })

  return (
    <>
      <Head>
        <title>Sensor {sensor.id}</title>
      </Head>

      <div>
        <h1>Sensor {sensor.id}</h1>
        <pre>{JSON.stringify(sensor, null, 2)}</pre>

        <Link href={Routes.EditSensorPage({ sensorId: sensor.id })}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteSensorMutation({ id: sensor.id })
              await router.push(Routes.SensorsPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowSensorPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.SensorsPage()}>Sensors</Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Sensor />
      </Suspense>
    </div>
  )
}

ShowSensorPage.authenticate = true
ShowSensorPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowSensorPage
