import React, { Component } from 'react';
import Lesson from './Lesson';
const Tempdata = require('../tempdata.js');



class Readlist extends Component {
    state = {
        lessons: []
    }

    componentDidMount(){
        // replace this with async version and axios to the api
        this.setState({
            lessons: Tempdata.lessons
        })
    }
    render() { 
        return (<div id="Readlessons">
            {
                this.state.lessons.map((lesson) => {
                    return (<Lesson 
                        title={lesson.title}
                        date={lesson.date}
                        student_engagement={lesson.student_engagement}
                        completed={lesson.completed}
                        />)
                })
            }
        </div>)
    }
}
 
export default Readlist;