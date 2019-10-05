


$(document).ready(function(){
    clearInterval();
    $(".display").fadeIn('10000');
    $("h1").fadeIn('10000');
    $(".choices").fadeIn('10000');
    $("#display-image").fadeIn('10000');

    });

// Variables

var counter = 0;
var timer = 60;
var correct = 0;
var incorrect = 0;
var lives = 5;
var paused = false;
var score = 0;
var chances = 2;
var loserTimer=3;

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
    {choice1:"Hans Moleman",
    choice2: "Billy Crystal",
    choice3: "Moe Sislack",
    choice4: "Abe Simpson",
    correctAns:"1",
    img:"/assets/images/HansMoleman.jpg",
    animated:"/assets/images/molemanfootball.gif",
    alt: "Image of Hans Moleman",
    blackBox:"/assets/images/thumbsdown.gif"
                            },
    {choice1:"Max Stone",
    choice2: "Armin Temzarian",
    choice3: "Armen Hammer",
    choice4: "Benicio del Toro",
    correctAns:"2",
    img:"/assets/images/skinner.jpg",
    animated:"/assets/images/skinner.gif",
    alt: "Bad ass Principal Skinner",
    blackBox:"/assets/images/thumbsdown.gif"
                            },
    {choice1:"123 Fake Street",
    choice2: "Evergreen Avenue",
    choice3: "1600 Pennsylvania Avenue",
    choice4: "742 Evergreen Terrace",
    correctAns:"4",
    img:"/assets/images/license.png",
    animated:"/assets/images/dancinghomer.gif",
    alt: "Proof of Homer's address.",
    blackBox:"/assets/images/thumbsdown.gif"
                            },
    {choice1:"Hobo",
    choice2: "Fomo",
    choice3: "Bobo",
    choice4: "Toto",
    correctAns:"3",
    img:"/assets/images/bobo.jpg",
    animated:"/assets/images/giphy.gif",
    alt: "Mr.Burns as a kid.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    {choice1:"Kill Maggy Simpson.",
    choice2: "Release the hounds.",
    choice3: "Create a machine to block out the sun.",
    choice4: "Marry Smithers.",
    correctAns:"3",
    img:"/assets/images/Mr.Burns1.jpg",
    animated:"/assets/images/burnsblocksun.gif",
    alt: "Maniacal Mr. Burns picture.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    {choice1:"SideShow Mel",
    choice2: "SideShow Bob",
    choice3: "SideShow Tod",
    choice4: "SideShow Phil",
    correctAns:"2",
    img:"/assets/images/sideshowandbart.jpg",
    animated:"/assets/images/sideshowbob.gif",
    alt: "Sideshow Bob gif getting hit by rakes.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    {choice1:"BleedingGums Murphy",
    choice2: "Kenny G",
    choice3: "BB King",
    choice4: "Sunny Liston",
    correctAns:"1",
    img:"/assets/images/bleedinggumsmurphy.png",
    animated:"/assets/images/th.gif",
    alt: "Image of bleeding gums murphy.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    {choice1:"Hi Doctor Nick!",
    choice2: "Hi Doctor Hibert",
    choice3: "Hi Doctor Marvin Monroe",
    choice4: "Hi Doctor Sebi",
    correctAns:"1",
    img:"/assets/images/docnick.png",
    animated:"/assets/images/dancingnick.gif",
    alt: "Doctor Nick.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    {choice1:"Try to get with Milhouse's mom.",
    choice2: "Surgery",
    choice3: "Get angry.",
    choice4: "Giggle between words.",
    correctAns:"4",
    img:"/assets/images/dochibbert.jpg",
    animated:"/assets/images/hibbert.gif",
    alt: "Doctor hibbert giggling.",
    blackBox:"/assets/images/thumbsdown.gif"

                             },
    {choice1:"The Stone Throwers",
    choice2: "The Rollling Stoners",
    choice3: "The Stone Cutters",
    choice4: "The Stone Masons",
    correctAns:"3",
    img:"/assets/images/stoneCutters.jpg",
    animated:"/assets/images/ghostundies.gif",
    alt: "image of stonecutters.",
    blackBox:"/assets/images/thumbsdown.gif"
                             },
    
];






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

                // This function generates the images/gifs on the page.
                function imageGifDisplay(countVal){
                    var img = answers[countVal].img;
                    var alt = answers[countVal].alt;
                    var animate = answers[countVal].animated;
                    var blackBox = answers[countVal].blackBox;
                    
                    var imageClass= "image-inserts"

                    // Creates image div with attributes still,animated, and losing animation (thumbs down gif).
                    
                    $("#display-image").attr("src", img );
                    $("#display-image").attr("alt", alt );
                    $("#display-image").attr("data", animate);
                    $("#display-image").attr("negative", blackBox)
                    
                    

                    if (chances === 0){
                    // $("#display-image").attr("src"," /assets/images/thumbs-down.jpg />");
                    // $("#display-image").attr("alt", "thumbs down.")
                    
                        
                    }
                }

                    // This function times the gifs on the page.
                    function loseIncrement (){
                    loserTimer--;
                    if(loserTimer === 0){
                    
                       console.log(loserTimer)
                        

                    }
                    console.log(loserTimer)
                    }

                        function pageGenerator (){
        
                            $("#timer").text("Time:"+timer);
                            $("#lives").text("Lives:"+lives)
                            $("#score").text("Score:"+score)
                            displayChoices(counter);
                            displayQuestions(counter);
                            imageGifDisplay(counter);
                        }

                        // This is the timer function.
                            function minuteDecrement () {
                            pageGenerator ();

                                if (!paused){
                                    timer--;
                                if(timer < 0){
                                    counter++;
                                    lives--;
                                    timer = 60;
                                }   
                                else if(lives === 0){
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
 

// This click watches to see which choice is clicked or if the pause is initiated.

    $("button").on("click", function (event){
        event.preventDefault();
        var clickedButton = $(this).val();
        var animate = $("#display-image").attr("data")
        var thumbsDown = $("#display-image").attr("negative");
        var correctAnswer = answers[counter].correctAns;
        
        
        
        if (clickedButton === "false" ){
            paused=true;
        $(".pause").attr("value","true")  
        }
        else if(clickedButton === "true"){
            paused=false;
            $(".pause").attr("value","false")
        }
        else if(clickedButton === answers[counter].correctAns){
            setTimeout(pageGenerator,3120);
            
            $("#display-image").attr("src", animate )
            score++;
            reset();
            // minuteDecrement ()
            console.log(animate)
        }
        else if (clickedButton !== answers[counter].correctAns){
            setTimeout(pageGenerator,3120);
            $("#display-image").attr("src",thumbsDown);
            // $("#display-image").attr("alt", "thumbs down.")
            reset();
            lives--;
            // minuteDecrement ();
            

           

            
            
        }
        // else if(chances === 0){
        //     lives--;
        //     reset();
        //     minuteDecrement ()
            
        //     console.log(chances)
            
        // }

console.log(clickedButton,correctAnswer);


    
        
    });

    
// This function makes sure that after 60 seconds or an answer is chosen or time is up, the next question and the next set of choices are displayed for the user.
        
        
        

        

        
   
// These are the calls to the functions to set the timer, display the question, display the choices, and the answer check function.


// setInterval(minuteDecrement, 1000)
minuteDecrement();


// answerCheck ()



// You can consider resetting the page with a reset button.
// document.getElementById("myForm").reset();







