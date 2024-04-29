import { Box, Button, Stack, Dialog, DialogTitle, Typography } from '@mui/material';
import { createPortal } from 'react-dom';

type DeleteUserDialogProps = {
  open: boolean;
  onClose: VoidFunction;
  onDeleteUser: VoidFunction;
};

function DeleteUserDialog({ open, onClose, onDeleteUser }: DeleteUserDialogProps) {
  console.log(onDeleteUser);
  return createPortal(
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ textAlign: 'center' }}>Delete User</DialogTitle>
      <Box sx={{ display: 'flex', maxWidth: { xs: 'none', sm: 500 }, px: 4, pb: 4 }}>
        <Stack direction="column" gap={2}>
          <Typography>Are you sure you want to delete the user?</Typography>
          <Stack direction="row" gap={1} justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => onDeleteUser()}
            >
              Delete
            </Button>
            <Button type="submit" variant="outlined" color="secondary" onClick={() => onClose()}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Dialog>,
    document.body
  );
}

export default DeleteUserDialog;
