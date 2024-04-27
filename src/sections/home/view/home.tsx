import { Alert, Snackbar, Stack, Typography } from '@mui/material';
import { useGetUsers } from 'src/api/user';
import { useForm } from 'react-hook-form';
import { useAddUser, useDeleteUser } from 'src/api/user';
import Form from '../form';
import UserList from '../user-list';
import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const { data: users, status } = useGetUsers();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      email: '',
      status: '',
    },
  });

  const { mutateAsync } = useAddUser();

  const { mutateAsync: deleteUser } = useDeleteUser();

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser(id);
      setCounter(counter + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      setCounter(counter + 1);
      reset();
    } catch (error) {
      console.error(error.message);
    }
  });

  return (
    <>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Users App
      </Typography>
      <Typography variant="h5">Operations success: {counter}</Typography>
      <Stack
        direction="row"
        sx={{
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          columnGap: { xs: 0, sm: 2 },
          rowGap: { xs: 4, sm: 0 },
        }}
      >
        <UserList users={users?.data} handleDeleteUser={handleDeleteUser as any} status={status} />
        <Form onSubmit={onSubmit} control={control} />
      </Stack>
    </>
  );
}
