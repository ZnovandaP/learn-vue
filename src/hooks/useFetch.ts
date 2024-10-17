import type { GetDataFetch } from '@/types/post-fetch';
import { reactive } from 'vue';

export default async function useFetch<T>(url: string) {
  const dataRes = reactive<GetDataFetch<T>>({
    data: null,
    error: null,
    isLoading: false,
    isSuccess: false,
  });

  const fetchData = async () => {
    dataRes.isLoading = true;
    // reset
    dataRes.data = null;
    dataRes.error = null;

    try {
      const res = await fetch(url);
      const dataJson = await res.json();

      dataRes.isLoading = false;
      dataRes.isSuccess = true;
      dataRes.data = dataJson;
    } catch (err) {
      dataRes.isSuccess = false;
      dataRes.error = 'Data tidak dapat dimuat!';
    }
  };

  await fetchData();

  return dataRes;
}
