import axios from 'src/utils/axios';
import { endpoints } from 'src/utils/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { User } from 'src/types/user';
import { SnackbarProps } from '@mui/material';

function getUser() {
  const data = axios.get(endpoints.users);
  return data;
}

function postUser(data: User): Promise<AxiosResponse<any, any>> {
  console.log(data);
  return axios.post(endpoints.addUser, data);
}

export async function deleteUser(id: string) {
  console.log(id);
  return axios.delete(endpoints.deleteUser(id));
}

export function useGetUsers() {
  const { data, status } = useQuery({ queryKey: ['users'], queryFn: getUser });
  return { data, status };
}

export function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUser,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
