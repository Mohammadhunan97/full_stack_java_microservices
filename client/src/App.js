import React, { Component } from 'react';
import Readlessons from './components/Readlessons';
import AddLesson from './components/AddLesson';
import UpdateLesson from './components/UpdateLesson';
class App extends Component {
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
