const app = new Vue({
  el: "#app",
  data: {
    products: [],
    cart: [],
    user: {
      name: "asd",
      dinero: 1000,
    },
  },
  created() {
    this.fetchApi();
    // const idInterval = setInterval(this.fetchApi(), 5000)
  },
  methods: {
    fetchApi() {
      const dataApi = localStorage.getItem("db");
      if (dataApi != null) {
        this.products = JSON.parse(dataApi);
      } else {
        fetch("js/db.json")
          .then((reponse) => reponse.json())
          .then((data) => {
            this.products = data.products;
            localStorage.setItem("db", JSON.stringify(data.products));
          });
      }
    },
    addCart(product) {
      const itemCart = this.cart.filter((item) => item.id == product.id)[0];
      if (itemCart != undefined) {
        itemCart.cant++;
      } else {
        const itemCart = {
          id: product.id,
          name: product.name,
          price: product.price,
          moneda: product.moneda,
          cant: 1,
        };
        this.cart.push(itemCart);
      }
      product.stock--;
    },
    removeCart(product) {
      const itemCart = this.products.filter((item) => item.id == product.id)[0];
      itemCart.stock += product.cant;
      let indiceProduct = 0;
      this.cart.forEach((item, i) =>
        item.id == product.id ? (indiceProduct = i) : null
      );
      this.cart.splice(indiceProduct, 1);
    },
    cleanCart() {
      this.cart = [];
    },
  },
  computed: {
    cantProductsInCart() {
      return this.cart.reduce((acc, item) => acc + item.cant, 0);
    },
    totalPriceCart() {
      return this.cart.reduce((acc, item) => acc + item.cant * item.price, 0);
    },
  },
});
