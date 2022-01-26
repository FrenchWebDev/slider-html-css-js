//checkbox
const btn_1 = document.getElementById("i1");
const btn_2 = document.getElementById("i2");
const btn_3 = document.getElementById("i3");

//balise img
const img = document.getElementById("image")

//nom des images du slider
var image_1 = "img-1.png";
var image_2 = "img-2.png";
var image_3 = "img-3.png";

//fonction fléchée lorsque un boutton est clicker
btn_1.addEventListener("click", () => {
    img.title = "Image 1"
    img.srcset = image_1
});
btn_2.addEventListener("click", () => {
    img.title = "Image 2"
    img.srcset = image_2
});
btn_3.addEventListener("click", () => {
    img.title = "Image 3"
    img.srcset = image_3
});
 