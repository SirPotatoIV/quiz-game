function quizGame(){
    console.log("script.js linked.");
    // Define variables to store questions, time, score, all-time score
    // -- See questions.js for variable being used to store the questions
    let time = 0;
    const defaultTime = 10;
    const score = 0;
    const highScores = [];
    const penaltyTime = 1;
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
        // Referenced instructors example for creating a timer.
        mainInterval = setInterval(function(){
            // Used to calculate the current time. The interval runs every second. Therefore, 1 second is subtracted every interation.
            subtractTime();
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
        console.log("startGame test");
    }
    startGame();

    //  -- to generate html for questions
    function renderQuestion() {
        console.log("renderQuestion test")
        // Creates the main container for displaying the question
        const questionContainerEl = document.createElement("div");
        questionContainerEl.setAttribute("class", "container");
        console.log(questionContainerEl);
        
        const questionRowEl = document.createElement("div");
        questionRowEl.setAttribute("class", "row")
        console.log(questionRowEl);
        questionContainerEl.append(questionRowEl);
        
        const questionColEl = document.createElement("div");
        questionColEl.setAttribute("class", "col");
        console.log(questionColEl);
        // console.log(questionContainerEl);
        questionRowEl.append(questionColEl);
        
        const questionEl = document.createElement("h1");
        questionEl.innerHTML = "Question";
        questionColEl.append(questionEl);
        console.log(questionEl);
        
        const answerRowEl = document.createElement("div");
        answerRowEl.setAttribute("class", "row")
        console.log(answerRowEl);
        questionContainerEl.append(answerRowEl);
        
        const answerColEl = document.createElement("div");
        answerColEl.setAttribute("class", "col");
        console.log(answerColEl);
        // console.log(questionContainerEl);
        answerRowEl.append(answerColEl);
        
        const answerEl = document.createElement("h1");
        answerEl.innerHTML = "Answer";
        answerColEl.append(answerEl);
        console.log(answerEl);
        

        
        // Used to append container, which is all of the html, to the body
        document.body.append(questionContainerEl);
        
    }
    renderQuestion();
    // Get user answer
    // Check if user answer is correct
    function answerCheck () {
        console.log("answerCheck test")
        if (questions[0].answer === questions[0].userAnswer)
        {
            console.log("User answered question correctly.");
        } else {
            console.log("User answered question incorrectly.");
        }
    }
    answerCheck();
    // Decide if time should be subtracted
    function subtractTime() {
        // console.log("subtractTime Test");
        // console.log(questions);
        if (questions[0].outcome) {
            // Nothing for now
        } else {
            console.log("User got question wrong. "+penaltyTime+" second(s) subracted from time.")
            // Subtracts
            time = time - penaltyTime;
        }
    }
    // subtractTime();

    // Update variable to store if answer was right or wrong
    // Calculate final score
    // Display Score
    // Collect User Initials and store score
    // Make code restart
}
quizGame()