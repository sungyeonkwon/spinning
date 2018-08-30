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

// $(".word-hover-box");
// $(".span_word");
// $(".span_example");

var wordHoverBox = document.querySelectorAll(".word-hover-box");
var spanExample = document.querySelectorAll(".span_example");
var spanWord = document.querySelectorAll(".span_word");
var flag =[];
for (let i = 0; i < wordHoverBox.length; i++) {
    spanWord[i].style.visibility = "hidden";
    wordHoverBox[i].style.visibility = "hidden";
    flag.push(0);

    spanExample[i].addEventListener("mouseover", function(){ 
        spanExample[i].style.visibility = "hidden";
        wordHoverBox[i].style.visibility = "visible";
        spanWord[i].style.visibility = "visible";
        
    });

    // if flag=clicked : no mouseout
    // else flag=unclicked: yes mouseout

    spanExample[i].addEventListener("mouseout", function(){ 
        console.log(flag[i]);
        if (flag[i] !== 1){
        spanExample[i].style.visibility = "visible";
        wordHoverBox[i].style.visibility = "hidden";
        spanWord[i].style.visibility = "hidden";
        } else{
        spanExample[i].style.visibility = "hidden";
        wordHoverBox[i].style.visibility = "visible";
        spanWord[i].style.visibility = "visible";
        }
    });

    spanExample[i].addEventListener("click", function(){ 

        spanExample[i].style.visibility = "hidden";
        wordHoverBox[i].style.visibility = "visible";
        spanWord[i].style.visibility = "visible";
        console.log(flag[i] + spanExample[i]+ "clicked");
        flag[i] = 1;
        
    });

    wordHoverBox[i].addEventListener("click", function(){ 
        if (flag[i] == 1){
        spanExample[i].style.visibility = "visible";
        wordHoverBox[i].style.visibility = "hidden";
        spanWord[i].style.visibility = "hidden";
        console.log(flag[i] + spanExample[i]+ "clicked again");
        flag[i] = 0;
        }
        
    });    
    // spanExample[i].addEventListener("mouseover", function(){ 
    //     // if the example is there, show 
    //     if (spanExample[i].style.visibility !== "hidden"){
    //         spanExample[i].style.visibility = "hidden";
    //         wordHoverBox[i].style.visibility = "visible";
    //         spanWord[i].style.visibility = "visible";
    //     } 
    // });
}





// for (var i = 0; i < hoverBox.length; i++) {
//     console.log("this is working" + [i]);
//     console.log(hoverBox[i]);

//     hoverBox[i].addEventListener("click", function(){ 
//         alert("Hello World!" + i ); 
//     });
//     // wordHoverBox[i].addEventListener("click", function(event) {
//     //     console.log("this is working" + [i]);
//     //     // wordHoverBox[i].style.display = "none";
//     // });
// };




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

