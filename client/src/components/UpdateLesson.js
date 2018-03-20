import React, { Component } from 'react';

class UpdateLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'sample',
            completedClicked: false
        }
    }
    toggleCompleted(){
        this.setState({
            completedClicked: !this.state.completedClicked
        })
    }
    render() { 
        return (<div id="UpdateLesson">
            <br/>
            <p>Update this lesson:</p>
            <input placeholder="title" value={this.state.title}/>
            <p>Is this lesson completed?</p>
            {
                this.state.completedClicked === true?
                <div>
                    <p>yes:</p>
                    <input  type="checkbox" value="yes" checked="true" onClick={() => this.toggleCompleted()}/>
                    <p>no:</p>
                    <input type="checkbox" value="no" checked="false" onClick={() => this.toggleCompleted()}/>
                </div>
                :
                <div>
                    <p>yes:</p>
                    <input  type="checkbox" value="yes" checked="true" onClick={() => this.toggleCompleted()}/>
                    <p>no:</p>
                    <input type="checkbox" value="no" checked="false" onClick={() => this.toggleCompleted()}/>
                </div>
            }




            <p>Student Engagement Rating:</p>
            <select name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <input type="submit"/>
        </div>)
    }
}
 
export default UpdateLesson;