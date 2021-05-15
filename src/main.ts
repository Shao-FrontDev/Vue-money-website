import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/normalize.scss";

import Nav from "./components/Nav.vue";
import Layout from "./components/Layout.vue";
import Icon from "./components/Icon.vue";

const app = createApp(App);

app.component("Nav", Nav);
app.component("Layout", Layout);
app.component("Icon", Icon);

app.use(store);
app.use(router);
app.mount("#app");
