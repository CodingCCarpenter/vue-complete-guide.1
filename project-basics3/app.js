const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
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
    
  }
});

app.mount('#events');
