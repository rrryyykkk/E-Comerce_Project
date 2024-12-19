import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("error= ", error.message);
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log("error= ", error.message);
  }
};

const initialState = {
  product: [],
  cart: loadState("cart") || [],
  filterProduct: [],
  activeCategory: "All",
  loading: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(import.meta.env.VITE_FAKESTORE_API);
      console.log(response);
      return response.data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        rating: item.rating,
        stock: 10,
        quantity: 0,
      }));
    } catch (error) {
      return rejectWithValue(error.response.data?.data || error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      // find product
      const selectedProduct = state.product.find(
        (product) => product.id === id
      );
      if (!selectedProduct || selectedProduct.stock < quantity) {
        return console.log("Stock tidak menucukupi");
      }
      const existingCart = state.cart.find((product) => product.id === id);

      if (existingCart) {
        existingCart.quantity += quantity;

        if (existingCart.quantity > selectedProduct.stock) {
          existingCart.quantity = selectedProduct.stock;
        }
      } else {
        state.cart.push({
          ...selectedProduct,
          quantity: quantity,
        });
      }
    },
    checkout: (state) => {
      state.product = state.product.map((product) => {
        const cartItem = state.cart.find((cart) => cart.id === product.id);
        if (cartItem) {
          if (cartItem < cartItem.quantity) {
            console.error("Stock tidak cukup untuk produk:", product.title);
          } else {
            product.stock -= cartItem.quantity;
          }
        }
        return product;
      });
      state.cart = [];
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.activeCategory = category;
      if (category === "All") {
        state.filterProduct = state.product;
      } else {
        state.filterProduct = state.product.filter(
          (products) => products.category === category
        );
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity = Math.max(1, Math.min(quantity, cartItem.stock));
      }
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.product = action.payload.map((product) => ({
          ...product,
          stock: 10,
        }));
        state.filterProduct = state.product;
        state.loading = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  addToCart,
  checkout,
  filterByCategory,
  updateQuantity,
  removeCart,
  resetCart,
} = productSlice.actions;

export default productSlice.reducer;
