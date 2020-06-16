<template>
    <div>
        <h1 class="text-center">inicio</h1>
        <router-link to='/agregar'>
                    <button class="btn btn-success btn-block">Agregar</button>

        </router-link>
    
        <ul class="list-group mt-5">
            <li v-for="(item, index) in tareas" :key="index" class="list-group-item">
                {{item.nombre}} - {{item.id}}
                <div class="float-right">
                <router-link :to="{name: 'Editar', params: {id: item.id}}">
                <button class="btn btn-warning mr-2">Editar</button>
                </router-link>

                <button @click="eliminarTarea(item.id)" class="btn btn-danger">Eliminar</button>
                

                </div>
               

            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Inicio',
    created(){
        this.getTareas()
    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>