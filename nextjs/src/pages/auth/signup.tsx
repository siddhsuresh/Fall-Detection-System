import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import SignupForm from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Sign Up">
      <SignupForm onSuccess={() => router.push(Routes.DashboardPage())} />
    </Layout>
  )
}

SignupPage.redirectAuthenticatedTo = "/dashboard"

export default SignupPage
