<template>
  <div class="hello">
    <h1>{{ getCount() }}</h1>
    <button @click="decrementCount">DECREMENT</button>
    <button @click="incrementCount">INCREMENT</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapGetters(['getCount']),
    ...mapActions(['incrementCount', 'decrementCount']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
