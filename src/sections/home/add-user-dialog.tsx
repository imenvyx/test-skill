import { Dialog, DialogTitle } from '@mui/material';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { createPortal } from 'react-dom';
import { Controller } from 'react-hook-form';

type AddUserDialogProps = {
  open: boolean;
  handleClose: VoidFunction;
  onSubmit: VoidFunction;
  control: any;
};

function AddUserDialog({ open, handleClose, onSubmit, control }: AddUserDialogProps) {
  return createPortal(
    <Dialog onClose={handleClose} open={open} sx={{}}>
      <DialogTitle sx={{ textAlign: 'center' }}>Add User</DialogTitle>
      <Box sx={{ display: 'flex', maxWidth: { xs: 'none', sm: 500 }, width: 400, px: 4, pb: 4 }}>
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <Stack direction="column" gap={2}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <TextField {...field} label="Name" name="name" />}
            />

            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FormControl>
                  <InputLabel id={'gender'}> Gender </InputLabel>
                  <Select
                    {...field}
                    label="Gender"
                    input={<OutlinedInput fullWidth label={'Gender'} />}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField {...field} type="email" label="Email" name="email" />
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <InputLabel id={'status'}> Status </InputLabel>
                  <Select
                    {...field}
                    label="Status"
                    input={<OutlinedInput fullWidth label={'Status'} />}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              )}
            />

            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </Stack>
        </form>
      </Box>
    </Dialog>,
    document.body
  );
}

export default AddUserDialog;
