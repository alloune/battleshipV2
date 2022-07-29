import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { createVuesticEssential, VaButton, createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createVuestic())


app.use(createVuesticEssential({ components: { VaButton } }));
app.mount("#app");
