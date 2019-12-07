
const fullPath = document.referrer
const pathArray = window.location.pathname.split('/')
console.log(pathArray)

document.querySelector(".errorurl"). textContent = pathArray[1]
