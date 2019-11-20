# The Coding Quiz

## Description 
This repository is used to create a game to quiz the user about Javascript. This is the prompt for the fourth homework assignment in my web development boot camp. The purpose os this assignment is to explore and prove our knowledge of several Javascript concepts. When the user answers a question correctly, the current time remaining is the score for that question. If the user gets the question wrong, the remaining time is reduced by 15 seconds. The quiz ends if the user answers all the questions or if the time runs out. The user is prompted to input their initials so that their score can be stored on the highscore board. The highscore board is stored in local memory. This project was coded so that the questions, number of questions, choices, number of choices, and the correct answer to each question can be updated by simply changing the information in the array questions. Each quesiton prompt is dynamically generated.

## Images
Starting View:

![Starting View](./assets/start-view.png)

Password Generation Example:

![Password Generation Example](./assets/password-example.png)

Error Message Example:

![Error Message Example](./assets/error-message.png)

## Installation 
If all files are kept in a single folder a web browser should be able to run the project and you have an internet connection.

## Usage 
The usage of this is just for me to practice HTML, CSS, and javascript. It could be used to create a quiz.

## Credits 
I created this code based on the homework prompt created by Triology Education Services. Certain pieces of code I used online resources for help. In addition, several portions of code were created based on in class activities. I have included citations in the form of comments throughout the html and javascript.

## Contributing 
I was the only one to work on this project, but of course I had help from my instructor, TA's, and classmates.

## Challenges
Early on I tried creating an array that included the names of each character array. I was hoping I could use this array to select each array at random. Turns out you can't use strings to as variable names due to the way Javascrit works. I think this could have been possible by creating an object that contained the arrays, but since we haven't done a deep dive on objects yet, I decided to figure out how to complete the assignment without using functionality of objects. I quickly realized my strategy included copy pasting my code multiple times to achieve my end result. I am well aware that my code is not even close to D.R.Y. and a combonation of functions and using objects could probably make it more dry, but I ran out of time to simplify the code.

## Live site: 
https://sirpotatoiv.github.io/quiz-game/

## License
[MIT](https://choosealicense.com/licenses/mit/)
