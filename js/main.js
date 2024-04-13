const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 5000);
  },
};
Vue.createApp(Counter).mount("#counter");

// Директива v-bind
const AttributeBinding = {
  data() {
    return {
      message: "Страница загружена " + new Date().toLocaleString(),
    };
  },
};
Vue.createApp(AttributeBinding).mount("#bind-attribute");

// Директива v-on
const EventHandling = {
  data() {
    return {
      message: "Привет, Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    textToUpperCase() {
      this.message = this.message.toUpperCase();
    },
    textToLowerCase() {
      this.message = this.message.toLowerCase();
    },
  },
};
Vue.createApp(EventHandling).mount("#event-handling");

// Директива v-model
const TwoWayBinding = {
  data() {
    return {
      message: "Bye Byeee!",
    };
  },
};
Vue.createApp(TwoWayBinding).mount("#two-way-binding");

// Директива v-if
const ConditionalRendering = {
  data() {
    return {
      seen: true,
    };
  },
};
Vue.createApp(ConditionalRendering).mount("#conditional-rendering");

// Директива v-for
const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript", level: 'professional' },
        { text: "Learn Vue", level: 'professional' },
        { text: "Build something awesome", level: 'professional' },
      ],
    };
  },
};
Vue.createApp(ListRendering).mount('#list-rendering');
