# jfsf-precourse-zombies

The ZOMBIES method will help you to figure out what tests to code first. In this assignment, we will focus mainly on ZOM, and less on BIES.

The acronym ZOMBIES stands for:

    Z – Zero
    O – One
    M – Many (or More complex)
    B – Boundary Behaviors
    I – Interface definition
    E – Exercise Exceptional behavior
    S – Simple Scenarios, Simple Solutions

## Assignment instructions

To help you remember the acronym, we will design our code around the idea of a room of zombies.

The size of the room determines how many zombies can comfortably live together. When there's too many zombies in the room, the zombies will create space by eating up the oldest zombie in the room.

Your goal is to implement all the tests in `zombies.test.ts`, focusing on the first test, and then moving on to the next test.

You can refactor (tidy up) your code at any point in time, but try to do it after you have passed a new test. Basically, do one thing at a time in micro-steps.

Run `npm run watch-test` while developing. The script will rerun when you save your files.

## References

This material is based on this article: http://blog.wingman-sw.com/tdd-guided-by-zombies.
