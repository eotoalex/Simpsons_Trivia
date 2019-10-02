var counter = 0;
var timer = 60;
var correct = 0;
var incorrect = 0;
var lives = 5;
questionsArr = ["In the Simpsons, what is this character's name?",
                "?2","?3","?4","?5","?6","?7","?8","?9","?10"];
answers = [
    {choice1:"Hobbs Moman",
    choice2: "Billy Crystal",
    choice3: "Moe Sislack",
    choice4: "Abe Simpson",
    answer:"Hobbs Moman"}
];

// This sets up the decrementing of time, displaying of questions,incrementing of the counter,displaying of the timer and the resetting of the timer as well.

function minuteDecrement () {
    
    timer--;
    $("#timer").text(timer);
    $("#display-question").html(questionsArr[counter]);
    displayChoices ()
    
    if(timer === 0){
        counter++;
        
        $("#display-question").html(questionsArr[counter]);
        timer=60;
    }
}


// Why are the choices printing out in fours?

function displayChoices (){
    
    $(".choices").html("<button >"+answers[counter].choice1+"</button>")
    $(".choices").append("<button >" + answers[counter].choice2 + "</button>")
    $(".choices").append("<button >" + answers[counter].choice3 + "</button>")
    $(".choices").append("<button >" + answers[counter].choice4 + "</button>")

    $(".choices").on("click", function (event){
        var pressedKey = $(this).val();

        alert(pressedKey)
    });

}

setInterval(minuteDecrement,1000);


