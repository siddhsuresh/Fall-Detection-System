import { BlitzPage } from "@blitzjs/next"
import DashboardLayout from "src/core/layouts/Dashboard"
import Script from "next/script"

import { create } from "zustand"

interface GyroScopeStore {
  x: number
  y: number
  z: number
  setX: (x: number) => void
  setY: (y: number) => void
  setZ: (z: number) => void
}

const useGyroScopeStore = create<GyroScopeStore>((set) => ({
  x: 0,
  y: 0,
  z: 0,
  setX: (x: number) => set({ x }),
  setY: (y: number) => set({ y }),
  setZ: (z: number) => set({ z }),
}))

const DashboardPage: BlitzPage = () => {
  const { classes } = useStyles()
  const x = useGyroScopeStore((state) => state.x)
  const y = useGyroScopeStore((state) => state.y)
  const z = useGyroScopeStore((state) => state.z)
  return (
    <div>
      <HeroText />
      <Example />
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>Visualization of Orientation</Title>
          <Text className={classes.description} size="lg" align="center" mt="md">
            Using the data from the sensors, we can visualize the orientation of the device.
          </Text>
        </div>
        <div className="flex items-center justify-center m-10">
          <div data-theme="black" className="rounded-2xl p-5 max-w-xl">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">X Axis</div>
              <div id="x" className="stat-value">{x.toPrecision(2)}</div>
              <div className="stat-desc">rad/s</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Y Axis</div>
              <div id="y" className="stat-value">{y.toPrecision(2)}</div>
              <div className="stat-desc">rad/s</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Z Axis</div>
              <div id="z" className="stat-value">{z.toPrecision(2)}</div>
              <div className="stat-desc">rad/s</div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center">
          <canvas className="zdog-canvas" width="240" height="240"></canvas>
        </div>
        <Script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js" strategy="beforeInteractive" />
        <Script src="/zdog.js" />
      </Container>
    </div>
  )
}

DashboardPage.suppressFirstRenderFlicker = true
DashboardPage.authenticate = {
  redirectTo: "/auth/login",
}
DashboardPage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default DashboardPage

import { createStyles, Title, Text, Container } from "@mantine/core"
import { Badge } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}))

export function HeroText() {
  const { classes } = useStyles()

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated Admin Dashboard for your{" "}
          <Text component="div" className={classes.highlight} inherit>
            Portable Fall Detection System
          </Text>
          <Badge color="green" size="xl" radius="md" variant="dot">
            System Online
          </Badge>
        </Title>
      </div>
    </Container>
  )
}

import { Card, AreaChart, Title as TTtile } from "@tremor/react"
import { useEffect, useState } from "react"

const data = [
  {
    Time: "15:01:01",
    X: 0.1,
    Y: 0.5,
    Z: 0.8,
  },
  {
    Time: "15:01:02",
    X: 0.4,
    Y: 0.7,
    Z: 0.2,
  },
]

const valueFormatterAcelerometer = (value) => {
  //return value with 2 decimal places and unit m/s^2
  return `${value.toPrecision(2)} m/s^2`
}

const valueFormatterGyroscope = (value) => {
  //return value with 2 decimal places and unit rad/s
  return `${value.toPrecision(2)} rad/s`
}

