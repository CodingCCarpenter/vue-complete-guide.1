const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: ''
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
    fullName() {
      console.log('running again...');
      if(this.name === '' || this.lastName === '') {
        return '';
      } else {
        return this.name + ' ' + this.lastName
      } 
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  // COULD REPLACE COMPUTED PROPERTY fullName()
  //   name(value) {
  //     if (value === '') {
  //       this.fullName = '';
  //     } else {
  //       this.fullName = value + ' ' + 'Schwarzmuller'
  //     }
  //   }
  // },
  // lastName(value) {
  //   if (value === '') {
  //     this.fullName = '';
  //   } else {
  //     this.fullName = this.name + ' ' + value;
  //   }
  }
});

app.mount('#events');
