import { BlitzPage } from "@blitzjs/next"
import { Button, Title, Text, TextInput } from "@mantine/core"
import DashboardLayout from "src/core/layouts/Dashboard"
import { EmergencyContactForm } from "src/emergency-contacts/components/EmergencyContactForm"
import { useStyles } from "."

const ProfilePage: BlitzPage = () => {
  const { classes } = useStyles()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <Title className={classes.title}>Your Details</Title>
      <TextInput placeholder="Your name" label="Full name" withAsterisk />
      <TextInput placeholder="Your Email" label="Email" value={"test@test.com"} disabled/>
      <Text component="div" inherit>
        Update the emergency contact details below. You can add multiple contacts. If no phone
        number is provided, the email will be used.
      </Text>
      <EmergencyContactForm />
      <Button type="submit" variant="outline" color="teal">
        Save
      </Button>
    </div>
  )
}

ProfilePage.suppressFirstRenderFlicker = true
ProfilePage.authenticate = {
  redirectTo: "/auth/login",
}
ProfilePage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default ProfilePage
