import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Improve the English language', done: false },
        { id: 1, title: 'Do 1-5 tasks on Codewars', done: false },
        { id: 2, title: 'Make some feature on Codepen', done: false },
        { id: 3, title: 'Watch video about JS', done: false },
        { id: 4, title: 'Watch video about HTML/CSS', done: false },
        { id: 5, title: 'Sport activity', done: false },
        { id: 6, title: '15 minutes on klava.org', done: false },
        { id: 7, title: 'Read 5 pages on METANIT', done: false },
        { id: 8, title: 'Check vacancies', done: false }
      ]
    };
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      });
      console.log(tasks.length);
      console.log(tasks);

      return tasks;
    });
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    })
  }
  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="app">
        <h1 className="top">Active tasks:{activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
        <TaskInput addTask={this.addTask}></TaskInput>
      </div>
    );
  }
}

export default App;
