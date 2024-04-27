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
import { Controller } from 'react-hook-form';

type FormProps = {
  onSubmit: VoidFunction;
  control: any;
};

function Form({ onSubmit, control }: FormProps) {
  return (
    <Box sx={{ display: 'flex', maxWidth: { xs: 'none', sm: 300 }, width: 1 }}>
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
            render={({ field }) => <TextField {...field} type="email" label="Email" name="email" />}
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
  );
}

export default Form;
