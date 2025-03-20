document.addEventListener("DOMContentLoaded", function() {
    function createLove() {
        const love = document.createElement("div");
        love.classList.add("love");

        // Menentukan posisi acak di layar
        love.style.left = Math.random() * window.innerWidth + "px";
        love.style.top = window.innerHeight + "px";

        // Daftar gambar hati
        const images = [
            "love1.png", "love2.png", "love3.png", "love4.png", "love5.png",
            "love6.png", "love7.png", "love8.png", "love9.png", "love10.png"
        ];
        
        // Pilih gambar hati secara acak
        const randomImage = images[Math.floor(Math.random() * images.length)];
        love.style.backgroundImage = `url(${randomImage})`;

        // Ukuran acak untuk variasi efek
        const size = Math.random() * 30 + 20; // Ukuran antara 20px - 50px
        love.style.width = `${size}px`;
        love.style.height = `${size}px`;
        love.style.backgroundSize = "contain";
        love.style.backgroundRepeat = "no-repeat";

        document.body.appendChild(love);

        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            love.remove();
        }, 4000);
    }

    // Munculkan hati setiap 400ms untuk efek lebih smooth
    setInterval(createLove, 400);
});
