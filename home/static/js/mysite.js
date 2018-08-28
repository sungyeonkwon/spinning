// connection test 
console.log("hello.");

// menu text change
function changeText(text, item)
    {
        var item = document.getElementById(item);
//        item.textContent = "";
        item.textContent = text;
    }
function changeback(text, item)
    {     
        var item = document.getElementById(item);
//        item.textContent = "";
        item.textContent = text;
    }



// first grab the example text
// second grab the word text + div element (initially hidden)

// var wordBox = 
// var word = 
var example = document.getElementsByClassName("word_link");

var flag = [];
function wordShow(event){
  for (var i = 0; i < example.length; i++) {

    flag[i] = 0;
    example[i].addEventListener("click", function( event ) {
    console.log("this is working");

    });
  };
};

wordShow();

// make a function: 

// iterate over word, wordbox, example sentence
// function 1: visibility = show
// function 2: visibility = hidden

// for all the elements, attach the eventlistener
// EVENT:
// example[i] + hover ->> show wordbox[i], word[i]
// example[i] + click ->> 
//    show wordbox[i], word[i]

// example[i] + click ->> show wordbox[i], word[i]

// 
//  when mouse over: display show (z index consideration)
//  when mouse out: display hidden
// when clicked: show
// when clicked again: hidden



// var comments = document.getElementsByClassName('button');
// var numComments = comments.length;

// function showComment(e) {
//   var place = document.getElementById('textfield');
//   var commentBox = document.createElement('textarea');
//   place.appendChild(commentBox);
//   for (var i = 0; i < numComments; i++) {
//     comments[i].removeEventListener('click', showComment, false);
//   }
// }

// for (var i = 0; i < numComments; i++) {
//   comments[i].addEventListener('click', showComment, false);
// }

