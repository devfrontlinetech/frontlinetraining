import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "../../utils/localstorage";

const initialState = {
  cartCourses: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add course / increase quantity
    cart_course: (state, { payload }) => {
      const courseIndex = state.cartCourses.findIndex(
        (item) => Number(item.id) === Number(payload.id),
      );

      if (courseIndex >= 0) {
        state.cartCourses[courseIndex].quantity += 1;

        toast.info(`${payload.title} quantity increased.`, {
          position: "top-left",
        });
      } else {
        const tempCourse = {
          ...payload,
          quantity: 1,
        };

        state.cartCourses.push(tempCourse);

        toast.success(`${payload.title} added to cart`, {
          position: "top-left",
        });
      }

      setLocalStorage("cart_items", state.cartCourses);
    },

    // Decrease quantity
    decrease_quantity: (state, { payload }) => {
      const cartIndex = state.cartCourses.findIndex(
        (item) => Number(item.id) === Number(payload.id),
      );

      if (cartIndex === -1) {
        return;
      }

      if (state.cartCourses[cartIndex].quantity > 1) {
        state.cartCourses[cartIndex].quantity -= 1;

        toast.info("Decrease cart quantity", {
          position: "top-left",
        });
      } else {
        // Remove when quantity reaches 0
        state.cartCourses.splice(cartIndex, 1);

        toast.error(`${payload.title} removed from your cart`, {
          position: "top-left",
        });
      }

      setLocalStorage("cart_items", state.cartCourses);
    },

    // Remove course completely
    remove_cart_course: (state, { payload }) => {
      state.cartCourses = state.cartCourses.filter(
        (item) => Number(item.id) !== Number(payload.id),
      );

      toast.error(`${payload.title} removed from your cart`, {
        position: "top-left",
      });

      setLocalStorage("cart_items", state.cartCourses);
    },

    // Clear complete cart
    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items?",
      );

      if (confirmMsg) {
        state.cartCourses = [];

        setLocalStorage("cart_items", state.cartCourses);

        toast.success("Cart cleared", {
          position: "top-left",
        });
      }
    },

    // Get cart from localStorage
    get_cart_courses: (state) => {
      const cartItems = getLocalStorage("cart_items");

      state.cartCourses = cartItems || [];
    },
  },
});

export const {
  cart_course,
  remove_cart_course,
  decrease_quantity,
  clear_cart,
  get_cart_courses,
} = cartSlice.actions;

// Selector
export const cartCourses = (state) => state.cart.cartCourses;

export default cartSlice.reducer;
