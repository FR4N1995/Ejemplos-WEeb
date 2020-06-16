Vue.component('hijo', {
    template: `
<div class="py-5 bg-success">
    <h4>Componente hijo: {{numero}}</h4>
    <br>
    <h4>nombre: {{nombre}}</h4>
    
    

</div>

`,
    props: ['numero'],
    data() {
        return {
            nombre: 'Francisco Avalos'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    }

})