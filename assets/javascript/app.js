// Variables

var counter = 0;
var timer = 60;
var correct = 0;
var incorrect = 0;
var lives = 5;

// Arrays and of questions.

questionsArr = ["In the Simpsons, what is this character's name?",
                "?2","?3","?4","?5","?6","?7","?8","?9","?10"];

// Arrays of answers.
answers = [
    {choice1:"Hobbs Moman",
    choice2: "Billy Crystal",
    choice3: "Moe Sislack",
    choice4: "Abe Simpson",
    correctAns:"1"
    }
];

// This sets up the decrementing of time, displaying of questions,incrementing of the counter,displaying of the timer and the resetting of the timer as well.

function minuteDecrement () {
    
    timer--;
    $("#timer").text(timer);
    $("#display-question").html(questionsArr[counter]);
    displayChoices ()
    
    
    if(timer === 0){
        counter++;
        lives--;
        timer=60;
    }
}


// Why are the choices printing out in fours?

function displayChoices (){
    
    $(".choice1").html("<button>" + answers[counter].choice1 + "</button>")
    $(".choice2").html("<button>" + answers[counter].choice2 + "</button>")
    $(".choice3").html("<button>" + answers[counter].choice3 + "</button>")
    $(".choice4").html("<button>" + answers[counter].choice4 + "</button>")

    $("button").on("click", function (event){
        var clickedButton = $(this).val();
        var turns = 2;
        

        // console.log(typeof clickedButton,typeof answers[0].correctAns );

        

        if (clickedButton === answers[counter].correctAns){
            counter++;
            correct++;
            timer=60;
            console.log("You win.");


        }else if (clickedButton !== answers[counter].correctAns && turns !== 0){ 
            incorrect++;
            turns--;
            console.log("You lose.")
        }else{}

        
        
    });

}

setInterval(minuteDecrement,1000);


