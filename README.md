# TCXR Takehome for perspective FS Interns

## Installation
The following repository is an example React project. Install the project by downloading the project and using the following:
> npm install
run the project by using
> npm start

This project was created using CRA and react-router-dom. No other external libraries are needed complete this task.

## Overview
The aim of your task is to display a number of different pages for an administrator of a pre-school chain, **TCXR Cares**. We will be skipping all of the login pages and assume that this is an internal site accessiple within the TCXR Network only. The aim is to create reuseable pages and components. 

There will be no attatched backend to this project so you will need to use and modify the functions within [getTestData](src/testdata/getTestData.js) to get your data and return them to your component or pages in a useable format.

## Tasks
1. display all the students in a table in the page `api/allstudents`
2. display all the institutions in a table in the page `api/institutions`
3. display all students belonging to an institution 
    - these pages should be accessible from the `api/institution` page and not the nav bar
4. create a function that makes a fetch request to `/api/studentRoster`
    - This time we want to eventually display all of the student's information along with their class and instructor information. 
    You do not need to create a page for this task. 
    - Instead fill out [fetchStudentDat](src/testdata/gettestdata.js) , and create a data schema of how you would want the response from the api to be like.