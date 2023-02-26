import { BlitzPage } from "@blitzjs/next"
import DashboardLayout from "src/core/layouts/Dashboard"
import { Divider } from "@tremor/react"
import { useEffect, useState } from "react"

import useGyroScopeStore, { AccerlometerGraph, Example, GyroscopeGraph } from './index';
import { Title } from "@mantine/core";
const valueFormatterAcelerometer = (value) => {
    //return value with 2 decimal places and unit m/s^2
    return `${value.toPrecision(2)} m/s^2`
}

const valueFormatterGyroscope = (value) => {
    //return value with 2 decimal places and unit rad/s
    return `${value.toPrecision(2)} rad/s`
}


const ActivityPage: BlitzPage = () => {
    return (
        <div>
            <Title order={1}>USERS ARCHIVE</Title>
            <Divider />
        <div className="flex items-center justify-center flex-col gap-5">
            <AccerlometerGraph />
            <GyroscopeGraph />
        </div>
        </div>
    )
}

ActivityPage.suppressFirstRenderFlicker = true
ActivityPage.authenticate = {
    redirectTo: "/auth/login",
}
ActivityPage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default ActivityPage
