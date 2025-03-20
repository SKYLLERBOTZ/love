document.addEventListener("DOMContentLoaded", function() {
    function createLove() {
        const love = document.createElement("div");
        love.classList.add("love");
        love.style.left = Math.random() * window.innerWidth + "px";
        love.style.top = window.innerHeight + "px";
        
        // Gunakan 10 gambar custom yang kamu miliki
        let images = [
            "love1.png", "love2.png", "love3.png", "love4.png", "love5.png",
            "love6.png", "love7.png", "love8.png", "love9.png", "love10.png"
        ];
        
        let randomImage = images[Math.floor(Math.random() * images.length)];
        love.style.backgroundImage = `url(${randomImage})`;

        document.body.appendChild(love);

        setTimeout(() => {
            love.remove();
        }, 4000);
    }

    setInterval(createLove, 500); // Munculkan love setiap 500ms
});
