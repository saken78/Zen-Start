document.addEventListener("DOMContentLoaded", () => {
    let gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/WrfgK836swOvrdycaG/giphy.gif";
    gif.alt = "GIF Animasi";
    gif.style.width = "90px"; // Sesuaikan ukuran GIF
    gif.style.position = "fixed"; // Agar tetap di satu posisi
    gif.style.top = "25px"; // Jarak dari atas
    gif.style.right = "25px"; // Jarak dari kanan
    gif.style.pointerEvents = "none"; // Biar tidak menghalangi klik
    gif.style.zIndex = "9999"; // Pastikan di atas elemen lain

    document.body.appendChild(gif);
});
