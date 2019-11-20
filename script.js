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
                // renderEndGame();
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
            time=0;
            renderEndGame();
        }   
    }
    // switchQuestion();
    // Calculate final score
    function calcFinalScore() {
        let finalScore = 0;
        for(let i = 0; i < questions.length; i++){
            if(questions[i].outcome){
                finalScore++;
            }
            else {
                // Nothing
            }
        }
        return finalScore; 
    }
    // Display Score
    // Collect User Initials and store score
    // Make code restart
    function renderEndGame() {
        // console.log("renderEndGame test");
        
        containerEl.innerHTML = "";
        
        // Used to  create an element to display to user that the game is over
        const endGameMessageEl = document.createElement('h2');
        endGameMessageEl.innerText = "All done!";
        
        // Used to create an element to display the user's score
        const userScoreMessageEl = document.createElement('h4');
        userScoreMessageEl.innerHTML = "Your score was: "+ calcFinalScore();
        endGameMessageEl.append(userScoreMessageEl);
        
        // Used to request the user to input their initials to store their score.
        const initialMessageEl = document.createElement('div');
        initialMessageEl.setAttribute('class', 'user-input');
        initialMessageEl.innerHTML = "Enter your intials: <input type='text' id='initial-input'></input>"
        endGameMessageEl.append(initialMessageEl);
        
        // Used to create a button to trigger adding the users high score and intials to the high score board
        const addHighScoreBtnEl = document.createElement('button');
        addHighScoreBtnEl.setAttribute('class','btn btn-success');
        addHighScoreBtnEl.setAttribute('id', 'submit-btn');
        addHighScoreBtnEl.innerText = "Submit Highscore";
        endGameMessageEl.append(addHighScoreBtnEl);
        
        // Used to display all of the created elements on the page
        createRow(1, endGameMessageEl);

        addHighScoreBtnEl.addEventListener("click", function(){
            // took basis of code used to do local storage from instructor example.
            let highscores = [];
            if(localStorage.getItem('localHighscores')){
                highscores = localStorage.getItem('localHighscores');
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
                highscores = JSON.parse(highscores);
                console.log("if in highscorebtn occured", "highscores set to", localStorage.getItem('localHighscores'));
            }   else{
                console.log("else in highscorebtn occured");
                let highscores = [];
            }
            console.log("Highscores after if statement:", highscores);
            const userInitial = document.getElementById('initial-input').value;
            // console.log(userInitial);
            const userScore = calcFinalScore();
            console.log("highscores length", highscores.length)
            highscores[(highscores.length)] = {
                initial: userInitial,
                score: userScore
            }
            // Sorts highscores based on the best score in the array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
            highscores.sort(function(a, b) {
                return b.score - a.score;
            })
            console.log(highscores)
            
            // Got code for JSON.stringify at https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
            window.localStorage.setItem('localHighscores', JSON.stringify(highscores));
            
            // localStorage.setItem('localHighscores');
            handleHighscore(highscores);
        });
    }
    // renderEndGame();

    function handleHighscore(highscores) {

        if(highscores){
            // Do Nothing
            console.log('if in handleHighScore occurred');
        }   else{
            
            highscores = [];
        }

        // Clears all content from view
        document.body.innerHTML = "";
        console.log('handleHighscore test');
        
        // Creates container to display all the highscores
        const highscoreContainerEl = document.createElement('div');
        highscoreContainerEl.setAttribute('class','container');
        
        // Creates title for highscore page
        const highscoreTitleEl = document.createElement('h1');
        highscoreTitleEl.innerHTML = "Highscores";
        highscoreContainerEl.append(highscoreTitleEl);
        
        // Creates element for each highscore and appends them to the container.
        for (let i=0; i < highscores.length; i++){
            console.log(highscores, highscores.length)
            let highscoreDisplayEl = document.createElement('div');
            highscoreDisplayEl.innerText = (i+1)+". "+highscores[i].initial+"-"+highscores[i].score;
            console.log(highscoreDisplayEl);
            highscoreContainerEl.append(highscoreDisplayEl);
        }
        
        //Creates restart button
        restartBtnEl = document.createElement('button');
        restartBtnEl.setAttribute('class', 'btn btn-success');
        restartBtnEl.innerText = 'Restart Quiz';
        highscoreContainerEl.append(restartBtnEl);
        restartBtnEl.addEventListener('click', function(){
            document.location.reload()
        });
        //Creates clear highscores button
        clearScoresBtnEl = document.createElement('button');
        clearScoresBtnEl.setAttribute('class', 'btn btn-danger');
        clearScoresBtnEl.innerText = 'Clear Highscores';
        highscoreContainerEl.append(clearScoresBtnEl);
        clearScoresBtnEl.addEventListener('click', function(){
            // document.location.reload()
            console.log('clear highscores button clicked')
            window.localStorage.removeItem('localHighscores');
            handleHighscore();
        });
        // Appends highscore content to body so it is viewable.
        document.body.append(highscoreContainerEl);

    }
    // handleHighscore();
}
quizGame()