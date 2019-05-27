const app = new Vue ({

    el:'#app',
    data:{
        titulo:'Hola mundo con vue',
        frutas:[
            {nombre:'pera', cantidad:10}, 
            {nombre:'Mango', cantidad:0}, 
            {nombre:'Platano', cantidad:3}
        ],
        nuevafruta:'',
        nuevaCantidad:''


    },
   methods:{
       agregarFruta () {

        this.frutas.push({
        nombre: this.nuevafruta, cantidad:this.nuevaCantidad

        })
       }
   }


})