TODO

Deliverables 1: 
    []intended application and why
        []inform community members of where people are not following current guidelines. 
    []Set of detailed screen-by-screen design layouts with annotations describing all UI/UX components and all data relevant to the screen.
        []Maybe map view? 
        []Drop pins?
            []Green - following 
            []Yellow - some what, some times. 
            []Red - Not at all, multiple people.
        []Google breakdown? Autofill? User starts typing address and pulls down. 
            []Marina researching
        []Breakdown by County? 
            []Area on application that shows current phase and whats required. 
                []API showing current phases across USA. 
                    []HEATHER researching
        []Database that breaksdown by Country Wide and State wide. 
            []Marina researching. 
        []A breakdown of roles by group member. 
        []Paul - Front end 
        []Heather - API for guidelines
        []Marina - Data by location/Map
        [X]Alexandra - Repo/Setup Server
    []A schedule for completion of various tasks
        []Paul - Saturday 11/7
        []Heather - Saturday 11/7
        []Marina - Saturday 11/7
        []Alexandra - Saturday 11/7
        []ALL - Heroku - how do you deploy?
    []A screenshot of your Project Management Board that shows breakdown of tasks, assigned to group members with a schedule.  
        []Saturday we will come together to plan out past the Server Section of the breakdown below.    

[]Setup Server
        [X]mkdir server
    []Install Dependencies
        [X]express
        [X]cors
        [X]morgan helmet
        []parse(express.json)
    [X]Install/Setup Linter
        [X]eslint
            [X]npx eslint --int
            [X]To check syntax, find problems, and enforce code style 
            [X]CommonJS (require/exports)
            [X]Framework - none
            [X]Typescript - no
            [X]code: node
            [X]style - popular style 
                [X]Airbnb
            [X]config file- javascript      
        [X]nodemon
        [X]package.json 
            [X]"start": "node src/index.js",
            [X]"main": "src/index.js",
            [X]"dev": "nodemon src/index.js
            [X]"lint": "eslint src/"
    [X]Setup Express App
        [X]morgan () 
            [X]const morgan = require('morgan');
            [X]app.use(morgan('common"));
        [X]helmet (add and take away headers, hackers)
            [X]const helmet = require('helmet');
            [X]app.use(helmet());
        [X]cors (any origin can request from our backend)
            [X]const cors =require('cors');
            [X]app.us(cors());
                [X]origin: 'http://localhost:0000',
        []parse (express.json)
        []folder src
            []index.js
                []const express = require('express');
    [X]Setup Not Found and Error Middlewares
        [X]app.get('/',(req,res))
        [X]app.use((req, res,next) => {
            const error = new Error('your path is not found - ${req.orignalUrl}');
            res.status(404);
            next(error);
        });
        [X]Status Code 
            [X]Set
            [X]200 default 500
            [X]NODE.ENV
            /* eslint-disable-next line no-unused*/
        [X] 

[X]Model DB
    [X]What data will we store?
        [X]Log places that people/places are not following current guidelines - TEXT 
            [X]Date visited -DATE/TIME
            [X]Lat and Long?
                [X]Address? 
            [X]Picture of location/people
            [X]Description 


[X]Setup Mongoose Model(s)
    [X]install mongoose if you do not have. 
    [X]Models (schema) required/true
        [X]log entry - 
        [X]title: string
        [X]description: string,
        [X]comments: string,
        [X]rating: number? Min 0/Max 10/default 0?
        [X]image: string
        [X]date: date/default at .now
        [X]lat: number/required
            [X]...requiredNumber, 
                [X]min: -90,
                [X]max: 90,
        [X]long: number/required
            [X]...requiredNumber,
                [X]min: -180,
                [X]max: 180,
[X].env file 
    [X]NODE_ENV=development
    [X]PORT=0000
    [X]DATABASE_URL=mongodb://localhost/maskedkaren
    [X]CORS_ORIGIN=http://localhost:1337     

[]POST/logs
    []Create a new log entry
    []Postman
        []"title" 
[]GET/logs
    []List all log entries

[]Setup Client 
[]Create Form to add a new entry
[]Setup Map SDK on client 
[]List all log entries on map
[]Deploy to Heroku 
    []rewatch class on how to do it. 
