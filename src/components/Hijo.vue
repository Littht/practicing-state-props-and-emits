<template>
<div class="son_component">
    <p>{{msg}}: {{other}}</p>
    <label for="">{{name}}</label>
    <h2>son store value:{{$store.state.numberState}}</h2>
    <label for="">buttons of state</label>
    <button @click="$store.commit('increment')">+</button>
    <button @click="$store.commit('decrement')">-</button>
</div>
</template>

<script>
export default{
    name:'Hijo',
    props: ['msg','other'],
    data(){
        return{
            name:'juan',
        }
    },

    mounted(){
        this.$emit('sonName', this.name)
    }
}
</script>

<style scoped>
    .son_component{
        background-color: rgb(66, 155, 66);
        padding: 20px;
    }
    input{
        color: #363636;
    }
    button{
        width: 40px;
        height: 20px;
        color:#363636;
        margin-bottom: 10px;
  }
</style>