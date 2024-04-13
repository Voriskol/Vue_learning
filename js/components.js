const TodoItem = {
  props: ["todo"], // Входной параметр
  template: `<li>{{todo.text}}</li>`, // Шаблон
};

const TodoList = {
  data() {
    return {
      groceryList: [
        { text: "Овощи" },
        { text: "Сыр" },
        { text: "Мясо" },
        { text: "Фрукты" },
        { text: "Пиво" },
      ],
    };
  },
  components: {
    TodoItem   // Регистрируем новый компонент
  },
};

const app = Vue.createApp(TodoList);
app.mount("#todo-list-app");
