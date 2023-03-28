import { AuthenticationError, PromiseReturnType } from "blitz"
import Link from "next/link"
import { Form, FORM_ERROR } from "src/core/components/Form"
import login from "src/auth/mutations/login"
import { Login } from "src/auth/validations"
import { useMutation } from "@blitzjs/rpc"
import { Routes } from "@blitzjs/next"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
} from "@mantine/core"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { Back } from "src/pages/auth/forgot-password"

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

export function EmailInput() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()
  return (
    <>
      <TextInput
        label="Email"
        disabled={isSubmitting}
        placeholder="hello@gmail.com"
        size="md"
        {...register("email", { required: "Email is required" })}
      />
      <ErrorMessage
        render={({ message }) => (
          <div role="alert" style={{ color: "red" }}>
            {message}
          </div>
        )}
        errors={errors}
        name="email"
      />
    </>
  )
}

function _PasswordInput() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()
  return (
    <>
      <PasswordInput
        label="Password"
        disabled={isSubmitting}
        placeholder="Your password"
        mt="md"
        size="md"
        {...register("password", { required: "Password is required" })}
      />
      <ErrorMessage
        render={({ message }) => (
          <div role="alert" style={{ color: "red" }}>
            {message}
          </div>
        )}
        errors={errors}
        name="password"
      />
    </>
  )
}

export default function LoginForm(props: LoginFormProps) {
  const [loginMutation] = useMutation(login)
  const { classes } = useStyles()
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Back url={Routes.Index()} text="Back To Home Page"/>
        <Title order={2} className={classes.title} align="center" mt="md" pt={30}>
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" pt={10} mb={50}>
          Continue to the dashboard after logging in
        </Text>
        <Form
          schema={Login}
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              const user = await loginMutation(values)
              props.onSuccess?.(user)
            } catch (error: any) {
              if (error instanceof AuthenticationError) {
                return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
              } else {
                return {
                  [FORM_ERROR]:
                    "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
                }
              }
            }
          }}
        >
          <EmailInput />
          <_PasswordInput />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
        </Form>
        <Text align="center" mt="md">
          <Link href={Routes.ForgotPasswordPage()}>Forgot password?</Link>
        </Text>
        <Text align="center" mt="md">
          Don&apos;t have an account? <Link href={Routes.SignupPage()}>Sign Up</Link>
        </Text>
      </Paper>
    </div>
  )
}
