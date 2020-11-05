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
        []Alexandra - Repo/Setup Server
    []A schedule for completion of various tasks
        []Paul - Saturday 11/7
        []Heather - Saturday 11/7
        []Marina - Saturday 11/7
        []Alexandra - Saturday 11/7
        []ALL - Heroku - how do you deploy?
    []A screenshot of your Project Management Board that shows breakdown of tasks, assigned to group members with a schedule.  
        []Saturday we will come together to plan out past the Server Section of the breakdown below.    

[]Setup Server
        []mkdir server
    []Install Dependencies
        []express
        []cors
        []morgan helmet
        []parse(express.json)
    []Install/Setup Linter
        []eslint
            []npx eslint --int
            []To check syntax, find problems, and enforce code style 
            []CommonJS (require/exports)
            []Framework - none
            []Typescript - no
            []code: node
            []style - popular style 
                []Airbnb
            []config file- javascript      
        []nodemon
        []package.json 
            []"start": "node src/index.js",
            []"main": "src/index.js",
            []"dev": "nodemon src/index.js
            "lint": "eslint src/"
    []Setup Express App
        []morgan () 
            []const morgan = require('morgan');
            []app.use(morgan('common"));
        []helmet (add and take away headers, hackers)
            []const helmet = require('helmet');
            []app.use(helmet());
        []cors (any origin can request from our backend)
            []const cors =require('cors');
            []app.us(cors());
                []origin: 'http://localhost:0000',
        []parse (express.json)
        []folder src
            []index.js
                []const express = require('express');
    []Setup Not Found and Error Middlewares
        []app.get('/',(req,res))
        []app.use((req, res,next) => {
            const error = new Error('your path is not found - ${req.orignalUrl}');
            res.status(404);
            next(error);
        });
        []Status Code 
            []Set
            []200 default 500
            []NODE.ENV
            /* eslint-disable-next line no-unused*/
        [] 

[]Model DB
    []What data will we store?
        []Log places that people/places are not following current guidelines - TEXT 
            []Date visited -DATE/TIME
            []Lat and Long?
                []Address? 
            []Picture of location/people
            []Description 


[]Setup Mongooge Model(s)
    []install mongoose if you do not have. 
    []Models (schema) required/true
        []log entry - 
        []title: string
        []description: string,
        []comments: string,
        []rating: number? Min 0/Max 10/default 0?
        []image: string
        []date: date/default at .now
        []lat: number/required
            []...requiredNumber, 
                []min: -90,
                []max: 90,
        []long: number/required
            []...requiredNumber,
                []min: -180,
                []max: 180,
[].env file 
    []NODE_ENV=development
    []PORT=0000
    []DATABASE_URL=mongodb://localhost/maskedkaren
    []CORS_ORIGIN=http://localhost:0000     

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