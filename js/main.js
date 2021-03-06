"use strict";
{
    const closer = document.getElementById("close");
    const spread = document.getElementById("spread");
    const kaku = document.getElementById("kaku");

    const mimi1 = document.getElementById("mimi1");
    const mimikaki = document.getElementById("mimikaki");
    const null1 = document.getElementById("null1");
    const null2 = document.getElementById("null2");
    const kansya1 = document.getElementById("kansya1");
    const kansya2 = document.getElementById("kansya2");

    const tweetbutton = document.getElementById("tweetbutton");
    const resultText = document.getElementById("result");

    const muteButton = document.getElementById("mute");
    const intense = document.getElementById("intension");

    // 耳かきのmargin-left
    let mLeft = 50;

    let sound = true;

    muteButton.addEventListener("click", () => {
        sound = false;
        intense.textContent = "ミュートしました";
    })

    closer.addEventListener("click", () => {
        mLeft -= 5;
        mimikaki.style.marginLeft = String(mLeft) + "px";
    })
    spread.addEventListener("click", () => {
        mLeft += 5;
        mimikaki.style.marginLeft = String(mLeft) + "px";
    })
    function invisible() {
        mimikaki.style.display = "none";
        closer.style.display = "none";
        spread.style.display = "none";
        muteButton.style.display = "none";
        kaku.style.display = "none";
    }

    function lack() {
        var nullmusic = new Audio('nullsong.mp3');
        if (sound) {
            nullmusic.play();
        }
        invisible();
        null1.style.display = "block";
        null1.style.opacity = 0.2;
        setTimeout(() => {
            null1.style.opacity = 0.4;
        }, 500);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1000);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1500);
        setTimeout(() => {
            null1.style.opacity = 0.8;
        }, 2000);
        setTimeout(() => {
            null1.style.opacity = 1.0;
        }, 2500);

        null2.style.display = "block";
        null2.style.opacity = 0;
        setTimeout(() => {
            null2.style.opacity = 0.4;
        }, 3000);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 3500);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 4000);
        setTimeout(() => {
            null2.style.opacity = 0.8;
        }, 4500);
        setTimeout(() => {
            null2.style.opacity = 1.0;
        }, 5000);

        tweetbutton.href = "http://twitter.com/share?url=https://yoshiishunichi.github.io/mimikaki/&text=耳かきで何も取れませんでした…";
    }
    function minikuso() {
        var nullmusic = new Audio('nullsong.mp3');
        if (sound) {
            nullmusic.play();   
        }
        invisible();

        null1.textContent = "小さい耳クソが…";
        null1.style.display = "block";
        null1.style.opacity = 0.2;
        setTimeout(() => {
            null1.style.opacity = 0.4;
        }, 500);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1000);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1500);
        setTimeout(() => {
            null1.style.opacity = 0.8;
        }, 2000);
        setTimeout(() => {
            null1.style.opacity = 1.0;
        }, 2500);

        null2.textContent = "取れました…";
        null2.style.display = "block";
        null2.style.opacity = 0;
        setTimeout(() => {
            null2.style.opacity = 0.4;
        }, 3000);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 3500);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 4000);
        setTimeout(() => {
            null2.style.opacity = 0.8;
        }, 4500);
        setTimeout(() => {
            null2.style.opacity = 1.0;
        }, 5000);

        tweetbutton.href = "http://twitter.com/share?url=https://yoshiishunichi.github.io/mimikaki/&text=耳かきで小さい耳クソが取れました… https://twitter.com/ganja_tuber/status/1326921605830860801/photo/1";

    }
    function normalkuso() {
        var nullmusic = new Audio('nullsong.mp3');
        if (sound) {
            nullmusic.play();
        }
        invisible();

        null1.textContent = "普通の耳クソが…";
        null1.style.display = "block";
        null1.style.opacity = 0.2;
        setTimeout(() => {
            null1.style.opacity = 0.4;
        }, 500);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1000);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1500);
        setTimeout(() => {
            null1.style.opacity = 0.8;
        }, 2000);
        setTimeout(() => {
            null1.style.opacity = 1.0;
        }, 2500);

        null2.textContent = "取れました…";
        null2.style.display = "block";
        null2.style.opacity = 0;
        setTimeout(() => {
            null2.style.opacity = 0.4;
        }, 3000);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 3500);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 4000);
        setTimeout(() => {
            null2.style.opacity = 0.8;
        }, 4500);
        setTimeout(() => {
            null2.style.opacity = 1.0;
        }, 5000);

        kansya1.style.display = "block";
        kansya1.style.opacity = 0;
        setTimeout(() => {
            kansya1.style.opacity = 0.5;
        }, 5500);
        setTimeout(() => {
            kansya1.style.opacity = 1;
        }, 6000);

        tweetbutton.href = "http://twitter.com/share?url=https://yoshiishunichi.github.io/mimikaki/&text=耳かきで普通の耳クソが取れました… https://twitter.com/ganja_tuber/status/1326921562751176721/photo/1";

    }
    function bigkuso() {
        var nullmusic = new Audio('nullsong.mp3');
        if (sound) {
            nullmusic.play();
        }
        invisible();

        null1.textContent = "デカい耳クソが…";
        null1.style.display = "block";
        null1.style.opacity = 0.2;
        setTimeout(() => {
            null1.style.opacity = 0.4;
        }, 500);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1000);
        setTimeout(() => {
            null1.style.opacity = 0.6;
        }, 1500);
        setTimeout(() => {
            null1.style.opacity = 0.8;
        }, 2000);
        setTimeout(() => {
            null1.style.opacity = 1.0;
        }, 2500);

        null2.textContent = "取れました…";
        null2.style.display = "block";
        null2.style.opacity = 0;
        setTimeout(() => {
            null2.style.opacity = 0.4;
        }, 3000);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 3500);
        setTimeout(() => {
            null2.style.opacity = 0.6;
        }, 4000);
        setTimeout(() => {
            null2.style.opacity = 0.8;
        }, 4500);
        setTimeout(() => {
            null2.style.opacity = 1.0;
        }, 5000);

        kansya1.style.display = "block";
        kansya1.style.opacity = 0;
        kansya2.style.display = "block";
        kansya2.style.opacity = 0;
        setTimeout(() => {
            kansya1.style.opacity = 0.5;
        }, 5500);
        setTimeout(() => {
            kansya1.style.opacity = 1;
        }, 6000);
        setTimeout(() => {
            kansya2.style.opacity = 0.5;
        }, 6500);
        setTimeout(() => {
            kansya2.style.opacity = 1;
        }, 7000);
        tweetbutton.href = "http://twitter.com/share?url=https://yoshiishunichi.github.io/mimikaki/&text=耳かきでデカい耳クソが取れました… https://twitter.com/ganja_tuber/status/1326921511366692864/photo/1";

    }
    function brain() {
        var nullmusic = new Audio('noumiso.mp3');
        invisible();
        setTimeout(() => {
            mimi1.src = "img/mimi1-1.jpg";
        }, 1000);
        setTimeout(() => {
            mimi1.src = "img/mimi1-2.jpg";
        }, 2000);
        setTimeout(() => {
            mimi1.src = "img/mimi1-3.jpg";
        }, 3000);

        null1.textContent = "脳みそが…";
        null1.style.display = "block";
        null1.style.opacity = 0;
        setTimeout(() => {
            if (sound) {
                nullmusic.play();
            }

            null1.style.opacity = 0.5;
        }, 3500);
        setTimeout(() => {
            null1.style.opacity = 1.0;
        }, 4000);

        null2.textContent = "取れました…";
        null2.style.display = "block";
        null2.style.opacity = 0;
        setTimeout(() => {
            null2.style.opacity = 0.5;
        }, 4500);
        setTimeout(() => {
            null2.style.opacity = 1.0;
        }, 5000);
        tweetbutton.href = "http://twitter.com/share?url=https://yoshiishunichi.github.io/mimikaki/&text=耳かきで脳みそが取れました… https://twitter.com/ganja_tuber/status/1326921450058637315/photo/1";

    }

    kaku.addEventListener("click", () => {
        let result = confirm('本当にここでほじりますか？');
        if (result === false) {
            return
        }
        resultText.style.display = "block";

        if (mLeft >= -100) {
            lack();
        }
        else if (mLeft >= -120) {
            minikuso();
        }
        else if (mLeft >= -135) {
            normalkuso();
        }
        else if (mLeft >= -140) {
            bigkuso();
        }
        else {
            brain();
        }
    })

    // ダブルタップで拡大しない
    var t = 0;
    document.documentElement.addEventListener('touchend', function (e) {
        var now = new Date().getTime();
        if ((now - t) < 400) {
            e.preventDefault();
        }
        t = now;
    }, false);
}