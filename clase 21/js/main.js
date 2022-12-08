const app = new Vue({
  el: "#app",
  data: {
    number: 20,
    string: "hola mundo",
    inputText: "",
    boolean: false,
    link: "https://es.vuejs.org/",
    nombreLink: "Vue",
    select: "",
    textocheck: [],
    numeros: ["valor 1", "numero 2", "tres", "d", "go"],
    user: {
      name: "marco",
      email: "marco@correo.com  ",
    },
    contador: 0,
    idioma: "español",
    condicion: true,
  },
  methods: {
    updateCont() {
      this.contador++;
    },
    updateCont2() {
      this.contador += 5;
    },
    cambiarIdioma(ev) {
      // console.log(ev.target.dataset.idioma);
      this.idioma = ev.target.dataset.idioma;
    },
  },
});
