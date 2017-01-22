# node-readline-ticket-checker

This is a little single-file app, that I wrote for fun to tinker with Node.js. It is a solution for a task that I found randomly on the webs.

# The task

A party. The gueasts were divided in couples and each couple was given two tickets with the same number. They were also told that if their couple fails to attend they will be kicked out from the party, when all the arrived geusts would be registered.

Now you stand at the entrance and face a challenge: all the arrived guests are waiting in line to get in and you need to check their tickets and find out those who came without their couple(s). Since the organizer's database is down you also have to work around the fact that you don't know the numbers of the tickets that were given to the guests.

# My Node.js solution

I wrote a simple NodeJS app that uses native Node module Readline to handle command-line input/output.

So, the sequence of actions is the following:
1. `$ node app.js`
2. type in a ticket number
3. register as many guests as needed
4. type `check` to see the people without a couple
