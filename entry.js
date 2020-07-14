import "./style.scss"
import gsap from "gsap"

console.clear()
const owl = document.querySelector('svg');

gsap.to(owl, .5, {x: -150, yoyo: true, repeat: -1})
