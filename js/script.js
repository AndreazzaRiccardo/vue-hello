
const { createApp } = Vue;

const app = createApp ({
    data () {
        return {
            username: "",
            imgSrc: "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            textColor: "color: darkred"
        };
    },
});

app.mount("#app");