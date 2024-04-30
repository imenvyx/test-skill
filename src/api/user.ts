import axios from 'src/utils/axios';
import { endpoints } from 'src/utils/axios';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { User } from 'src/types/user';

// "/public/v2/users?page=1&per_page=20"

const getUser = async (page: number, perPage: number) => {
  const url =
    !page && !perPage ? endpoints.users : `${endpoints.users}?page=${page}&per_page=${perPage}`;
  console.log(url);
  const data = await axios.get(url);
  return data.data;
};

function postUser(data: User): Promise<AxiosResponse<any, any>> {
  console.log(data);
  return axios.post(endpoints.addUser, data);
}

export async function deleteUser(id: string) {
  console.log(id);
  return axios.delete(endpoints.deleteUser(id));
}

/* export function useGetUsers() {
  const { data, status } = useQuery({ queryKey: ['users'], queryFn: () => getUser() });
  return { data, status };
} */

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

export function useSeekUser(page: number, perPage: number) {
  console.log(page, perPage);
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['seek-users'],
      queryFn: () => getUser(page, perPage),
      initialPageParam: page,
      getNextPageParam: (lastPage, pages) => lastPage,
    });

  console.log(data);

  return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status };
}
