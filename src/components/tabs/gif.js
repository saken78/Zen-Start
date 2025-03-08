document.addEventListener("DOMContentLoaded", () => {
    let img = document.createElement("img");
    img.src = "https://media.giphy.com/media/WrfgK836swOvrdycaG/giphy.gif";
    img.alt = "GIF Animasi";
    img.style.width = "200px";
    img.style.display = "block";
    img.style.margin = "auto";

    document.querySelector("tabs-list").appendChild(img);
});
