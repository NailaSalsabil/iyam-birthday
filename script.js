const particleContainer = document.querySelector(".particles");

for (let i = 0; i < 70; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.opacity =
        0.3 + Math.random() * 0.7;

    particleContainer.appendChild(particle);
}


/* PASSWORD */

function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    const message =
        document.getElementById("passwordMessage");

    if (password === "2021") {

        message.textContent =
            "♡ Selamat datang, Iyam...";

        startMusic();

        setTimeout(function() {
            showPage("birthdayChoice");
        }, 1000);

    } else {

        message.textContent =
            "Hmm... kata sandinya salah ♡";
    }
}


document
    .getElementById("passwordInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });


/* MUSIK */

function startMusic() {

    const music =
        document.getElementById("bgMusic");

    music.volume = 0.35;

    music.play().catch(function() {

        console.log(
            "Musik menunggu interaksi."
        );

    });
}


/* PILIH TANGGAL */

function checkDate(selectedDate) {

    const message =
        document.getElementById("dateMessage");

    if (selectedDate === "29/09/2005") {

        message.textContent =
            "Yeay! Jawabanmu benar ♡";

        setTimeout(function() {
            showPage("successPage");
        }, 1000);

    } else {

        message.textContent =
            "🥺 Yahh... jawabanmu salah.";
    }
}


/* PINDAH HALAMAN */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });


    document
        .getElementById(pageId)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "messagePage") {
        startTyping();
    }


    if (pageId === "wishPage") {
        startWishTyping();
    }
}


/* COUNTDOWN */

const birthdayDate =
    new Date(
        "September 29, 2026 00:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        birthdayDate - now;


    if (distance <= 0) {

        document.getElementById("days")
            .textContent = "00";

        document.getElementById("hours")
            .textContent = "00";

        document.getElementById("minutes")
            .textContent = "00";

        document.getElementById("seconds")
            .textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* LILIN */

const candle =
    document.getElementById("candle");

const flame =
    document.getElementById("flame");

const candleText =
    document.getElementById("candleText");


candle.addEventListener(
    "click",
    function() {

        flame.classList.add("off");

        candleText.textContent =
            "Harapanmu terkabul ♡";

        setTimeout(function() {

            showPage(
                "childhoodPage"
            );

        }, 1800);

    }
);


/* PESAN PERTAMA */

const message = `Ada banyak hal kecil tentang kamu yang mungkin tidak selalu aku katakan.

Aku suka caramu menjadi seseorang yang tulus, dewasa ketika menghadapi banyak hal, dan perhatian bahkan pada hal-hal kecil yang kadang tidak kusadari.

Kadang kamu bisa sedikit posesif, tapi mungkin itu juga salah satu caramu menunjukkan bahwa kamu peduli dan ingin menjagaku.

Terima kasih sudah menjadi kamu.

Seseorang yang kehadirannya perlahan menjadi bagian dari banyak cerita indah dalam hidupku. ♡`;


let typingStarted = false;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const typingText =
        document.getElementById("typingText");

    let index = 0;


    function type() {

        if (index < message.length) {

            typingText.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                type,
                35
            );

        } else {

            document
                .getElementById("messageNext")
                .classList
                .remove("hidden");

        }
    }


    type();
}


/* WISH */

const wishMessage = `Selamat ulang tahun untuk seseorang yang sangat berarti bagiku.

Terima kasih sudah menjadi bagian dari hidupku,
untuk setiap momen kecil,
setiap tawa,
setiap percakapan,
dan setiap kenangan yang telah kita ciptakan bersama.

Semoga hadiah kecil ini membuat harimu
menjadi sedikit lebih indah.

Semoga kamu selalu menemukan alasan untuk tersenyum,
terus bertumbuh,
terus bermimpi,
dan menjadi seseorang yang kamu inginkan.

May this new chapter bring you
happiness, peace, and many beautiful things.

Once again,
Happy 21st Birthday, Sayang. ♡`;


let wishTypingStarted = false;


function startWishTyping() {

    if (wishTypingStarted) {
        return;
    }

    wishTypingStarted = true;

    const wishText =
        document.getElementById(
            "wishTypingText"
        );

    let index = 0;


    function typeWish() {

        if (index < wishMessage.length) {

            wishText.textContent +=
                wishMessage.charAt(index);

            index++;

            setTimeout(
                typeWish,
                35
            );

        } else {

            document
                .getElementById("wishNext")
                .classList
                .remove("hidden");

        }
    }


    typeWish();
}