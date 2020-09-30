const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('running again...');
      if(this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'lastName'
      }
    }
  },
  computed: {
    // fullName() {
    //   console.log('running again...');
    //   if(this.name === '') {
    //     return '';
    //   } else {
    //     return this.name + ' ' + 'lastName'
    //   } 
    // }
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + 'Schwarzmuller'
      }
    }
  }
});

app.mount('#events');
