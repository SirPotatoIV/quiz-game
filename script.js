function quizGame(){
    console.log("script.js linked.");
    // Define variables to store questions, time, score, all-time score
    // -- See questions.js for variable being used to store the questions
    let time = 0;
    const defaultTime = 60;
    const score = 0;
    const highScores = [];

    // Create button to start game
    // -- This was done with HTML. No need to dynamically generate ... currently

    // Start a timer and display countdown
    function timer() {
        time = defaultTime;
        mainInterval = setInterval(function(){
            time = time - 1;

            console.log("timer test:"+ time);
        }, 1000);

    }
    timer();
    // Create function to generate html for questions
    // Get user answer
    // Check if user answer is correct
    // Decide if time should be subtracted
    // Update variable to store if answer was right or wrong
    // Calculate final score
    // Display Score
    // Collect User Initials and store score
    // Make code restart
}
quizGame()