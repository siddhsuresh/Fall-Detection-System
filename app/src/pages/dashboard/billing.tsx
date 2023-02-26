import { BlitzPage } from "@blitzjs/next"
import DashboardLayout from "src/core/layouts/Dashboard"

const BillingPage: BlitzPage = () => {
  return (
    <div className="min-h-screen">
      <h1>Billing Page</h1>
    </div>
  )
}

BillingPage.suppressFirstRenderFlicker = true
BillingPage.authenticate = {
  redirectTo: "/auth/login",
}
BillingPage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default BillingPage
