import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

createApp(App)
    .use(createPinia())
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
