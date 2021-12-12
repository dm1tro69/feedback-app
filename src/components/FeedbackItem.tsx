import React, {FC} from 'react';
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card";

type ItemProps = {
    rating: number
    text: string
    id: number
    handleDelete: (id: number) => void
}

const FeedbackItem:FC<ItemProps> = ({rating, text, id, handleDelete}) => {


    return (
        <Card>
            <div className={'num-display'}>
                {rating}
            </div>
            <button onClick={() => handleDelete(id)} className={'close'}><FaTimes color={'purple'}/></button>
            <div className={'text-display'}>
                {text}
            </div>

        </Card>
    );
};

export default FeedbackItem;
