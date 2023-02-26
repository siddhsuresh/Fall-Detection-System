import { createStyles, Anchor, Group, ActionIcon, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

const _links = [
    { link: "/", label: "Home" },
    { link: "/architecture", label: "Architecture" },
    { link: "/dashboard", label: "Dashboard" },
    { link: "/auth/login", label: "Get Started" },
  ]

export function FooterCentered() {
  const { classes } = useStyles();
  const items = _links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group spacing="xs" noWrap>
            <Text size="md" weight={500}>
                © 2023 Fall Detection System
            </Text>
        </Group>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <div dangerouslySetInnerHTML={{__html: IconBrandGithub()}}></div>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <div dangerouslySetInnerHTML={{__html: IconBrandTwitter()}}></div>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}