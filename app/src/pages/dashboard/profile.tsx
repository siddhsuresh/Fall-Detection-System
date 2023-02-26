import { BlitzPage } from "@blitzjs/next"
import DashboardLayout from "src/core/layouts/Dashboard"

const ProfilePage: BlitzPage = () => {
  return (
    <div className="min-h-screen">
      <h1>Profile Page</h1>
    </div>
  )
}

ProfilePage.suppressFirstRenderFlicker = true
ProfilePage.authenticate = {
  redirectTo: "/auth/login",
}
ProfilePage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default ProfilePage
