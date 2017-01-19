# node-readline-ticket-checker

This is a little single-file app, that I wrote for fun to tinker with NodeJS. It is a solution for a task that I found randomly on the webs.

# The task
A party. The gueasts were divided in couples and each couple was given two tickets with the same number. They were also told that if their couple fails to attend they will be kicked out from the party, when all the arrived geusts would be registered.
<br><br>Now you stand at the entrance and face a challenge: all the arrived guests are waiting in line to get in and you need to check their tickets and find out those who came without their couple(s).

# My NodeJS solution
I wrote a simple NodeJS app that uses native Node module Readline to handle command-line input/output.
<br>So, the sequence of actions is the following:
<br>1. `$ node app.js`
<br>2. type in a ticket number
<br>3. register as many guests as needed
<br>4. type `check` to see the person without a couple
