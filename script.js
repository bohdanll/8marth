const audio = document.getElementById("audioPlayer");
const button = document.getElementById("playPauseButton");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸️";
    } else {
        audio.pause();
        button.textContent = "▶️";
    }
});

// Генерация падающих сердец
function createHearts() {
    const heartsContainer = document.querySelector(".hearts");
    const heartTypes = ["❤️", "💖", "💓", "💘", "💝", "💕", "💗", "💞", "💌"];

    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    createHearts();
});
document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "я тебя люблю",
        "я люблю, когда ты честна со мной",
        "я люблю твои волосы",
        "я люблю твою улыбку",
        "будь around, и я буду around",
        "что не праздник -- так подкат к любимой",
        "даже на расстоянии ты для меня ближе, чем кто-либо",
        "ты мой мир",
        "хочется, чтобы ты была рядом не только в сообщениях",
        "пиши мне",
        "7 класс подарил мне многое"
    ];

    function createFallingText() {
        const text = document.createElement("div");
        text.classList.add("falling-text");
        text.innerText = phrases[Math.floor(Math.random() * phrases.length)];

        text.style.left = Math.random() * 90 + "%"; // Случайная позиция
        text.style.animationDuration = (Math.random() * 2 + 4) + "s"; // Разная скорость падения

        document.body.appendChild(text);

        setTimeout(() => {
            text.remove();
        }, 6000); // Удаляем после анимации
    }

    setInterval(createFallingText, 1000); // Каждую секунду создаем новую фразу
});

