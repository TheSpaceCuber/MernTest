# [OneNUS](http://ec2-100-25-45-142.compute-1.amazonaws.com/)
  - [Orbital 2020](https://orbital.comp.nus.edu.sg/)
  - Platform for all the NUS events you need.
  - [Tien Chun](https://github.com/tien87chun) & [Royce](https://github.com/TheSpaceCuber)
  - Update (July 15th): It seems like NUS is planning a mobile app called OneNUS with the same objective!

## Motivation
As a NUS student, do you often find that there are too many decentralised information channels? We certainly think so. Because different NUS organisations use various decentralised communication channels – such as email lists, NUSync, Telegram channels, and NUS TalentConnect – we often find it difficult to find the information we are interested in. 

Imagine a centralised platform which is able to sieve out all these publicity efforts and across various platforms, with minimum spam. Imagine, OneNUS.

## Poster
![Poster](https://user-images.githubusercontent.com/43946966/84006257-03fd9280-a9a1-11ea-9ac3-4eedfa32200f.jpg)

## Aim
We want to create a web application that provides a clean interface for students to view and discover meaningful events happening in NUS.

## User Stories
1.	As a freshman, I want to know which FOPs I can sign up for, co-curricular activities I can participate in, on-campus residential options at one glance.
 
2.	As a sophomore, I want to know the different student bodies I can apply to at one glance.

3.	As a senior in my penultimate or final year, I want to know what are the on-campus recruitment talks/ off-campus office visit trips at one glance.
 
4.	As a publicity head of a student body, I want campaigns promoting sign-ups to reach the right target audience.

## Scope of Project

Ultimately, our vision is for OneNUS to integrate information from various channels in the NUS system (NUSync, Telegram channels, NUSNextBus) into one single platform.

Currently, we will focus on a single platform, Telegram, first.

## Timeline
1. Evaluation Milestone 1 – Ideation ✓
      - Set up the backend, get web app live but with no features  ✓
      - Scrape data from at one source (Telegram channels), implement in database ✓
      - Familiarise ourselves with the required technologies  ✓

2. Evaluation Milestone 2 – Prototyping
      - Work on application UI using ReactJS (implement multiple features in the frontend) locally ✓
      - Connecting the implementation of features to the backend database
         - Sign-up & Login feature ~~[Delayed for Milestone 3]~~ ✓ basic feature without state
         - Search bar feature ~~[Delayed for Milestone 3]~~ ✓
          ![ezgif-2-1da455c83377](https://user-images.githubusercontent.com/43946966/88476630-771c9180-cf6c-11ea-8aa7-9959c49b9251.gif)

      - Display the data obtained in a user-friendly way ~~(Not fully completed)~~. ✓
      - ![ezgif-2-6ec9af63da19](https://user-images.githubusercontent.com/43946966/88476537-ada5dc80-cf6b-11ea-8015-3f597c8fc05c.gif)

3.	Evaluation Milestone 3 – Extension
      - ~~Incorporate the storage and display of media files (images and videos) into database and web application [To be confirmed]~~
      - ~~Extension of features in the web application to cover more categories (NUSync, NUSNextBus) [To be confirmed]~~
 
4.	Splashdown

## How are we different from similar platforms?
We are the first web application on the university campus and in the university communications channel ecosystem to congregate and consolidate information over various communication channels into a one-stop platform for the latest news and happenings in NUS.

## Program Flow
![program_flow](https://user-images.githubusercontent.com/43946966/84005584-ed0a7080-a99f-11ea-869b-efbc2da09437.jpg)

## Tech Stack
1. Front-end (ReactJS): One of the most popular front-end libraries. We wanted to learn more about the strengths of ReactJS through its focus on individual components and understand why it is taking over front-end development.

2. Back-end (NodeJS): Both ReactJS and NodeJS makes use of JavaScript, which is great as we do not have to focus on multiple languages. It's beginner friendly and supports a wide variety of modules as well.

3. Database (MongoDB Atlas): Atlas makes the NoSQL database convenient and we wanted to learn how NoSQL works compared to relational databases. The popularity of MongoDB makes it a great choice.

4. Webscrape: In order to obtain our data, we use Python due to its ease it web scraping. The telethon library is used for obtaining telegram data, and we plan to look into scrapy and bs4 if we have the time to scrape websites.

5. AWS Cognito (Authentication Backend): This helped us to abstract away the backend required to AWS. (NEW!)
