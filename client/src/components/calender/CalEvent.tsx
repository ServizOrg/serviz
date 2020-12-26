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
    let dataManager: DataManager = new DataManager({
        url: 'https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events?key=' + PUBLIC_KEY,
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    let scheduleObj: Schedule = new Schedule({
        height: '550px',
        selectedDate: new Date(2018, 10, 14),
        eventSettings: { dataSource: dataManager },
        readonly: true,
        dataBinding: (e: { [key: string]: Object }) => {
            let items: { [key: string]: Object }[] = (e.result as { [key: string]: Object }).items as { [key: string]: Object }[];
            let scheduleData: Object[] = [];
            if (items.length > 0) {
                for (let i: number = 0; i < items.length; i++) {
                    let event: { [key: string]: Object } = items[i];
                    let when: string = (event.start as { [key: string]: Object }).dateTime as string;
                    let start: string = (event.start as { [key: string]: Object }).dateTime as string;
                    let end: string = (event.end as { [key: string]: Object }).dateTime as string;
                    if (!when) {
                        when = (event.start as { [key: string]: Object }).date as string;
                        start = (event.start as { [key: string]: Object }).date as string;
                        end = (event.end as { [key: string]: Object }).date as string;
                    }
                    scheduleData.push({
                        Id: event.id,
                        Subject: event.summary,
                        StartTime: new Date(start),
                        EndTime: new Date(end),
                        IsAllDay: !(event.start as { [key: string]: Object }).dateTime
                    });
                }
            }
            e.result = scheduleData;
        }
    });
    scheduleObj.appendTo('#Schedule');
    
    return (
        <ScheduleComponent height='400px' width='600' currentView='Month' selectedDate={new Date(2020, 1, 1)} >
            <Inject services={[Day, Week, Month, Agenda]} />
        </ ScheduleComponent >
    )

}


 
