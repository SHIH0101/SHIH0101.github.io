// banner左右按鈕
let i = 1;
let nextPic = document.getElementById("nextPic");
let bannerPage = document.getElementById("bannerPage");
document.getElementById("bannerRight").onclick = nextImg;
document.getElementById("bannerLeft").onclick = lastImg;

function nextImg() {
    if (i == 5) {
        i = 0;
    }
    i++;
    nextPic.src = "./img/banner0" + i + ".png";
    bannerPage.innerText = i;
}

function lastImg() {
    if (i == 1) {
        i = 6;
    }
    i--;
    nextPic.src = "./img/banner0" + i + ".png";
    bannerPage.innerText = i;
}


//aos效果

AOS.init();

// 關於我們數時間
let Time1 = 1;
let aboutTime;


function countNum() {
    Time1++;

    if (Time1 <= 17) {

        document.getElementById("aboutTime1").innerText = Time1;
        document.getElementById("aboutTime2").innerText = Time1;
        document.getElementById("aboutTime3").innerText = Time1;
        divTime = setTimeout(countNum, 50);

    } else if (Time1 <= 160) {
        document.getElementById("aboutTime1").innerText = Time1;
        document.getElementById("aboutTime2").innerText = Time1;
        divTime = setTimeout(countNum, 30);

    } else if (Time1 <= 250) {
        document.getElementById("aboutTime1").innerText = Time1;
        divTime = setTimeout(countNum, 10);

    }
}

window.onload = function() {

    // 停在這個畫面重新載入
    aboutTime = setTimeout(countNum, 100);


    // 捲動
    window.addEventListener("scroll", function() {
        let aboutTop = document.getElementById("about").offsetTop;
        // console.log(aboutTop);
        // console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > aboutTop) {
            aboutTime = setTimeout(countNum, 300);
        };

    });




};