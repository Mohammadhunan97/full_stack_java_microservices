import React from 'react';

let Lesson = ({id,completed, date, student_engagement, title, deleteLesson, context}) => (
    <div>
        <h1>{title}</h1>
        
        {
            completed === true?
            <div>
                <p>you have completed this lesson</p>
                <p>Student Engagement Score: {student_engagement}/10</p>
            </div>
            :<p>you have not completed this</p>
        }
        <p>Created: {date}</p>
        <button onClick={() => deleteLesson(context,id)}>Delete this lesson</button>
        <button>Update this lesson</button>
    </div>

)

export default Lesson;
