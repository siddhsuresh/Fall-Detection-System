import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Loader } from "@mantine/core"
import { Suspense, useState } from "react"
import { createStyles, Navbar, Group, Code, Text } from "@mantine/core"
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center"
import {
  IconFingerprint,
  IconKey,
  IconDatabaseImport,
  IconReceipt2,
  IconLogout,
  IconHome2
} from "@tabler/icons"
import { useMutation } from "@blitzjs/rpc"
import { useCurrentUser } from "src/users/hooks/useCurrentUser"
import { UserButton } from "src/core/components/UserButton"
import logout from "src/auth/mutations/logout"

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon")
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
        },
      },
    },
  }
})

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome2 },
  { link: "/dashboard/billing", label: "Billing", icon: IconReceipt2 },
  { link: "/dashboard/profile", label: "Profile", icon: IconFingerprint },
  { link: "/dashboard/users", label: "Manage Users", icon: IconKey },
  { link: "/dashboard/activity", label: "Your Activity", icon: IconDatabaseImport },
]

const UserInfo = () => {
  const currentUser = useCurrentUser()
  if (!currentUser) return <Loader variant="bars" />
  return <UserButton email={currentUser!.email} name={currentUser!.name || currentUser!.role} />
}

const Notifications = () => {
  return (
    <NovuProvider
      subscriberId={"on-boarding-subscriber-id-123"}
      applicationIdentifier={"wpoirL35OwvS"}
    >
      <PopoverNotificationCenter colorScheme={"light"}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  )
}

const DashboardPage = () => {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState("Billing")
  const [logoutMutation] = useMutation(logout)

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <div className={classes.linkIcon} dangerouslySetInnerHTML={{ __html: item.icon() }}></div>
      <span>{item.label}</span>
    </a>
  ))

  return (
    <Navbar height={720} width={{ sm: 300 }} p="md">
      <Navbar.Section>
        <Suspense fallback={<Loader variant="bars" />}>
          <UserInfo />
        </Suspense>
      </Navbar.Section>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart" pt={20}>
          <Text size="lg" fw={"bold"}>
            Dashboard
          </Text>
          <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
          <Notifications />
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={async (event) => {
            event.preventDefault()
            await logoutMutation()
          }}
        >
          <div
            className={classes.linkIcon}
            dangerouslySetInnerHTML={{ __html: IconLogout() }}
          ></div>
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}

const DashboardLayout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <DashboardPage />
          <div className="w-full md:w-4/5 p-6 flex flex-col flex-grow flex-shrink">{children}</div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
