export type Post = {
  userId: number
  id: number
  title: string
  body: string
};

export type GetDataFetch<T> = {
  data: null | T
  isLoading: boolean,
  isSuccess: boolean,
  error: null | string,
};
