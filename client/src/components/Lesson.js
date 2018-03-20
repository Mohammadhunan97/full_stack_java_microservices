import React from 'react';

let Lesson = ({completed, date, student_engagement, title}) => (
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
        <p>{date.toLocaleDateString()}</p>
        <button>Delete this lesson</button>
        <button>Update this lesson</button>
    </div>

)

export default Lesson;
