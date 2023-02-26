import { Form, FORM_ERROR } from "src/core/components/Form"
import { ForgotPassword } from "src/auth/validations"
import forgotPassword from "src/auth/mutations/forgotPassword"
import { useMutation } from "@blitzjs/rpc"

import {
  createStyles,
  Paper,
  Title,
  Text,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
} from "@mantine/core"

import { EmailInput } from "src/auth/components/LoginForm"
import { useRouter } from "next/router"

export function Back({ url, text }) {
  const { classes } = useStyles()
  const router = useRouter()
  return (
    <Anchor
      color="dimmed"
      size="sm"
      className={classes.control}
      onClick={() => {
        router.push(url)
      }}
    >
      <Center inline>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
        <Box ml={5}>{text}</Box>
      </Center>
    </Anchor>
  )
}

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}))

export function ForgotPasswordPage() {
  const { classes } = useStyles()
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)
  return (
    <div class="h-screen flex items-center justify-center gap-10">
      <Container size={460}>
        <Title className={classes.title} align="center">
          Forgot your password?
        </Title>
        <Text color="dimmed" size="sm" align="center" pt={10}>
          Enter your email to get a reset link
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <Form
            submitText="Send Reset Password Instructions"
            schema={ForgotPassword}
            initialValues={{ email: "" }}
            onSubmit={async (values) => {
              try {
                await forgotPasswordMutation(values)
              } catch (error: any) {
                return {
                  [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                }
              }
            }}
          >
            <EmailInput />
            <Group position="apart" mt="lg" className={classes.controls}>
              <Back url="/" text="Back to Home page" />
              <Button className={classes.control} type="submit">
                Reset password
              </Button>
            </Group>
          </Form>
        </Paper>
      </Container>
    </div>
  )
}

export default ForgotPasswordPage
