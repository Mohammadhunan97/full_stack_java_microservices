import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lesson from './Lesson';
import Axios from 'axios';
const Tempdata = require('../tempdata.js');
let that = {};


class Readlessons extends Component {
    state = {
        lessons: []
    }
    componentDidMount(){
        this.readLessons();
    }
    readLessons(){
        console.log('reading')
        Axios.get("http://localhost:8080/lessons").then(r => {
            this.setState({lessons: r.data})
        })
    }
    deleteLesson(context,id){
        /*
            deletes one lesson by id and uses readLesson to reset state
        */
        Axios.delete("http://localhost:8080/lesson/" + id).then(() =>{
            context.readLessons();
        })

    }
    render() { 
        that = this;
        console.log(that)
        return (<div id="Readlessons">
            {
                this.state.lessons.map((lesson) => {
                    return (<Lesson 
                        id={lesson.id}
                        title={lesson.title}
                        date={(new Date(lesson.date).toLocaleString())}
                        student_engagement={lesson.student_engagement}
                        completed={lesson.completed}
                        deleteLesson={this.deleteLesson}
                        context={that}
                        />)
                })
            }
        </div>)
    }
}
 
export default Readlessons;