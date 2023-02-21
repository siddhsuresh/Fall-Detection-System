import { Routes } from "@blitzjs/next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import Layout from "src/core/layouts/Layout"
import { SensorSchema } from "src/sensors/schemas"
import createSensor from "src/sensors/mutations/createSensor"
import { SensorForm, FORM_ERROR } from "src/sensors/components/SensorForm"
import { Suspense } from "react"

const NewSensorPage = () => {
  const router = useRouter()
  const [createSensorMutation] = useMutation(createSensor)

  return (
    <Layout title={"Create New Sensor"}>
      <h1>Create New Sensor</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SensorForm
          submitText="Create Sensor"
          schema={SensorSchema}
          // initialValues={{}}
          onSubmit={async (values) => {
            try {
              const sensor = await createSensorMutation(values)
              await router.push(Routes.ShowSensorPage({ sensorId: sensor.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </Suspense>
      <p>
        <Link href={Routes.SensorsPage()}>Sensors</Link>
      </p>
    </Layout>
  )
}

NewSensorPage.authenticate = true

export default NewSensorPage
