import React, {FC, useState} from 'react';
import Header from "./components/Header";
import FeedbackData, {DataType} from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App:FC = () => {

    const [feedback, setFeedback] = useState<DataType[]>(FeedbackData)

    const deleteFeedback = (id: number) => {
        if (window.confirm('Are you sure yuo want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    const addFeedback = (newFeedback: DataType) => {
         newFeedback.id = Math.random()
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }

    return (
        <>
            <Header/>
            <div className={'container'}>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    );
}


export default App;
