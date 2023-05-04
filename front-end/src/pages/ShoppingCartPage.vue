<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :cartItems="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">
    Your Cart is Empty
  </div>
</template>

<script>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartItems
    }
  },
  components: {
    ShoppingCartList
  }
}
</script>