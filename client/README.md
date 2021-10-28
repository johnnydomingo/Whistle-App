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
