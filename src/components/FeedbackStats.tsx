import React, {FC} from 'react';
import {DataType} from "../data/FeedbackData";

type FeedbackProps = {
    feedback: DataType[]
}


const FeedbackStats: FC<FeedbackProps> = ({feedback}) => {

    let average = feedback.reduce((acc, item) => {
        return acc + item.rating
    }, 0) / feedback.length

    return (
        <div className={'feedback-stats'}>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average ? average.toFixed(1).replace(/[.,]0$/, '') : 0}</h4>
        </div>
    );
};

export default FeedbackStats;
