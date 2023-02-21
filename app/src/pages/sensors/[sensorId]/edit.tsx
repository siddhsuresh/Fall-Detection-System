import { Suspense } from "react"
import { Routes } from "@blitzjs/next"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useQuery, useMutation } from "@blitzjs/rpc"
import { useParam } from "@blitzjs/next"

import Layout from "src/core/layouts/Layout"
import { SensorSchema } from "src/sensors/schemas"
import getSensor from "src/sensors/queries/getSensor"
import updateSensor from "src/sensors/mutations/updateSensor"
import { SensorForm, FORM_ERROR } from "src/sensors/components/SensorForm"

export const EditSensor = () => {
  const router = useRouter()
  const sensorId = useParam("sensorId", "number")
  const [sensor, { setQueryData }] = useQuery(
    getSensor,
    { id: sensorId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateSensorMutation] = useMutation(updateSensor)

  return (
    <>
      <Head>
        <title>Edit Sensor {sensor.id}</title>
      </Head>

      <div>
        <h1>Edit Sensor {sensor.id}</h1>
        <pre>{JSON.stringify(sensor, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <SensorForm
            submitText="Update Sensor"
            schema={SensorSchema}
            initialValues={sensor}
            onSubmit={async (values) => {
              try {
                const updated = await updateSensorMutation({
                  id: sensor.id,
                  ...values,
                })
                await setQueryData(updated)
                await router.push(Routes.ShowSensorPage({ sensorId: updated.id }))
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}

const EditSensorPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSensor />
      </Suspense>

      <p>
        <Link href={Routes.SensorsPage()}>Sensors</Link>
      </p>
    </div>
  )
}

EditSensorPage.authenticate = true
EditSensorPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditSensorPage
