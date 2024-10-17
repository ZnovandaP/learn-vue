import { defineStore } from 'pinia';
import { mande } from 'mande';

const getProductsEndpoint = 'https://fakestoreapi.com/products';

const getProducts = mande(getProductsEndpoint);

export type Product = {
  id:number,
  title:string,
  price:number,
  category:string,
  description:string,
  image:string
  rating: {
    rate: number
    count: number
  }
};

export type ProductState = {
  products: Product[]
  isSuccess: boolean
  isLoading: boolean
  error: null | string
};

const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    isLoading: false,
    isSuccess: false,
    error: null,
  }),

  actions: {
    async getProducts() {
      this.isLoading = true;
      try {
        const res = await getProducts.get<Product[]>();
        this.products = res;
      } catch (error) {
        this.error = 'Data produk tidak dapat dimuat!';
      } finally {
        this.isLoading = false;
      }
    },
  },

});

export default useProductStore;
