import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import styles from './App.module.css';   

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[APP.JS] constructor');
  }
  state = {
    persons: [
      { id: 'fcw1', name: 'himanshu', age: 20 },
      { id: 'fcw2', name: 'himani', age: 18 },
      { id: 'fcw3', name: 'aman', age: 16 },
      { id: 'fcw4', name: 'suman', age: 14 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit:true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('App.js componentWillMount')
  // }

  componentDidMount() {
    console.log('[app.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[APP.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[APP.js] componentDidUpdate');
  }

  deletePerson = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    // edit the state of the class to be more specific persons array dynamically using this method
    // if we change the value of array from this method automatically the value on elements on browsers would change tooo

    // query the person using person.id using findIndex
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // The arr.find() method is used to get the value of
    // the first element in the array that satisfies the
    // provided condition.

    const person = { ...this.state.persons[personIndex] }; // arrays are pointers type
    person.name = event.target.value; //change the name dynamically

    const persons = [...this.state.persons]; // edit the array
    persons[personIndex] = person;

    this.setState({ persons: persons }); // set the edited array to persons array in the state
  };

  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.age = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  switchToggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[APP.JS] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changedname={this.nameChangedHandler}
          changedage={this.ageChangedHandler}
        />
      );
    }
    return (
      <div className={styles.App}>
        <button onClick={() => { this.setState({ showCockpit: false });}}>remove cockpit</button>
        {this.state.showCockpit?<Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          switchToggler={this.switchToggleHandler}
        />:null}
        {persons}
      </div>
    );
  }
}
export default App;