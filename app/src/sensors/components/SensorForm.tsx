import React, { Suspense } from "react"
import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function SensorForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="accX" label="Acc X" placeholder="Acc X" type="number" />
      <LabeledTextField name="accY" label="Acc Y" placeholder="Acc Y" type="number" />
      <LabeledTextField name="accZ" label="Acc Z" placeholder="Acc Z" type="number" />
      <LabeledTextField name="gyroX" label="Gyro X" placeholder="Gyro X" type="number" />
      <LabeledTextField name="gyroY" label="Gyro Y" placeholder="Gyro Y" type="number" />
      <LabeledTextField name="gyroZ" label="Gyro Z" placeholder="Gyro Z" type="number" />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
