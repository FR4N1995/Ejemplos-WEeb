<template>
    <div>
       
 <ul class="list-group">
  <li v-for="(item, index) of arrayordenado" :key="item.id" @click="aumentar(index)"
  class="list-group-item d-flex justify-content-between align-items-center">
    {{item.nombre}}
    <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
    
   
  </li>
  <button class="btn btn-danger" @click="reiniciar">Restar</button>
  
</ul>



    </div>

</template>

<script>

import {mapState, mapMutations} from 'vuex';


export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        arrayordenado(){
            return this.frutas.slice(0).sort((a, b) => b.cantidad - a.cantidad)
        }
    },
    methods:{
        ...mapMutations(['aumentar', 'reiniciar'])
    }



}
</script>