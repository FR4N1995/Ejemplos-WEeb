Vue.component('padre', {

    template: `
<div class="p-5 bg-dark text-white">

<h2>componente padre: {{numeroPadre}}</h2>
<button class="btn btn-danger" @click="numeroPadre= numeroPadre + 1">mas</button>
{{nombrepadre}}
<hijo :numero ="numeroPadre" @nombreHijo= "nombrepadre = $event"></hijo>


</div>

`,
    data() {
        return {
            numeroPadre: 0,
            nombrepadre: ''

        }
        console.log(numeroPadre);
    }


})