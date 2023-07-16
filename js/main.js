var p1=document.getElementById("theQuote")
var p2=document.getElementById("auther")
var bt=document.getElementById("bt")
 
var theQuote=[
"Be yourself; everyone else is already taken.",
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
"You only live once, but if you do it right, once is enough.",
"Be the change that you wish to see in the world.",
"It is better to be hated for what you are than to be loved for what you are not.",
"Good friends, good books, and a sleepy conscience: this is the ideal life.",
"As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
"We are all in the gutter, but some of us are looking at the stars",
"Life is what happens to us while we are making other plans.",
]
var theAuther=[
"Oscar Wilde",
"Albert Einstein",
"Dr. Seuss",
"Mae West",
"Mahatma Gandhi",
"Andre Gide",
"Mark Twain",
"John Green",
"Oscar Wilde",
"Allen Saunders"

]
      function change() {


if(theQuote.length==0){
  
    var theQuote2=[
        "Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "Be the change that you wish to see in the world.",
        "It is better to be hated for what you are than to be loved for what you are not.",
        "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
        "We are all in the gutter, but some of us are looking at the stars",
        "Life is what happens to us while we are making other plans.",
        ]
        var theAuther2=[
            "Oscar Wilde",
            "Albert Einstein",
            "Dr. Seuss",
            "Mae West",
            "Mahatma Gandhi",
            "Andre Gide",
            "Mark Twain",
            "John Green",
            "Oscar Wilde",
            "Allen Saunders"
        ]
        
        theQuote=theQuote2
        theAuther=theAuther2
        var x =Math.floor(Math.random()*theQuote.length);
        var y=theQuote.splice(x,1);
        var z=theAuther.splice(x,1);
       
        p1.innerHTML=y;
        p2.innerHTML=z;
        
        // console.log("1" +y)
        // console.log("if")
        // console.log("2" +theQuote2)
    }
        else{
    
    var x =Math.floor(Math.random()*theQuote.length);
    var y=theQuote.splice(x,1);
    var z=theAuther.splice(x,1);
    p1.innerHTML=y;
    p2.innerHTML=z;
    
    // console.log(y)
    // console.log("else")
    
    
}
}
//         var used=x; //4 
  
// //                  3
//         if(x==y&&x<theQuote.length - 1){
//             x++
//             var q;
//             q=theQuote[x];
//             p1.innerHTML=q;
//             var a;
//             a=theAuther[x]
//             p2.innerHTML=a;
//             used=x
//             console.log(x)
//             console.log(used)
//             console.log(y)
//                     }
//         if (x==y&&x<theQuote.length ) {
//             x--
//             var q;
//             q=theQuote[x];
//             p1.innerHTML=q;
//             var a;
//             a=theAuther[x]
//             p2.innerHTML=a;
//             used=x
//             console.log(x)
//             console.log(used)
//             console.log(y)
//         } 
//                     else
//                     {
//         var q;
//         q=theQuote[x];
//         p1.innerHTML=q;
        
//         var a;
//         a=theAuther[x]
//         p2.innerHTML=a;
//         console.log(x)
//         console.log(used)
//         console.log(y)
        
//     }
//     y=used//4













