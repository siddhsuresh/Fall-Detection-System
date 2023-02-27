import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button, Code } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons';
import { IconAt } from '@tabler/icons';
import { useState } from 'react';

export function EmergencyContactForm() {
  const [premium, setPremium] = useState(false);
  const form = useForm({
    initialValues: {
      emergencys: [{ name: '', premium: false, phone: '', email: '' , key: randomId() }],
    },
  });

  const fields = form.values.emergencys.map((item, index) => (
    <Group key={item.key} mt="xs" >
      <TextInput
        placeholder="John Doe"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`emergencys.${index}.name`)}
      />
      <TextInput
        placeholder="+1 555 555 55 55"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`emergencys.${index}.phone`)}
      />
      <TextInput
        placeholder="test@test.com"
        withAsterisk
        sx={{ flex: 1 }}
        icon={<div dangerouslySetInnerHTML={{__html: IconAt()}} />}
        {...form.getInputProps(`emergencys.${index}.email`)}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('emergencys', index)}>
        <div dangerouslySetInnerHTML={{ __html: IconTrash() }} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={100}>
            Phone
          </Text>
          <Text weight={500} size="sm" pr={150}>
            Email
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group position="center" mt="md">
        <Button
        variant="outline"
          onClick={() =>
            form.insertListItem('emergencys', { name: '', premium: false, key: randomId() })
          }
        >
          Add Emergency Contact
        </Button>
      </Group>

      {/* <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code> */}
    </Box>
  );
}