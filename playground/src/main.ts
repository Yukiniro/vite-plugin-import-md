import "./style.css";
import introMd from "./intro.md";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = introMd;
