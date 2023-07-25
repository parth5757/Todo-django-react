// import React, { Component } from 'react';
// import './App.css';
// import Modal from './components/Modal';
// import axios from 'axios'; // Add this line to import axios



// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       viewCompleted: false,
//       taskList: tasks,
//       activeItem: {
//         title: "",
//         description: "",
//         completed:false
//       },
//       todoList: []
//     };
//   }

//   componentDidMount(){
//     this.refreshList();
//   }  

//   refreshList = () => {
//     axios 
//     .get("http://127.0.0.1:8000/api/tasks/")
//     .then(res => this.state({ todoList: res.data}))
//     .catch(err => console.log(err))
//   };

   

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };
//   handleSubmit = item => {
//     this.toggle();
//     if (item.id) {
//       axios
//       .put('http://127.0.0.1:8000/api/tasks/#{item.id}/', item)  
//       .then(res => this.refreshList())
//     }
//     axios
//     .post("http://127.0.0.1:8000/api/tasks/", item)
//     .then(res => this.refreshList())
//   };
//   handleDelete = item => {   
//     axios
//     .delete('http://127.0.0.1:8000/api/tasks/#{item.id}/', item)  
//     .then(res => this.refreshList())
//   };
//   createItem = () => {
//     const item = {title: "", modal: !this.state.modal};
//     this.setState({ activeItem:item, modal: !this.state.modal });
//   };
//   editItem = item => {
//     this.setState({ activeItem: item, modal: !this.state.modal})
//   }


//   displayCompleted = status => {
//     if (status){
//       return this.setState({ viewCompleted: true });
//     }
//     return this.setState({ viewCompleted: false});
//   };  

//   renderTabList = () => {
//     return (
//       <div className="my-5-tab-list">
//         <span
//           onClick={() => this.displayCompleted(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           Completed
//         </span>
//         <span
//           onClick={() => this.displayCompleted(false)}
//           className={this.state.viewCompleted ? "" : "active"}
//         >
//           Incompleted
//         </span>
//       </div>
//     )
//   }

//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.todoList.filter(
//       item => item.completed === viewCompleted
//     );

//     return newItems.map(item => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center">
//         <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`} title={item.title}>
//           {item.title}
//           <button className="btn btn-info mr-2">Edit</button>
//           <button className="btn btn-danger mr-2">Delete</button>
//         </span>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className="content p-3 mb-2 bg-info">
//         <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
//         <div className="row">
//           <div className="col-md-6 col-sma-10 mx-auto p-0">
//             <div className="card p-3">
//               <button className="btn btn-warning">Add Task</button>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <footer className="my-5 mb-2 bg-info text-white text-center">
//           Copyright 2023  &copy; All Right Reserved 
//         </footer>
//         {this.state.modal ? (
//           <Modal activeItem={this.state.activeItem} toggle={this.toggle}
//           onSave={this.handleSubmit}/>         
//         ): null}
//       </main>
//     )
//   }
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [] // Instead of taskList, use todoList to store the tasks
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/") // Fetching tasks from the Django backend
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://127.0.0.1:8000/api/tasks/${item.id}/`, item)
        .then(res => this.refreshList());
    } else {
      axios
        .post("http://127.0.0.1:8000/api/tasks/", item)
        .then(res => this.refreshList());
    }
  };

  handleDelete = item => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/${item.id}/`, item)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = status => {
    this.setState({ viewCompleted: status });
  };

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
          className={!this.state.viewCompleted ? "active" : ""}
        >
          Incompleted
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      item => item.completed === viewCompleted
    );

    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            viewCompleted ? "completed-todo" : ""
          }`}
          title={item.title}
        >
          {item.title}
          <button
            className="btn btn-info mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mr-2"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content p-3 mb-2 bg-info">
        <h1 className="text-black text-uppercase text-center my-4">
          Task Manager
        </h1>
        <div className="row">
          <div className="col-md-6 col-sma-10 mx-auto p-0">
            <div className="card p-3">
              <button
                className="btn btn-warning"
                onClick={() => this.createItem()}
              >
                Add Task
              </button>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <footer className="my-5 mb-2 bg-info text-white text-center">
          Copyright 2023 &copy; All Right Reserved
        </footer>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
