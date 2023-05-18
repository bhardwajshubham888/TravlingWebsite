let image = ['https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80', 'https://images.unsplash.com/photo-1619947494583-29fc109e01d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80', 'https://images.unsplash.com/photo-1523131082769-56577f690b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80', 'https://images.unsplash.com/photo-1636996627212-ce5d24bca63a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80', 'https://static.theprint.in/wp-content/uploads/2022/01/Udaipur.jpg'];


let n = image.length;
let flexContainer = document.getElementById('flex-container');
let leftBtn = document.getElementById('left-btn');
let rightBtn = document.getElementById('right-btn');
let containerWidth = 99;
let flexContainerWidth = n * containerWidth; 
flexContainer.style.width = flexContainerWidth;


for (let i = 0; i < n; i++) {
    let newImg = document.createElement('img');
    newImg.src = image[i];
    newImg.className = "div-img";
    flexContainer.appendChild(newImg);
}

let curr = 0;
leftBtn.addEventListener('click', () => {
    if (curr > 0) {
        curr--;
    } else {
        curr = n - 1;
    }
    ShowImg();
})

rightBtn.addEventListener('click', () => {
    if (curr < n - 1) {
        curr++;
    } else {
        curr = 0;
    }
    ShowImg();
})

function ShowImg() {

    let translateXDistance = -curr * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}








let second_image = ['https://plus.unsplash.com/premium_photo-1682096076845-f1e0a3f84fac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80', 'https://plus.unsplash.com/premium_photo-1682089821031-05d132d2be0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1527075240784-552cddfbb143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80', 'https://plus.unsplash.com/premium_photo-1682096083877-7a5f78b1ab6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80','https://images.unsplash.com/photo-1551757891-24a8dabd2708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'];




let second_n = image.length;
let second_flexContainer = document.getElementById('second-flex-container');
let second_leftBtn = document.getElementById('second-left-btn');
let second_rightBtn = document.getElementById('second-right-btn');
let second_containerWidth = 50;
let second_flexContainerWidth = second_n * second_containerWidth; 
second_flexContainer.style.width = second_flexContainerWidth;


for (let i = 0; i < second_n; i++) {
    let second_newImg = document.createElement('img');
    second_newImg.src = second_image[i];
    second_newImg.className = "second-div-img";
    second_flexContainer.appendChild(second_newImg);
}

let second_curr = 0;
second_leftBtn.addEventListener('click', () => {
    if (second_curr > 0) {
        second_curr--;
    } else {
        second_curr = second_n - 1;
    }
    second_ShowImg();
})

second_rightBtn.addEventListener('click', () => {
    if (second_curr < second_n - 1) {
        second_curr++;
    } else {
        second_curr = 0;
    }
    second_ShowImg();
})

function second_ShowImg() {

    let second_translateXDistance = -second_curr * second_containerWidth;
    second_flexContainer.style.transform = `translateX(${second_translateXDistance}vw)`
}
























