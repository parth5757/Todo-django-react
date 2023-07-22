import React, {Component} from 'react';
import './App.css';

const tasks = [
  {
    "id": 1,
    "title": "parth's web",
    "description": "-----",
    "completed": false
  },
  {
      "id": 2,
      "title": "Freelancing Work",
      "description": "freelancing",
      "completed": false
  },
  {
      "id": 3,
      "title": "Job Searching",
      "description": "search job on linkedin indeed nuakri",
      "completed": false
  },
  {
      "id": 4,
      "title": "Job Searching",
      "description": "search job on linkedin indeed nuakri",
      "completed": false
  },  
]

class App extends Component {
  constructor(proops) {
    super(props);
    this.state={
      viewCompleted: false,
      taskList : tasks,
    };
  }

  displayCompleted = status => {
    if (status){
      return this.setstatus({ viewCompleted: true });
      }
      return this.setstatus({ viewCompleted: false });
  }

  renderTabList = () => {
    return(
      <div className="my-5-tab-list">
        <span
          onClick={()=> this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
                <span
          onClick={()=> this.displayCompleted(false)}
          className={this.state.viewCompleted ? "active" : ""}
          Incompleted
        >
        </span>
      </div>
    )
  }


}
