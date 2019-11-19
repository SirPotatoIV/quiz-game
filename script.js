function quizGame(){
    console.log("script.js linked.");
    // Define variables to store questions, time, score, all-time score
    // -- See questions.js for variable being used to store the questions
    let time = 0;
    const defaultTime = (15*questions.length);
    const score = 0;
    const highScores = [];
    const penaltyTime = 15;
    let currentQuestion = 0;
    timeDisplayEl = document.getElementById("time-display")
    // console.log(timeDisplayEl);


    // Create code to start the game.
    // -- This was done with HTML. No need to dynamically generate ... currently
    document.getElementById("start-btn").addEventListener("click", function(){
        console.log("Button Clicked");
        document.getElementById("main-container").innerHTML = "";
        currentQuestion = 0;
        renderQuestion();
        timer();
    });
    // Start a timer and display countdown
    function timer() {
        time = defaultTime;
        // Creates an interval that runs every 1000 ms or 1 second.
        // Referenced instructors example for creating a timer.
        mainInterval = setInterval(function(){
            // Used to calculate the current time. The interval runs every second. Therefore, 1 second is subtracted every interation.
            // subtractTime();
            time = time - 1;

            console.log("timer test:"+ time);
            // Changes the inner html of the element that displays the time remaining ever interval, ie every second.
            timeDisplayEl.innerHTML = time;

            if (time <= 0){
                // Causes mainInterval to end
                clearInterval(mainInterval);
                // Due to the time subtraction, sometimes the final time is less than 0. This causes the display to be 00 when the clock runs out.
                timeDisplayEl.innerHTML = "00";
                // Only used for testing.
                console.log("game over")
            }
        }, 1000);

    }
    // timer();

    // let rowCount = 2;
    // let textToDisplay = "Test";
    // let containerEl = document.createElement("div");
    // containerEl.setAttribute("class", "container");
    let containerEl = document.getElementById("main-container");
    // containerEl.setAttribute("class", "container");
    
    function createRow(rowTotal, content) {
        console.log("createRow test")
        
        for (let i = 0; i < rowTotal; i++){
            const rowEl = document.createElement("div");
            rowEl.setAttribute("class", "row")
            // console.log(rowEl);
            containerEl.append(rowEl);
            
            const colEl = document.createElement("div");
            colEl.setAttribute("class", "col");
            // console.log(ColEl);
            rowEl.append(colEl);

            colEl.append(content);
            
            document.body.append(containerEl);
        }
        
    }
    // createRow(rowCount, textToDisplay);
    //  -- to generate html for questions
    //  -- -- Following insctructors example to start building function
    //  -- -- currentQuestion should be moved up to other variables at some point.
    function renderQuestion() {
        // Used to clear start button at beginning and clear previous question;
        containerEl.innerHTML = "";
        console.log(containerEl);
        const questionEl = document.createElement("h3");
        questionEl.innerHTML = questions[currentQuestion].title;
        
        createRow(1, questionEl);

        let answerEl = "";
        
        // Create a lopp to add a button for every question
        // Must have let i=0; instead of i=0; if I want event listner to be able to use i.
        for(let i=0; i < questions[currentQuestion].choices.length; i++){
       
            answerEl = document.createElement("button");
            answerEl.setAttribute("class", "btn btn-secondary");
            answerEl.innerHTML = questions[currentQuestion].choices[i];
            createRow(1, answerEl)

            answerEl.addEventListener("click", function(){
                console.log(questions[currentQuestion].choices[i]+" clicked");
                questions[currentQuestion].userAnswer = questions[currentQuestion].choices[i];
                console.log("User Answer: "+questions[currentQuestion].userAnswer);
                answerCheck();
                switchQuestion();
            })
            // console.log(answerEl);
        }
        // Used to append container, which is all of the html, to the body
        document.body.append(containerEl);
    }
    // Get user answer
    // Check if user answer is correct
    function answerCheck () {
        // console.log("answerCheck test")
        // document.body.lastChild.lastChild.innerHTML = "";
        if (questions[currentQuestion].answer === questions[currentQuestion].userAnswer)
        {
            console.log("User answered question correctly.");
            questions[currentQuestion].outcome = true;
            console.log(questions[currentQuestion].outcome);
            document.getElementById("outcomeDisplay").innerHTML = "Correct!";
            
        } else {
            subtractTime()
            console.log("User answered question incorrectly.");
            questions[currentQuestion].outcome = false;
            console.log(questions[currentQuestion].outcome);
            document.getElementById("outcomeDisplay").innerHTML = "Wrong!";
        }
    }
    // answerCheck();
    // Decide if time should be subtracted
    function subtractTime() {
        // console.log("subtractTime Test");
        // console.log(questions);
        // if (questions[i].outcome) {
        //     // Nothing for now
        // } else {
            console.log("User got question wrong. "+penaltyTime+" second(s) subracted from time.")
            // Subtracts
            time = time - penaltyTime;
        // }
    }
    // subtractTime();

    // Update variable to store if answer was right or wrong
    // Change to next question
    function switchQuestion() {
        if(currentQuestion <= (questions.length-2)){
            currentQuestion = currentQuestion + 1;
            console.log(currentQuestion, questions.length)
            renderQuestion();
        } else {
            console.log("game over");
            // endgame();
        }   
    }
    // switchQuestion();
    // Calculate final score
    // Display Score
    // Collect User Initials and store score
    // Make code restart
}
quizGame()