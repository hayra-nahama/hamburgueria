<template>
  <div class="message-container">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
import { string } from "prop-types";

export default {
  name: "Message",
  props: {
    msg: string,
  },
};
</script>
<style scoped>
.message-container {
  color: #004085;
  background-color: aliceblue;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 30px solid;
}
</style>