import { BlitzPage } from "@blitzjs/next"
import DashboardLayout from "src/core/layouts/Dashboard"

const DashboardPage: BlitzPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

DashboardPage.suppressFirstRenderFlicker = true
DashboardPage.authenticate = {
  redirectTo: "/auth/login",
}
DashboardPage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default DashboardPage
