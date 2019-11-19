function quizGame(){
    console.log("script.js linked.");
    // Define variables to store questions, time, score, all-time score
    // -- See questions.js for variable being used to store the questions
    let time = 0;
    const defaultTime = 10;
    const score = 0;
    const highScores = [];
    timeDisplayEl = document.getElementById("time-display")
    // console.log(timeDisplayEl);


    // Create button to start game
    // -- This was done with HTML. No need to dynamically generate ... currently
    document.getElementById("start-btn").addEventListener("click", function(){
        console.log("Button Clicked");
        timer();
    });
    // Start a timer and display countdown
    function timer() {
        time = defaultTime;
        // Creates an interval that runs every 1000 ms or 1 second.
        mainInterval = setInterval(function(){
            // Used to calculate the current time. The interval runs every second. Therefore, 1 second is subtracted every interation.
            time = time - 1;

            console.log("timer test:"+ time);
            // Changes the inner html of the element that displays the time remaining ever interval, ie every second.
            timeDisplayEl.innerHTML = time;

            if (time <= 0)
            clearInterval(mainInterval);

        }, 1000);

    }
    // timer();
    // Create function to start the game 
    //  -- to start the timer
    function startGame() {
        console.log("startGame Test");
    }
    startGame();
    //  -- to generate html for questions
    // Get user answer
    // Check if user answer is correct
    // Decide if time should be subtracted
    console.log(questions);
    function timeSubtract() {
        console.log("timeSubtract Test");
        console.log(questions);
        // if (questions[0].outcome) {
        //     // Nothing for now
        // } else {
        //     console.log("User got question wrong. 1 second subracted from time.")
        //     time = time - 1;
        // }
    }
    timeSubtract();

    // Update variable to store if answer was right or wrong
    // Calculate final score
    // Display Score
    // Collect User Initials and store score
    // Make code restart
}
quizGame()