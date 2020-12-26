import React from 'react';
// import './calendar.css';

function CalenderEvent() {
// Require google from googleapis package.
const { google } = require('googleapis')

// Require oAuth2 from our google instance.

const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '185283466398-8g9alqi1absmp2hnpj741unmgbnfv68k.apps.googleusercontent.com',
  'TsDUisgQ0gYGisCrS_Rr57A-'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//0449MbEAqPhdUCgYIARAAGAQSNwF-L9Ir3n5tdb6V9wot7AKovb9GkgaB85ucJycHAeTBuDSmuPb_XIb2TjIySBTosyQwaSP5iHU',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `google api `,
  location: `ramallah`,
  description: `fix google api .`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Eastern European Time',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Eastern European Time',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'Jerusalem',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy
    console.log(eventArr)

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)

// return (
//     <div className="App">
//       <header className="App-header">
//         <p>Click to book a service provider </p>
//         <button style={{width: 200, height: 60}} onClick={handleClick}>book a service</button>
//       </header>
//     </div>
//   );
}

export default CalenderEvent;