export function Example() {
  const [_dataA, setDataA] = useState(data)
  const [_dataG, setDataG] = useState(data)
  const setX = useGyroScopeStore((state) => state.setX)
  const setY = useGyroScopeStore((state) => state.setY)
  const setZ = useGyroScopeStore((state) => state.setZ)
  useEffect(() => {
    //every 5 seconds, update the data
    const interval = setInterval(() => {
      const newDataA = [..._dataA]
      const date = new Date()
      newDataA.push({
        Time: `${date.getHours().toPrecision(2)}:${date.getMinutes().toPrecision(2)}:${date
          .getSeconds()
          .toPrecision(2)}`,
        X: Math.floor(Math.random() * 10),
        Y: Math.floor(Math.random() * 10),
        Z: Math.floor(Math.random() * 10),
      })
      newDataA.shift()
      setDataA(newDataA)
      const newDataG = [..._dataG]
      newDataG.push({
        Time: `${date.getHours().toPrecision(2)}:${date.getMinutes().toPrecision(2)}:${date
          .getSeconds()
          .toPrecision(2)}`,
        X: Math.random(),
        Y: Math.random(),
        Z: Math.random(),
      })
      newDataG.shift()
      setDataG(newDataG)
      setX(newDataG![newDataG.length - 1]!.X)
      setY(newDataG![newDataG.length - 1]!.Y)
      setZ(newDataG![newDataG.length - 1]!.Z)
    }, 5000)
    return () => clearInterval(interval)
  }, [_dataA, _dataG])
  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      <div className="w-full p-4 md:w-1/2 lg:w-1/2">
        <Card>
          <TTtile>Accerlometer Readings</TTtile>
          <AreaChart
            marginTop="mt-4"
            data={_dataA}
            categories={["X", "Y", "Z"]}
            dataKey="Time"
            colors={["indigo", "fuchsia", "emerald"]}
            valueFormatter={valueFormatterAcelerometer}
            height="h-80"
          />
        </Card>
      </div>
      <div className="w-full p-4 md:w-1/2 lg:w-1/2">
        <Card>
          <TTtile>Gyroscope Readings</TTtile>
          <AreaChart
            marginTop="mt-4"
            data={_dataG}
            categories={["X", "Y", "Z"]}
            dataKey="Time"
            colors={["indigo", "fuchsia", "emerald"]}
            valueFormatter={valueFormatterGyroscope}
            height="h-80"
          />
        </Card>
      </div>
    </div>
  )
}

export interface DotsProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number
  radius?: number
}

