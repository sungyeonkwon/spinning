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

}




