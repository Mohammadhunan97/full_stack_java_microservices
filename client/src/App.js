import React, { Component } from 'react';
import Readlessons from './components/Readlessons';
import AddLesson from './components/AddLesson';
import UpdateLesson from './components/UpdateLesson';
import {getLessons} from './store/actions';
class App extends Component {
  componentDidMount(){
    getLessons();
  }
  render() {
    return (
      <div className="App">
        <Readlessons />
        <AddLesson />
        <UpdateLesson />
      </div>
    );
  }
}

export default App;
