import styles from "src/styles/Home.module.css"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { Anchor, Center, Box } from "@mantine/core"
import { FooterCentered } from "src/core/components/Footer"
import { Back } from "./auth/forgot-password"
import { Routes } from "@blitzjs/next"
import { createStyles, Avatar, Text, Group, Button } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons';
import { HeaderCentered } from "src/core/components/Header"


const useStyles = createStyles((theme) => ({
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

interface UserInfoIconsProps {
    avatar: string;
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedin: string
}

export function UserInfoIcons({ avatar, name, title, phone, email, linkedin}: UserInfoIconsProps) {
    const { classes } = useStyles();
    return (
        <div className="h-full w-full bg-white-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 flex justify-center">
            <Group noWrap>
                <img src={avatar} style={{ height: "150px", borderRadius: "50%" }} />
                <div>
                    <Text sx={{ textTransform: 'uppercase', fontSize: "1rem" }} weight={700} color="dimmed">
                        {title}
                    </Text>

                    <Text sx={{ textTransform: 'uppercase', fontSize: "2rem" }} weight={500} className={classes.name}>
                        {name}
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                        <Text sx={{ fontSize: "1.2rem" }} color="dimmed">
                            {email}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <Text sx={{ fontSize: "1.2rem" }} color="dimmed">
                            {phone}
                        </Text>
                    </Group>
                    <Button sx={{ backgroundColor: "blue", border: "1px solid white" }} onClick={() => {
                    window.open(`https://www.linkedin.com/in/${linkedin}`)
                  }}>
                        Contact Me
                    </Button>
                </div>
            </Group >
        </div >
    );
}



export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>CSE3002 | About</title>
            </Head>
            <div className="md:-mt-[9%] md:p-10">
                <HeaderCentered />
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="m-10 prose lg:prose-xl !prose-invert font-serif">
                        <h1 className="prose-invert pt-5 text-center"> Meet the Developers of the Fall Detection System</h1>
                        <div className="m-10">
                            <UserInfoIcons avatar="/sidDP.jpeg" name="Siddharth Suresh" email="siddharth.suresh2020@vitstudent.ac.in" title="Full-Stack Web Developer" phone="+91 9874563210" linkedin="siddharth-sureshn" />
                        </div>
                        <div className="m-10">
                            <UserInfoIcons avatar="/kanishkaDP.jpeg" name="Kanishka Ghosh" email="kanishka.ghosh2020@vitstudent.ac.in" title="Full-Stack Web Developer" phone="+91 9874563210" linkedin="kanishka-ghosh-9a4a751ba" />
                        </div>
                        <div className="m-10">
                            <UserInfoIcons avatar="/prantikDP.jpeg" name="Prantik Dhara" email="prantik.dhara2020@vitstudent.ac.in" title="Full-Stack Web Developer" phone="+91 9874563210" linkedin="prantik-dhara-528049200" />
                        </div>
                    </div>
                </div>
                <FooterCentered />
            </div>
        </div>
    )
}