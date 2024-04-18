// Top Button
const topBtn = document.querySelector(".topBtn");
topBtn.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

// About Us 페이드인 효과
$().ready(function () {
    $('div.circle1').fadeIn(1000);
});
$().ready(function () {
    $('div.circle2').fadeIn(2000);
});
$().ready(function () {
    $('div.circle3').fadeIn(3000);
});

// Balance Game
function mouseenterHandler1() {document.getElementById("naeng").textContent="3 물냉 vs 비냉 3";}
function mouseleaveHandler1() {document.getElementById("naeng").textContent="물냉 vs 비냉";}

function mouseenterHandler2() {document.getElementById("tang").textContent="2 부먹 vs 찍먹 4";}
function mouseleaveHandler2() {document.getElementById("tang").textContent="부먹 vs 찍먹";}

function mouseenterHandler3() {document.getElementById("mint").textContent="3 민초 vs 반민초 3";}
function mouseleaveHandler3() {document.getElementById("mint").textContent="민초 vs 반민초";}

function mouseenterHandler4() {document.getElementById("drink").textContent="4 코카콜라 vs 펩시 2";}
function mouseleaveHandler4() {document.getElementById("drink").textContent="코카콜라 vs 펩시";}

function mouseenterHandler5() {document.getElementById("peach").textContent="4 물복 vs 딱복 2";}
function mouseleaveHandler5() {document.getElementById("peach").textContent="물복 vs 딱복";}

function mouseenterHandler6() {document.getElementById("fishbun").textContent="4 팥붕 vs 슈붕 2";}
function mouseleaveHandler6() {document.getElementById("fishbun").textContent="팥붕 vs 슈붕";}

function mouseenterHandler7() {document.getElementById("noodle").textContent="2 짜장 vs 짬뽕 4";}
function mouseleaveHandler7() {document.getElementById("noodle").textContent="짜장 vs 짬뽕";}

function mouseenterHandler8() {document.getElementById("coffee").textContent="1 뜨아 vs 아아 5";}
function mouseleaveHandler8() {document.getElementById("coffee").textContent="뜨아 vs 아아";}

function mouseenterHandler9() {document.getElementById("pig").textContent="3 삼겹살 vs 목살 3";}
function mouseleaveHandler9() {document.getElementById("pig").textContent="삼겹살 vs 목살";} 

// scroll animation

$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    let innerHeight = $(window).innerHeight();
    
    let profileY = $('.profile_title').offset().top + $('.profile_title').height();
    let profile = document.getElementById("container")
    
    if ((profileY - scrollTop) <= innerHeight){
        profile.className = "container profileAni"
    }

    // balance game
    let balanceY = $('.box_row1').offset().top + $('.box_row1').height();
    let balance = document.getElementById("balanceBox")
    
    if ((balanceY - scrollTop) <= innerHeight){
        balance.className = "box balanceAni"
    }
})