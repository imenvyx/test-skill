import { Box, Typography, Card, CardContent, CardActions, Button, Stack } from '@mui/material';
import { wrap } from 'module';

import { User } from 'src/types/user';

type UserListProps = {
  users: User[];
  setShowDelete: (show: boolean) => void;
  status: string;
  setSelectedUserId: (id: string) => void;
};

function UserList({ users, setShowDelete, status, setSelectedUserId }: UserListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      {status === 'pending' && <Typography variant="body1">Loading ...</Typography>}
      {status === 'success' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              lg: 'repeat(4, 1fr)',
              md: 'repeat(2, 1fr)',
              xs: 'repeat(1, 1fr)',
            },
            gap: 4,
            rowGap: 4,
          }}
        >
          {users?.map((user: User) => (
            <Card key={user.id} sx={{ minWidth: 275, p: 0, backgroundColor: (theme)=>theme.palette.background.neutral }}>
              <CardContent
                sx={{
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
                }}
              >
                {/* <Stack direction="column" sx={{ alignContent: 'space-around', height: '100%' }}>
                  
                </Stack> */}
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
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setSelectedUserId(user.id as string);
                    setShowDelete(true);
                  }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UserList;
