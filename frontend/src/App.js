// import React, {Component} from 'react';
// import './App.css';

// const tasks = [
//   {
//     "id": 1,
//     "title": "parth's web",
//     "description": "-----",
//     "completed": false
//   },
//   {
//       "id": 2,
//       "title": "Freelancing Work",
//       "description": "freelancing",
//       "completed": false
//   },
//   {
//       "id": 3,
//       "title": "Job Searching",
//       "description": "search job on linkedin indeed nuakri",
//       "completed": false
//   },
//   {
//       "id": 4,
//       "title": "Job Searching",
//       "description": "search job on linkedin indeed nuakri",
//       "completed": false
//   },  
// ]

// class App extends Component {
//   constructor(proops) {
//     super(props);
//     this.state={
//       viewCompleted: false,
//       taskList : tasks,
//     };
//   }

//   displayCompleted = status => {
//     if (status){
//       return this.setstatus({ viewCompleted: true });
//       }
//       return this.setstatus({ viewCompleted: false });
//   }

//   renderTabList = () => {
//     return(
//       <div className="my-5-tab-list">
//         <span
//           onClick={()=> this.displayCompleted(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           Completed
//         </span>
//                 <span
//           onClick={()=> this.displayCompleted(false)}
//           className={this.state.viewCompleted ? "active" : "active"} 
//           Incompleted
//         >
//         </span>
//       </div>
//     )
//   }

//   renderItems = () =>{
//     const { viewCompleted } = this.state;
//     const newItems  = this.state.taskList.filter(
//       item => item.completed == viewCompleted
//     );
//   };



//   render(){
//     return(
//       <main className="context">
//         <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
//         <h1 className="row">
//           <div className="col-md-6 col-sma-10 mx-auto p-0">
//             <div className="card p-3">
//               <button className="btn btn-warning">Add Task</button>

//             </div>

//           </div>

//         </h1>



//       </main>
//     )
//   }


// }

// export default App;


import React, { Component } from 'react';
import './App.css';

const tasks = [
  // Your task objects here...
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
];

class App extends Component {
  constructor(props) { // Fixed typo 'proops' to 'props'
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      this.setState({ viewCompleted: true }); // Fixed setState
    } else {
      this.setState({ viewCompleted: false }); // Fixed setState
    }
  }

  renderTabList = () => {
    return (
      <div className="my-5-tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
        </span>
      </div>
    )
  }

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems  = this.state.taskList.filter(
      item => item.completed == viewCompleted
    );

    return newItems.map(item=>(
      <li
      key = {item.id}
      className="list-group-ite d flex justify-content-between align-items-center">
      
        <span  className={'todo-title mr-2  ${this.state.viewCompleted ? "completed-todo : "" }'}
        title={item.title}>
        {item.title}
          <button className="btn btn-info mr-2">Edit</button>
          <button className="btn btn-danger mr-2">Delete</button>
        </span>
      </li>
    ))  

  };


  


  render() {
    return (
      <main className="context">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <h1 className="row">
          <div className="col-md-6 col-sma-10 mx-auto p-0">
            <div className="card p-3">
              <button className="btn btn-warning">Add Task</button>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </h1>
      </main>
    )
  }
}

export default App;
