document.addEventListener("DOMContentLoaded", () => {
    let gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/WrfgK836swOvrdycaG/giphy.gif";
    gif.alt = "GIF Animasi";
    gif.style.width = "50px"; // Sesuaikan ukuran GIF
    gif.style.position = "absolute";
    gif.style.pointerEvents = "none"; // Biar tidak menghalangi klik
    gif.style.zIndex = "9999"; // Pastikan di atas elemen lain

    document.body.appendChild(gif);

    document.addEventListener("mousemove", (e) => {
        gif.style.left = `${e.pageX + 10}px`; // Offset sedikit dari kursor
        gif.style.top = `${e.pageY + 10}px`;
    });
});
