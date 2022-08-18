<template>
<div class="father_component">
  <h1>Father component: {{number}}</h1>
  {{emit}}
  <h2>Store value: {{$store.state.numberState}}</h2>
  <label for="">buttons of props</label>
  <button @click="number++">+</button>
  <button @click="number--">-</button><br>
  <label for="">buttons of state</label>
  <button @click="$store.commit('increment')">+</button>
  <button @click="$store.commit('decrement')">-</button>
  <Hijo msg="this is a son component" :other="number" @sonName="emit = $event"/>
</div>
</template>

<script>
import Hijo from '../components/Hijo.vue'

export default {
  name: 'Padre',
  components:{
    Hijo
  },
  data(){
    return{
      number:0,
      emit:''
    }
  },
}
</script>

<style scoped>  
  .father_component{
    background-color:#363636;
    width: 50%;
    margin: 0 auto;
    height: 300px;
    padding: 30px;
  }
  h1{
    font-size: 2em;
  }
  button{
    width: 40px;
    height: 20px;
    color:#363636;
    margin-bottom: 10px;
  }
</style>