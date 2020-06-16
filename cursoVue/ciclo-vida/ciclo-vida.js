const app = new Vue({


    el: '#app',
    data: {


        saludo: 'Soy ciclo de vida de Vue'
    },
    beforeCreate() {
        console.log('beforeCreate');

    },
    destruir() {
        this.$destroy();
    }


})