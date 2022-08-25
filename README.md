# Flashcards

## Abstract:
Are you looking for a way to spice up your study habits? This application allows you to quiz yourself with virtual, multiple-choice flashcards! Run in your terminal, it will display a question with some possible answers, and allow you to choose which answer you think is correct before giving you real-time feedback as to whether or not you’re right! Once you’ve completed the deck, you’ll be alerted of the percentage of correct answers you chose.

## Set-Up Instructions:
1. Fork [this](https://github.com/vfields/flashcards-starter) repository.
2. In the upper right hand corner of your forked repo, press the green 'code' drop-down button.
3. Copy the SSH URL.
4. Clone down your new, forked repo using this terminal command: <code>git clone url newNameYouWantItToHave</code>, where the <code>url</code> is the SSH URL you just copied, and the <code>newNameYouWantItToHave</code> is whatever you'd like this Flashcard application to be called on your computer.
5. Use the <code>cd</code> command to go into the cloned repository.
6. Once inside, use the <code>node index.js</code> command to open the application and follow the prompts, inputting the corresponding <code>number</code> of the answer choice you think is correct, and pressing <code>enter</code> to move on to the next question!

## Preview of App:
// gif of the game working

## Tech Used:
This object-oriented application utilizes JavaScript, Mocha, and Chai!

## Context:
This solo project was assigned during Turing’s first week of Module 2, where the <code>data.js</code> and <code>util.js</code> files, as well as the <code>Game</code> class methods necessary to connect said files, were provided; however, the unit-tests and creation of all other classes and class-to-class interactions were the responsibility of the student.

## Contributors:
Tori Fields:
[LinkedIn](https://www.linkedin.com/in/victoria-ashley-fields/) & [GitHub](https://github.com/vfields)

## Learning Goals:
While this project allowed for practicing ES6 syntax and writing reusable, SRP functions, the emphasis was on creating a robust testing suite using TDD.

## Wins + Challenges:

One of my biggest wins from this project was utilizing proper Mocha and Chai syntax entirely from scratch in my testing suite to implement TDD, which I refactored to include hooks to DRY the script further.

That said, this is the largest set of class-to-class interactions we’ve been exposed to yet and, while I was able to successfully piece together how to connect those classes, I did need to utilize quite a bit of console-logging to understand those connections, first!
