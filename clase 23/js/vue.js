Vue.component("btn-vue", {
  template: `
  <button class="btn btn-info">
    boton de generico
    <slot> 
      Texto generico
    </slot>
  </button>
  `,
});

Vue.component("parrafo-vue", {
  template: `
  <p>
    lorem ipsum
    <btn-vue> nuevo texto </btn-vue>
  </p>
  `,
});

Vue.component("home", {
  template: `
  <div class="bg-info">
    <h2>Pagina de Home</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam cum
      reprehenderit illo dignissimos eligendi nesciunt perferendis, facere
      unde, praesentium excepturi, culpa tenetur non accusamus quam vitae
      laboriosam? Corporis, ab soluta!
    </p>
    <p class="text-center">footer &copy 2020</p>
  </div>
  `,
});
Vue.component("contact", {
  template: `
  <div class="bg-success">
    <h2>Pagina de contact</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam cum
      reprehenderit illo dignissimos eligendi nesciunt perferendis, facere
      unde, praesentium excepturi, culpa tenetur non accusamus quam vitae
      laboriosam? Corporis, ab soluta!
    </p>
    <p class="text-center">footer &copy 2020</p>
  </div>
  `,
});
Vue.component("about", {
  template: `
  <div class="bg-danger">
    <h2>Pagina de about</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam cum
      reprehenderit illo dignissimos eligendi nesciunt perferendis, facere
      unde, praesentium excepturi, culpa tenetur non accusamus quam vitae
      laboriosam? Corporis, ab soluta!
    </p>
    <p class="text-center">footer &copy 2020</p>
  </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    numero: 1,
    pages: ["home", "contact", "about"],
    currentPage: "home",
  },
  methods: {
    updataPage(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
  watch: {
    numero(currentValue, oldValue) {
      console.log("valor actual: ", currentValue);
      console.log("valor viejo: ", oldValue);
    },
  },
  computed: {
    page() {
      return location.href.split("#")[1];
    },
  },
});
