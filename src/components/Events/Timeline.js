import React from "react";

import "./Timeline.scss";

const eventData = [
    {
        date: 'Friday, September 25',
        time: '7:00 PM',
        name: 'Bike Party',
        description: 'We ride bikes all over Baltimore for 2 hours.  Bike rentals and information will be added at a later date. Bike rentals and information will be added at a later date. Bike rentals and information will be added at a later date. '
    },
    {
        date: 'Sat, September 26',
        time: '6:00 PM',
        name: 'Wedding Ceremony',
        description: 'This is when we get married'
    },
    {
        date: 'Sat, September 26',
        time: '6:30 PM',
        name: 'Wedding Reception',
        description: 'This is for drinks and stuff'
    }
];

const TimelineEvent = (props) => (
    <React.Fragment className="timeline--event">
        <span className="timeline--event-time">
            {props.event.date} {props.event.time}
        </span>
        <div className="timeline--event-graphic-container ">
            {!props.last && <div className="timeline--event-connector"/>}
            <div className="timeline--event-dot"/>
        </div>
        <div className="timeline--event-description">
            <strong className="timeline--event-title">
                {props.event.name}
            </strong>
            <br/>
            <span>
                {props.event.description}
            </span>
        </div>

    </React.Fragment>
);

const Timeline = () => {
    return(
    <div className='timeline--container'>
        <div className='timeline--grid'>
            {eventData.map((event, index) => (
                    <TimelineEvent
                        event={event}
                        last={index === eventData.length-1}
                    />
                )
            )}
        </div>
    </div>
    )
};

export default Timeline;
