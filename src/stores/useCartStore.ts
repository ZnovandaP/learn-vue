import { defineStore } from 'pinia';
import { computed, reactive, watch } from 'vue';

// * Composition Store

export type Cart = {
  qty: number;
  id: number
  title: string
  Totalprice: number
  image:string
  pricePerPcs: number
};

export type ProductParams = {
  id: number
  title: string
  price: number
  qty: number
  image: string
};

type CartState = {
  items: Cart[];
};

const useCartStore = defineStore('cart', () => {
  const cart = reactive<CartState>({
    items: [],
  });

  const amountTotalPriceInCart = computed(
    () => cart.items.reduce((acc, item) => acc + item.Totalprice, 0),
  );

  watch(() => cart.items.map((item) => item.qty), (newData, oldData) => {
    cart.items.forEach((prod, index) => {
      if (newData[index] !== oldData[index]) {
        // eslint-disable-next-line no-param-reassign
        prod.Totalprice = prod.pricePerPcs * prod.qty;
      }
    });
  }, {
    deep: true,
  });

  // * method or function action

  const addProductToCart = (product: ProductParams) => {
    const indexProductExistInCart = cart.items.findIndex(
      (productCart) => productCart.id === product.id,
    );

    if (indexProductExistInCart !== -1) {
      cart.items[indexProductExistInCart].qty += 1;
    } else {
      cart.items.unshift({
        id: product.id,
        title: product.title,
        qty: product.qty,
        Totalprice: product.price * product.qty,
        image: product.image,
        pricePerPcs: product.price,
      });
    }
  };

  const deleteProductInCart = (id: number) => {
    const indexProductChoosen = cart.items.findIndex((product) => product.id === id);

    if (indexProductChoosen !== -1) {
      cart.items.splice(indexProductChoosen, 1);
    }
  };

  const incrementQtyProductInCart = (id: number) => {
    const indexProductChoosen = cart.items.findIndex((product) => product.id === id);

    if (indexProductChoosen !== -1) {
      cart.items[indexProductChoosen].qty += 1;
    }
  };

  const decrementQtyProductInCart = (id: number) => {
    const indexProductChoosen = cart.items.findIndex((product) => product.id === id);

    if (indexProductChoosen !== -1) {
      if (cart.items[indexProductChoosen].qty > 1) {
        cart.items[indexProductChoosen].qty -= 1;
      }
    }
  };

  const clearCart = () => {
    cart.items = [];
  };

  return {
    cart,
    amountTotalPriceInCart,
    addProductToCart,
    deleteProductInCart,
    incrementQtyProductInCart,
    decrementQtyProductInCart,
    clearCart,
  };
}, {
  persist: {
    key: 'pinia-cart-store',
    storage: localStorage,
    serializer: {
      deserialize: JSON.parse,
      serialize: JSON.stringify,
    },
  },
});

export default useCartStore;
