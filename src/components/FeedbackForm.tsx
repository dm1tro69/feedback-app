import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {DataType} from "../data/FeedbackData";

type FormType = {
    handleAdd: (newFeedback: DataType) => void
}

const FeedbackForm:FC<FormType> = ({handleAdd}) => {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (text === ''){
            setBtnDisabled(true)
            setMessage('')
        }else if (text !== '' && text.trim().length <=10) {
            setBtnDisabled(true)
            setMessage('Text must be at 10 characters')
        }else {
            setMessage('')
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                    <RatingSelect select={(rating) => setRating(rating)}/>
                <div className={'input-group'}>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder={'Write a review'}
                    />
                    <Button isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className={'message'}>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
