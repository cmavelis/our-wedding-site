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

const itemTypes = {
    GROUPING: 'grouping',
    EVENT: 'event'
};

const timelineData = [
    {
        type: itemTypes.GROUPING,
        label: 'Friday',
        header: 'September 25',
    },
    {
        type: itemTypes.EVENT,
        label: '6:00 PM',
        header: 'Bike Party',
        description: 'Bike Party leaves St. Mary\'s park around 7:00. ' +
            'This item is a Baltimore favorite for us and our friends, so it would be great if you can join!'
    },
    {
        type: itemTypes.GROUPING,
        label: 'Saturday',
        header: 'September 26',
    },
    {
        type: itemTypes.EVENT,
        label: '6:00 PM',
        header: 'Wedding Ceremony',
        description: 'The main ceremony at Gertrude\'s.  Doors open at 5:30'
    },
    {
        type: itemTypes.EVENT,
        label: '6:30 PM',
        header: 'Cocktail Hour',
        description: 'We will be taking some photos during this time, but feel free to mill about.'
    }
];

// const timelineData = [
//     {
//         groupingLabel: 'Friday',
//         groupingHeader: 'September 25',
//         items: [
//             {
//                 label: '6:00 PM',
//                 header: 'Bike Party',
//                 description: 'Bike Party leaves St. Mary\'s park around 7:00. ' +
//                     'This item is a Baltimore favorite for us and our friends, so it would be great if you can join!'
//             }
//         ]
//     },
//     {
//         groupingLabel: 'Saturday',
//         groupingHeader: 'September 26',
//         items: [
//             {
//                 label: '6:00 PM',
//                 header: 'Wedding Ceremony',
//                 description: 'The main ceremony at Gertrude\'s.  Doors open at 5:30'
//             },
//             {
//                 label: '6:30 PM',
//                 header: 'Cocktail Hour',
//                 description: 'We will be taking some photos during this time, but feel free to mill about.'
//             }
//         ]
//     },
// ];


const TimelineEvent = (props) => {
    const { item } = props;
    return (
    <React.Fragment className="timeline--item">
        <span className="timeline--item-time">
            {item.type === itemTypes.GROUPING ? <h3>{item.label}</h3> : item.label}
        </span>
        <div className="timeline--item-graphic-container">
            {!props.last && <div className="timeline--item-connector"/>}
            {item.type === itemTypes.EVENT && <div className="timeline--item-dot"/>}
        </div>
        <div className="timeline--item-description">
            {item.type === itemTypes.EVENT ?
                <strong className="timeline--item-title">
                    {item.header}
                </strong>
                :
                <hline/>
            }
            <br/>
            {item.description ?? (
                <span>{item.description}</span>
            )}
        </div>

    </React.Fragment>
)};

const Timeline = () => {
    return(
    <div className='timeline--container'>
        <div className='timeline--grid'>
            {timelineData.map((item, index) => (
                    <TimelineEvent
                        item={item}
                        last={index === timelineData.length-1}
                    />
                )
            )}
        </div>
    </div>
    )
};

export default Timeline;
