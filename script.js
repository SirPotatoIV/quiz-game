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
    // function startGame() {
    //     console.log("startGame test");
    // }
    // startGame();

    let rowCount = 2;
    let textToDispaly = "Test";
    let containerEl = document.createElement("div");
    containerEl.setAttribute("class", "container");
    function createRow(rowTotal) {
        console.log("createRow test")
        
        const rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row")
        // console.log(rowEl);
        containerEl.append(rowEl);
        
        const colEl = document.createElement("div");
        colEl.setAttribute("class", "col");
        // console.log(ColEl);
        rowEl.append(colEl);

        const textEl = document.createElement("div");
        textEl.innerHTML = textToDispaly;
        colEl.append(textEl);
        
        document.body.append(containerEl);
        
    }
    createRow(rowCount, textToDispaly);
    //  -- to generate html for questions
    //  -- -- Following insctructors example to start building function
    //  -- -- currentQuestion should be moved up to other variables at some point.
    let currentQuestion = 0;
    function renderQuestion() {
        console.log("renderQuestion test")
        // Creates the main container for displaying the question
        const questionContainerEl = document.createElement("div");
        questionContainerEl.setAttribute("class", "container");
        // console.log(questionContainerEl);
        
        const questionRowEl = document.createElement("div");
        questionRowEl.setAttribute("class", "row")
        // console.log(questionRowEl);
        questionContainerEl.append(questionRowEl);
        
        const questionColEl = document.createElement("div");
        questionColEl.setAttribute("class", "col");
        // console.log(questionColEl);
        // console.log(questionContainerEl);
        questionRowEl.append(questionColEl);
        
        const questionEl = document.createElement("h3");
        questionEl.innerHTML = questions[currentQuestion].title;
        questionColEl.append(questionEl);
        // console.log(questionEl);
        
        const answerRowEl = document.createElement("div");
        answerRowEl.setAttribute("class", "row")
        // console.log(answerRowEl);
        questionContainerEl.append(answerRowEl);
        
        const answerColEl = document.createElement("div");
        answerColEl.setAttribute("class", "col");
        // console.log(answerColEl);
        // console.log(questionContainerEl);
        answerRowEl.append(answerColEl);
        
        let answerEl = "";
        
        // Create a lopp to add a button for every question
        // Must have let i=0; instead of i=0; if I want event listner to be able to use i.
        for(let i=0; i < questions[currentQuestion].choices.length; i++){
            // console.log(questions[currentQuestion].choices[i]);
            answerEl = document.createElement("button");
            answerEl.setAttribute("class", "btn btn-secondary");
            answerEl.innerHTML = questions[currentQuestion].choices[i];
            answerColEl.append(answerEl);

            answerEl.addEventListener("click", function(){
                console.log(questions[currentQuestion].choices[i]+" clicked");
                questions[currentQuestion].userAnswer = questions[currentQuestion].choices[i];
                console.log("User Answer: "+questions[currentQuestion].userAnswer);
                answerCheck();
            })
            // console.log(answerEl);
        }
        
        

        // Used to append container, which is all of the html, to the body
        document.body.append(questionContainerEl);
        
    }
    renderQuestion();
    // Get user answer
    // Check if user answer is correct
    function answerCheck () {
        // console.log("answerCheck test")
        if (questions[currentQuestion].answer === questions[currentQuestion].userAnswer)
        {
            console.log("User answered question correctly.");
            questions[currentQuestion].outcome = true;
            console.log(questions[currentQuestion].outcome);
            
        } else {
            console.log("User answered question incorrectly.");
            questions[currentQuestion].outcome = false;
            console.log(questions[currentQuestion].outcome);
        }
    }
    // answerCheck();
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