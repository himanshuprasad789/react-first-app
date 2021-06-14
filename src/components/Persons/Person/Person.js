import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[person.js]  rendering...');
    return (
      <div className={classes.person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>
          {this.props.children}
        </p>
        <input type="text" onChange={this.props.changename} value={this.props.name} />
        <input type="text" onChange={this.props.changeage} value={this.props.age} />
      </div>
    );
  }
}
    

export default Person;