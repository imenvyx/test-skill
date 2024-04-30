import { Button, Stack, Typography } from '@mui/material';
import { useAddUser, useDeleteUser, useSeekUser } from 'src/api/user';
import { useForm } from 'react-hook-form';
import UserList from '../user-list';
import { useEffect, useState } from 'react';
import AddUserDialog from '../add-user-dialog';
import DeleteUserDialog from '../delete-user-dialog';
import Pagination from 'src/components/Pagination';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [showDelete, setShowDelete] = useState(false);

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

  const onDeleteUser = async () => {
    try {
      await deleteUser(selectedUserId);
      setCounter(counter + 1);
      setShowDelete(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
      setCounter(counter + 1);
      reset();
      setShowAdd(false);
    } catch (error) {
      console.error(error.message);
    }
  });

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useSeekUser(page, perPage);

  return (
    <>
      <Stack direction="column" spacing={4}>
        <Typography variant="h1" sx={{ mb: 4 }}>
          Users App
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAdd(true)}
          sx={{ maxWidth: 300 }}
        >
          Add User
        </Button>
        <UserList
          users={data?.pages[page]}
          setShowDelete={() => setShowDelete(true)}
          setSelectedUserId={(id: string) => setSelectedUserId(id)}
          status={status}
        />
        <Pagination
          page={page}
          perPage={perPage}
          setPage={setPage as any}
          setPerPage={setPerPage as any}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
        <Typography variant="h5">Operations success: {counter}</Typography>
      </Stack>
      <AddUserDialog
        open={showAdd}
        handleClose={() => setShowAdd(false)}
        control={control}
        onSubmit={onSubmit}
      />
      <DeleteUserDialog
        open={showDelete}
        onClose={() => setShowDelete(false)}
        onDeleteUser={onDeleteUser}
      />
    </>
  );
}
