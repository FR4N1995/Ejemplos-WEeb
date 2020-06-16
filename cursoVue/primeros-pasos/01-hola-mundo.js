const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            { nombre: 'Pera', cantidad: 3 },
            { nombre: 'Manzana', cantidad: 5 },
            { nombre: 'Platano', cantidad: 12 },

        ],
        nuevaFruta: '',
        total: 0


    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta


            });
            this.nuevaFruta = '';
        }


    },
    computed: {

        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;


        }
    }

})