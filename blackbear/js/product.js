//aos效果

AOS.init();



// 換口味
let productName = document.getElementById('productName');
let productEnName = document.getElementById('productEnName');
let price = document.getElementById('price');
let labels = document.getElementsByTagName('label');
let bigImg = document.getElementById('bigimg');
let smallImgs = document.querySelectorAll('.smallimg img');


for (let i = 1; i < labels.length; i++) {
    labels[1].style.backgroundColor = "#F8C0C1";
    labels[1].style.color = "#1b1b1c";
    labels[i].onclick = changeColor;
};

for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = changeImg;
};


// 點擊口味文字
function changeColor(e) {

    // 所有文字恢復原狀
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = "";
        labels[i].style.color = "#f3f3f3";

    };

    // 改變文字顏色
    e.target.style.backgroundColor = "#F8C0C1";
    e.target.style.color = "#1b1b1c";
    labels[0].style.backgroundColor = "";
    labels[0].style.color = "#f3f3f3";


    // 改變標題和大圖
    if (e.target == labels[1]) {
        productName.innerText = "原味甜甜圈";
        productEnName.innerText = "Plain Donut";
        price.innerText = '35元';
        bigImg.src = smallImgs[0].src;

    } else if (e.target == labels[2]) {
        productName.innerText = "草莓甜甜圈";
        productEnName.innerText = "Strawberry Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[1].src;

    } else if (e.target == labels[3]) {
        productName.innerText = "抹茶甜甜圈";
        productEnName.innerText = "Matcha Donut";
        price.innerText = '45元';
        bigImg.src = smallImgs[2].src;

    } else if (e.target == labels[4]) {
        productName.innerText = "巧克力甜甜圈";
        productEnName.innerText = "Chocolate Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[3].src;

    } else if (e.target == labels[5]) {
        productName.innerText = "檸檬甜甜圈";
        productEnName.innerText = "Lemon Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[4].src;
    };

};

// 點擊小圖，改變標題和大圖

function changeImg(e) {

    bigImg.src = e.target.src;

    for (let i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = "";
        labels[i].style.color = "#f3f3f3";
    };


    if (e.target == smallImgs[0]) {
        productName.innerText = "原味甜甜圈";
        productEnName.innerText = "Plain Donut";
        price.innerText = '35元';
        bigImg.src = smallImgs[0].src;
        labels[1].style.backgroundColor = "#F8C0C1";
        labels[1].style.color = "#1b1b1c";

    } else if (e.target == smallImgs[1]) {
        productName.innerText = "草莓甜甜圈";
        productEnName.innerText = "Strawberry Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[1].src;
        labels[2].style.backgroundColor = "#F8C0C1";
        labels[2].style.color = "#1b1b1c";

    } else if (e.target == smallImgs[2]) {
        productName.innerText = "抹茶甜甜圈";
        productEnName.innerText = "Matcha Donut";
        price.innerText = '45元';
        bigImg.src = smallImgs[2].src;
        labels[3].style.backgroundColor = "#F8C0C1";
        labels[3].style.color = "#1b1b1c";

    } else if (e.target == smallImgs[3]) {
        productName.innerText = "巧克力甜甜圈";
        productEnName.innerText = "Chocolate Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[3].src;
        labels[4].style.backgroundColor = "#F8C0C1";
        labels[4].style.color = "#1b1b1c";

    } else if (e.target == smallImgs[4]) {
        productName.innerText = "檸檬甜甜圈";
        productEnName.innerText = "Lemon Donut";
        price.innerText = '40元';
        bigImg.src = smallImgs[4].src;
        labels[5].style.backgroundColor = "#F8C0C1";
        labels[5].style.color = "#1b1b1c";
    };

};


// 數量加減

let btnminus = document.getElementById('btnminus');
let btnplus = document.getElementById('btnplus');
let amount = document.getElementById('amount');
let total = parseInt(amount.innerText);

btnminus.onclick = minus;
btnplus.onclick = plus;

function minus() {
    if (total > 1) {
        total--;
        amount.innerText = total;
    };
};

function plus() {
    total++;
    amount.innerText = total;
};