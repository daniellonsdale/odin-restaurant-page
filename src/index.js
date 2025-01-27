import "./styles.css";
import { initLoad } from "./init-load";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

initLoad();

homeBtn.addEventListener('click', () => {
    contentDiv.replaceChildren();
    initLoad();
});

menuBtn.addEventListener('click', () => {
    contentDiv.replaceChildren();
    menuLoad();
});

aboutBtn.addEventListener('click', () => {
    contentDiv.replaceChildren();
    aboutLoad();
});