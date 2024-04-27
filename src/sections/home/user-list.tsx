import { Box, Typography, Card, CardContent, CardActions, Button, Stack } from '@mui/material';

import { User } from 'src/types/user';

type UserListProps = {
  users: User[];
  handleDeleteUser: (id: string) => VoidFunction;
  status: string;
};

function UserList({ users, handleDeleteUser, status }: UserListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      {status === 'pending' && <Typography variant="body1">Loading ...</Typography>}
      {status === 'success' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              lg: 'repeat(3, 1fr)',
              md: 'repeat(2, 1fr)',
              xs: 'repeat(1, 1fr)',
            },
            gap: 4,
            rowGap: 4,
          }}
        >
          {users?.map((user: User) => (
            <Card key={user.id} sx={{ minWidth: 275 }}>
              <CardContent>
                <Stack direction="column">
                  <Typography variant="body1">Name: {user.name}</Typography>
                  <Typography variant="body1">Gender: {user.gender}</Typography>
                  <Typography variant="body1">Email: {user.email}</Typography>
                  <Typography
                    variant="body1"
                    color={(theme) =>
                      user.status === 'active' ? theme.palette.success.main : theme.palette.error.main
                    }
                  >
                    {user.status}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleDeleteUser(user.id as string)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UserList;
