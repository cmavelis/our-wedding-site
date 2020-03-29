import React from "react";

import "./Timeline.scss";

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
        description: 'Bike Party leaves St. Mary\'s park around 7:00. '
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
    },
    {
        type: itemTypes.EVENT,
        label: '7:30 PM',
        header: 'Dinner',
    },
    {
        type: itemTypes.EVENT,
        label: '8:30 PM',
        header: 'Dancing',
    },
    {
        type: itemTypes.EVENT,
        label: '10:30 PM',
        header: 'After-party',
        description: 'The Gertrude\'s venue will close, but we will move to a TBD location.'
    }
];

const TimelineEvent = (props) => {
    const { item } = props;
    return (
    <React.Fragment>
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
                <hr/>
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
                        key={item.header}
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
