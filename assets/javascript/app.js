// Variables

var counter = 0;
var timer = 60;
var correct = 0;
var incorrect = 0;
var lives = 5;
var paused = false;
var score = 0;
var chances = 2;

// Array of questions.

questionsArr = ["In the Simpsons, what is this character's name?",
                "What is Principal Skinner's real name?",
                "What is the Simpson's address?",
                "What is the name of Mr. Burn's childhood bear?",
                "How did Mr. Burns almost destroy the town of Springfield?",
                "Who wanted to kill Bart Simpson for years?",
                "Who is Lisa Simpson's favorite saxonphone player?",
                "Respond to this line, 'Hi everybody...' ",
                "What does Dr. Hibert seem to do almost every 5 seconds?",
                "What was the secret organization Homer joined and then was found to be the chosen one?"];

// Arrays of answers.
answers = [
    {choice1:"Hobbs Moman",
    choice2: "Billy Crystal",
    choice3: "Moe Sislack",
    choice4: "Abe Simpson",
    correctAns:"1"
                            },
    {choice1:"Max Stone",
    choice2: "Armin Temzarian",
    choice3: "Armen Hammer",
    choice4: "Benicio del Toro",
    correctAns:"2"
                            },
    {choice1:"123 Fake Street",
    choice2: "Evergreen Avenue",
    choice3: "1600 Pennsylvania Avenue",
    choice4: "742 Evergreen Terrace",
    correctAns:"4"
                            },
    {choice1:"Hobo",
    choice2: "Fomo",
    choice3: "Bobo",
    choice4: "Toto",
    correctAns:"3"
                             },
    {choice1:"Kill Maggy Simpson.",
    choice2: "Release the hounds.",
    choice3: "Create a machine to block out the sun.",
    choice4: "Marry Smithers.",
    correctAns:"3"
                             },
    {choice1:"SideShow Mel",
    choice2: "SideShow Bob",
    choice3: "SideShow Tod",
    choice4: "SideShow Phil",
    correctAns:"2"
                             },
    {choice1:"BleedingGums Murphy",
    choice2: "Kenny G",
    choice3: "BB King",
    choice4: "Sunny Liston",
    correctAns:"1"
                             },
    {choice1:"Hi Doctor Nick!",
    choice2: "Hi Doctor Hibert",
    choice3: "Hi Doctor Marvin Monroe",
    choice4: "Hi Doctor Sebi",
    correctAns:"1"
                             },
    {choice1:"Try to get with Milhouse's mom.",
    choice2: "Surgery",
    choice3: "Get angry.",
    choice4: "Giggle between words.",
    correctAns:"4"
                             },
    {choice1:"The Stone Throwers",
    choice2: "The Rollling Stoners",
    choice3: "The Stone Cutters",
    choice4: "The Stone Masons",
    correctAns:"3"
                             },
    
];



// This is the timer function.
function minuteDecrement () {
    $("#timer").text("Time:"+timer);
    $("#lives").text("Lives:"+lives)
    $("#score").text("Score:"+score)
    displayChoices(counter);
    displayQuestions(counter);
    
    if (!paused){
    timer--;
    

    if(timer< 0){
        counter++;
        lives--;
        timer = 60;
        console.log("Counter"+counter,"lives"+lives)
    }else if(lives === 0){
        setTimeout(delay,1000)
        function delay (){
            counter=0;
            lives=5;
            timer=60;
        alert("You have lost all your lives. Game Over.");
        }
    }
}
}

// These functions consist of the pause button and the display of both the questions and the choices.

function pauseButton (val){
    
    if (val === "false" ){
        paused=true;
    $(".pause").attr("value","true")
        
        
    }else if(val === "true"){
        paused=false;
        $(".pause").attr("value","false")
    }
    



}

    function displayChoices (countVal){
    
    $(".choice1").html("<button>" + answers[countVal].choice1 + "</button>")
    $(".choice2").html("<button>" + answers[countVal].choice2 + "</button>")
    $(".choice3").html("<button>" + answers[countVal].choice3 + "</button>")
    $(".choice4").html("<button>" + answers[countVal].choice4 + "</button>")
    
    

    }

        function displayQuestions (countVal) {
    var question = questionsArr[countVal];
    $("#display-question").text(question);

        }

            function reset (){
                counter++;
                timer=60;
                chances = 2

            }
 

// This click watches to see which choice is clicked or if the pause is initiated.

    $("button").on("click", function (event){
        event.preventDefault();
        var clickedButton = $(this).val();
        
        
        if (clickedButton === "false" ){
            paused=true;
        $(".pause").attr("value","true")  
        }
        else if(clickedButton === "true"){
            paused=false;
            $(".pause").attr("value","false")
        }
        else if(clickedButton === answers[counter].correctAns){
            console.log("This work");
            score++;
            reset();
            minuteDecrement ()
        }
        else if (clickedButton !== answers[counter].correctAns){
            chances--
            console.log(chances)

            
            
        }
        else if(chances === 0){
            lives--;
            reset();
            minuteDecrement ()
            
            console.log(chances)
            
        }

// This section passes the clicks to a function to be evaluated.


    
        
    });

    
// This function makes sure that after 60 seconds or an answer is chosen or time is up, the next question and the next set of choices are displayed for the user.
        
        
        

        
        
        
   
// These are the calls to the functions to set the timer, display the question, display the choices, and the answer check function.


setInterval(minuteDecrement, 1000)
minuteDecrement();


// answerCheck ()



// You can consider resetting the page with a reset button.
// document.getElementById("myForm").reset();







