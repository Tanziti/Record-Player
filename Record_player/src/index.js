
import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello world!");

    const main = document.getElementById("main");
    new Example(main);
});