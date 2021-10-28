# Whistle!

## Description

Whistle! is a simple social media application that is based on the fundamentals of React. In this app, a user simply needs to enter a username and write a post/update to updated the feed in real time. The user's username and post are stored in the Airtable API to show the history of posts. The app functions as an environment to post a simple message to the feed and to view other users' posts. With this base platform, the possibilities with Whistle! are endless as more functionality can be added with more time and knowledge.

## Wireframes and Component Hierarchy

https://whimsical.com/whistle-8KY8vq1kef7GHLfyQmfc8k

## Airtable API and Data Sample 

Airtable was utilized for this application by having hard-coded usernames and post entries rendered onto the page with a GET request. A POST request is then made to add each new username and post entry to be logged and stored in the Airtable API.

```
{
    "records": [
        {
            "id": "recZud5xadqDHf8IQ",
            "fields": {
                "username": "Terri S.",
                "post": "I quit my job today!! Well... kinda. I'm taking a sabbatical for a year and I plan on starting in South America. If you have any recommendations, plea...",
                "Created": "2021-10-22T16:38:51.000Z"
            },
            "createdTime": "2021-10-22T16:38:51.000Z"
        },
        {
            "id": "recHDRJ5Ul1Hbs5Xg",
            "fields": {
                "username": "Sarah H.",
                "post": "Just got myself a brand new car! After saving for 3 years - and juggling 2 jobs - I was finally able to make this happen. Time to blast some Vanessa C...",
                "Created": "2021-10-22T16:10:22.000Z"
            },
            "createdTime": "2021-10-22T16:10:22.000Z"
        },
        {
            "id": "recjudXZgIdRCsQeA",
            "fields": {
                "username": "Jane D.",
                "post": "Omg totally feeling so overwhelmed this  project coming up. ",
                "Created": "2021-10-22T16:10:22.000Z"
            },
            "createdTime": "2021-10-22T16:10:22.000Z"
        }
    ],
    "offset": "itrbTva3P2pH8pawG/recjudXZgIdRCsQeA"
}
```
## MPV
- Have a working, interact React app
- Have 6 rendered components for the app
- Utilize functional components correctly
- Utilize Axios to render data from Airtable through a GET request and create data in the Airtable through a POST request
- Style app with CSS and/or a component library; utilize flexbox
- Have responsive design using a media query for desktop and mobile

### Post-MVP
- Implement a responsive navbar design
- Utilize PUT and DELETE requests to edit and delete posts from the feed
- Utilize an emoji package to display in text-field to give the user more options to express themselves

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Oct 22-24 | Proposal Approval / Airtable Setup        | Complete |
| Oct 25   | Component Creation / GET, POST Data        | Complete |
| Oct 26   | Finished Functional Components             | Complete |
| Oct 27   | Finished CSS for App / MVP                 | Complete |
| Oct 28   | Linting/CSS Finishing Touches              | Complete |
| Oct 29   | Presentations                              | Pending  |

## Timeframes 

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: | :---: |
| Proposal | H | 2 hrs| 2 hrs | 
| Pseudocode/Pre-planning | H | 4 hrs| 4 hrs | 
| Airtable Setup | H | 2 hrs| 2 hrs |
| Displaying Data from API | H | 4 hrs| 6 hrs | 
| Form Creation | H | 2 hr| 5 hr | 
| Navbar Creation | H | 2 hrs| 4 hrs | 
| Application CSS | H | 5 hrs| 8 hrs | 
| App Responsiveness | H | 1 hrs| 4 hrs |
| Linting | H | 1 hrs| 1 hrs |  
| Total | H | 23hrs| 36 hrs |

## SWOT Analysis 

### Strengths:

I developed a well-rounded understanding of how my application works and how functional components are utilized correctly in React. I am able to think of ideas that embody the topics covered in class to further enhance my understanding of the concepts. 

### Weaknesses:

Although my wireframes do not exactly match my finished product, it is still important to see where changes have been made. I had to recenter my approach and shift away from an initial idea that is beyond my current knowledge. In doing so, I turned this into the strengths above. 

### Opportunities:

This project is based off the lessons we were taught in React and provides a great baseline to build upon in the future. The great thing about this project is that I will be able to embellish the functionality even more as I take my learning to the next level. 

### Threats: 

Time management will also be an issue for me, especially when I run into problems. I tend to spend too much time fixated on a issue before asking for help due to the fact that I prefer to figure things out for myself. In the future, I will need to approach problems by limiting the time I spend on an issue to avoid burnout.