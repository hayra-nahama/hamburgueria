const MyNameApp = {
    data() {
        return {
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");