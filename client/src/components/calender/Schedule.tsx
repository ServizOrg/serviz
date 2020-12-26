import React from 'react';
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import { Inject,Schedule, ScheduleComponent, Day,WorkWeek, Week, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { extend } from '@syncfusion/ej2-base';

// import { render } from '@testing-library/react';
// import './Schedule.css';
// import { Data } from '@syncfusion/ej2-react-grids';

Schedule.Inject(Day, Week, WorkWeek, Month, Agenda);
const CALENDAR_ID: string = '5105trob9dasha31vuqek6qgp0@group.calendar.google.com';
const PUBLIC_KEY: string = 'AIzaSyD76zjMDsL_jkenM5AAnNsORypS1Icuqxg';

export default function  Schedules() {
    let localData: EventSettingsModel = {
        dataSource: [{
            EndTime: new Date(2019, 0, 11, 6, 30),
            StartTime: new Date(2019, 0, 11, 4, 0)

        }]
    };

    let scheduleData: object[] = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2018, 1, 15, 9, 30),
        EndTime: new Date(2018, 1, 15, 11, 0)
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0)
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2018, 1, 13, 9, 30),
        EndTime: new Date(2018, 1, 13, 11, 0)
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    }];
    var scheduleObj: Schedule = new Schedule({
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: scheduleData }
    });
    scheduleObj.appendTo('#Schedule');
    console.log("hhhhh",scheduleData)

   

    // private remoteData = new DataManager({
    //     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // });

    
    return (
        <ScheduleComponent height='400px' width='600' currentView='Month' selectedDate={new Date(2020, 1, 1)} 
        eventSettings={localData} >
            <Inject services={[Day, Week, Month, Agenda]} />
        </ ScheduleComponent >
    )

}


 
