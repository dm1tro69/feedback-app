import React, {FC} from 'react';
import {DataType} from "../data/FeedbackData";
import FeedbackItem from "./FeedbackItem";

type ListProps = {
    feedback: DataType[]
    handleDelete: (id: number) => void
}

const FeedbackList:FC<ListProps> = ({feedback, handleDelete}) => {
    if (!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return (
        <div className={'feedback-list'}>

            {feedback.map((item) => {

                return (
                    <FeedbackItem
                        handleDelete={handleDelete}
                        key={item.id}
                        text={item.text}
                        id={+item.id!}
                        rating={item.rating}
                    />
                )
            })}
        </div>
    );
};

export default FeedbackList;