export function Dots({ size = 185, radius = 2.5, ...others }: DotsProps) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 185 185"
      width={size}
      height={size}
      {...others}
    >
      <rect width="5" height="5" rx={radius} />
      <rect width="5" height="5" x="60" rx={radius} />
      <rect width="5" height="5" x="120" rx={radius} />
      <rect width="5" height="5" x="20" rx={radius} />
      <rect width="5" height="5" x="80" rx={radius} />
      <rect width="5" height="5" x="140" rx={radius} />
      <rect width="5" height="5" x="40" rx={radius} />
      <rect width="5" height="5" x="100" rx={radius} />
      <rect width="5" height="5" x="160" rx={radius} />
      <rect width="5" height="5" x="180" rx={radius} />
      <rect width="5" height="5" y="20" rx={radius} />
      <rect width="5" height="5" x="60" y="20" rx={radius} />
      <rect width="5" height="5" x="120" y="20" rx={radius} />
      <rect width="5" height="5" x="20" y="20" rx={radius} />
      <rect width="5" height="5" x="80" y="20" rx={radius} />
      <rect width="5" height="5" x="140" y="20" rx={radius} />
      <rect width="5" height="5" x="40" y="20" rx={radius} />
      <rect width="5" height="5" x="100" y="20" rx={radius} />
      <rect width="5" height="5" x="160" y="20" rx={radius} />
      <rect width="5" height="5" x="180" y="20" rx={radius} />
      <rect width="5" height="5" y="40" rx={radius} />
      <rect width="5" height="5" x="60" y="40" rx={radius} />
      <rect width="5" height="5" x="120" y="40" rx={radius} />
      <rect width="5" height="5" x="20" y="40" rx={radius} />
      <rect width="5" height="5" x="80" y="40" rx={radius} />
      <rect width="5" height="5" x="140" y="40" rx={radius} />
      <rect width="5" height="5" x="40" y="40" rx={radius} />
      <rect width="5" height="5" x="100" y="40" rx={radius} />
      <rect width="5" height="5" x="160" y="40" rx={radius} />
      <rect width="5" height="5" x="180" y="40" rx={radius} />
      <rect width="5" height="5" y="60" rx={radius} />
      <rect width="5" height="5" x="60" y="60" rx={radius} />
      <rect width="5" height="5" x="120" y="60" rx={radius} />
      <rect width="5" height="5" x="20" y="60" rx={radius} />
      <rect width="5" height="5" x="80" y="60" rx={radius} />
      <rect width="5" height="5" x="140" y="60" rx={radius} />
      <rect width="5" height="5" x="40" y="60" rx={radius} />
      <rect width="5" height="5" x="100" y="60" rx={radius} />
      <rect width="5" height="5" x="160" y="60" rx={radius} />
      <rect width="5" height="5" x="180" y="60" rx={radius} />
      <rect width="5" height="5" y="80" rx={radius} />
      <rect width="5" height="5" x="60" y="80" rx={radius} />
      <rect width="5" height="5" x="120" y="80" rx={radius} />
      <rect width="5" height="5" x="20" y="80" rx={radius} />
      <rect width="5" height="5" x="80" y="80" rx={radius} />
      <rect width="5" height="5" x="140" y="80" rx={radius} />
      <rect width="5" height="5" x="40" y="80" rx={radius} />
      <rect width="5" height="5" x="100" y="80" rx={radius} />
      <rect width="5" height="5" x="160" y="80" rx={radius} />
      <rect width="5" height="5" x="180" y="80" rx={radius} />
      <rect width="5" height="5" y="100" rx={radius} />
      <rect width="5" height="5" x="60" y="100" rx={radius} />
      <rect width="5" height="5" x="120" y="100" rx={radius} />
      <rect width="5" height="5" x="20" y="100" rx={radius} />
      <rect width="5" height="5" x="80" y="100" rx={radius} />
      <rect width="5" height="5" x="140" y="100" rx={radius} />
      <rect width="5" height="5" x="40" y="100" rx={radius} />
      <rect width="5" height="5" x="100" y="100" rx={radius} />
      <rect width="5" height="5" x="160" y="100" rx={radius} />
      <rect width="5" height="5" x="180" y="100" rx={radius} />
      <rect width="5" height="5" y="120" rx={radius} />
      <rect width="5" height="5" x="60" y="120" rx={radius} />
      <rect width="5" height="5" x="120" y="120" rx={radius} />
      <rect width="5" height="5" x="20" y="120" rx={radius} />
      <rect width="5" height="5" x="80" y="120" rx={radius} />
      <rect width="5" height="5" x="140" y="120" rx={radius} />
      <rect width="5" height="5" x="40" y="120" rx={radius} />
      <rect width="5" height="5" x="100" y="120" rx={radius} />
      <rect width="5" height="5" x="160" y="120" rx={radius} />
      <rect width="5" height="5" x="180" y="120" rx={radius} />
      <rect width="5" height="5" y="140" rx={radius} />
      <rect width="5" height="5" x="60" y="140" rx={radius} />
      <rect width="5" height="5" x="120" y="140" rx={radius} />
      <rect width="5" height="5" x="20" y="140" rx={radius} />
      <rect width="5" height="5" x="80" y="140" rx={radius} />
      <rect width="5" height="5" x="140" y="140" rx={radius} />
      <rect width="5" height="5" x="40" y="140" rx={radius} />
      <rect width="5" height="5" x="100" y="140" rx={radius} />
      <rect width="5" height="5" x="160" y="140" rx={radius} />
      <rect width="5" height="5" x="180" y="140" rx={radius} />
      <rect width="5" height="5" y="160" rx={radius} />
      <rect width="5" height="5" x="60" y="160" rx={radius} />
      <rect width="5" height="5" x="120" y="160" rx={radius} />
      <rect width="5" height="5" x="20" y="160" rx={radius} />
      <rect width="5" height="5" x="80" y="160" rx={radius} />
      <rect width="5" height="5" x="140" y="160" rx={radius} />
      <rect width="5" height="5" x="40" y="160" rx={radius} />
      <rect width="5" height="5" x="100" y="160" rx={radius} />
      <rect width="5" height="5" x="160" y="160" rx={radius} />
      <rect width="5" height="5" x="180" y="160" rx={radius} />
      <rect width="5" height="5" y="180" rx={radius} />
      <rect width="5" height="5" x="60" y="180" rx={radius} />
      <rect width="5" height="5" x="120" y="180" rx={radius} />
      <rect width="5" height="5" x="20" y="180" rx={radius} />
      <rect width="5" height="5" x="80" y="180" rx={radius} />
      <rect width="5" height="5" x="140" y="180" rx={radius} />
      <rect width="5" height="5" x="40" y="180" rx={radius} />
      <rect width="5" height="5" x="100" y="180" rx={radius} />
      <rect width="5" height="5" x="160" y="180" rx={radius} />
      <rect width="5" height="5" x="180" y="180" rx={radius} />
    </svg>
  )
}
