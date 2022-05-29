/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
console.log(document.querySelector("main li").classList)
console.log(document.querySelector("img").attributes)
console.log(document.querySelector("img").hasAttribute("src"))
console.log(document.querySelector("img").hasAttribute("alt"))
console.log(document.querySelector("img").setAttribute("alt", "A new drawing of a backpack."))
document.querySelector(".site-description").style.backgroundColor = "red";