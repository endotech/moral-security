function openTab(tabId) {
    // タブコンテンツをすべて非表示にする
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    // トップページを非表示にする
    document.getElementById('top-page').style.display = 'none';
    // 指定したタブを表示する
    document.getElementById(tabId).style.display = 'block';

    // スライドインデックスを初期化
    slideIndex[tabId] = 1;
    showSlide(slideIndex[tabId], tabId);
}

function closeTab() {
    // タブコンテンツをすべて非表示にする
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    // トップページを表示する
    document.getElementById('top-page').style.display = 'block';
}

// スライドのインデックスを保持するオブジェクト
var slideIndex = {
    'lesson1': 1,
    'lesson2': 1,
    'lesson3': 1,
    'lesson4': 1
};

// 各授業のスライド総数を設定するオブジェクト
var totalSlides = {
    'lesson1': 17,
    'lesson2': 7,
    'lesson3': 7,
    'lesson4': 12
};

// スライドを変更する関数
function changeSlide(n, lessonId) {
    showSlide(slideIndex[lessonId] += n, lessonId);
}

// スライドを表示する関数
function showSlide(n, lessonId) {
    var slideElement = document.getElementById(lessonId + '-slide');
    var total = totalSlides[lessonId];

    if (n > total) {
        slideIndex[lessonId] = 1;
    }
    if (n < 1) {
        slideIndex[lessonId] = total;
    }

    // スライド番号の計算
    var slideNumber;
    if (lessonId === 'lesson1') {
        slideNumber = slideIndex[lessonId];
    } else if (lessonId === 'lesson2') {
        slideNumber = slideIndex[lessonId] + 17; // スライド18～24
    } else if (lessonId === 'lesson3') {
        slideNumber = slideIndex[lessonId] + 24; // スライド25～31
    } else if (lessonId === 'lesson4') {
        slideNumber = slideIndex[lessonId] + 31; // スライド32～43
    }

    // 画像のパスを更新
    slideElement.src = 'image/スライド' + slideNumber + '.png';
    slideElement.alt = 'スライド' + slideNumber;
}
