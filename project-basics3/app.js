const app = Vue.createApp({
  data() {
    return {
      counter: 27.8,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num; 
    },
    subtract(num) {
      this.counter -+ num;
    },
    setName(event, title) {
      this.name = title + ' ' + event.target.value
    },
    submitform(event) {
      alert('form submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
