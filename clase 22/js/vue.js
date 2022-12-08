/* COMPONENTES VUE */
Vue.component("card-vue", {
  props: {
    titulo: String,
    newtext: String,
    sumar: Number,
  },
  template: `
  <div class="card" style="width:200px;">
    <img src="https://picsum.photos/100" class="card-img-top" alt="img">
    <div class="card-body">
      <h5 class="card-title">{{nuevoTitulo}}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>{{newtext}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      <button @click="cont++"> +1 </button>
      <p>{{cont}}</p>
      <button @click="emitir"> señal </button>
      <button @click="irASumar"> +1 number root</button>
    </div>
  </div>
  `,
  data: function () {
    return {
      cont: 0,
      nuevoTitulo: this.titulo + "texto",
    };
  },
  methods: {
    emitir() {
      this.$emit("nuevo-evento");
    },
    irASumar() {
      this.$emit("aumentar", this.sumar);
    },
  },
});

/* INSTANCIA DE VUE */
const app = new Vue({
  el: "#app",
  data: {
    userNumber: 0,
    userNumber2: 0,
    arrData: [],
    msg: "",
    numeroRoot: 0,
  },
  created: function () {
    console.log(this.arrData);
  },
  methods: {
    saludar() {
      console.log("Hola Mundo");
    },
    updataNumber(numero) {
      this.numeroRoot += numero;
    },
  },
  computed: {
    suma() {
      return this.userNumber + this.userNumber2;
    },
    filterArr() {
      return this.arrData.filter((item) => item % this.userNumber == 0);
    },
  },
});
