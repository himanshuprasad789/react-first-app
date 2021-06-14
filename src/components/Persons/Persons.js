import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');

  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changedage !== this.props.changedage ||
  //       nextProps.changedname !== this.props.changedname ||
  //       nextProps.changedname !== this.props.changedname ||
  //       nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'snapshot!' };
  }
  componentDidUpdate(prevProps, prevState,snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log('{app.js] componentWillUnmount');
  }
  render() {
    console.log('[persons.JS] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => {
            this.props.clicked(index);
          }}
          key={person.id}
          changename={event => this.props.changedname(event, person.id)}
          changeage={event => this.props.changedage(event, person.id)}
        />
      );
    });
  }
}  
  

  
export default Persons;