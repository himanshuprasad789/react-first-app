import React, { useEffect } from 'react'
import styles from './Cockpit.module.css'

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('data rendered to cloud!')
    }, 1000);
    return () => {
      console.log('clean up work in cockpit js')
    }
  }, []);

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');
    return () => {
      console.log('clean up work in 2nd useEffect');
    }
  })

  let assignedClasses = []; 
  let btnClass = [styles.button];

  if (props.showPersons) {
    btnClass.push(styles.Water);
  }
  
    if (props.personsLength <= 4) {
      assignedClasses.push(styles.blue);
    }
    if (props.personsLength <= 3) {
      assignedClasses.pop(styles.blue);
      assignedClasses.push(styles.teal);
    }
    if (props.personsLength <= 2) {
      assignedClasses.pop(styles.teal);
      assignedClasses.push(styles.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(styles.bold);
  }
  
  return (
    <div>
      <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass.join(' ')}
            onClick={props.switchToggler}>Toggle Persons
          </button>
    </div>
  )
}
export default React.memo(Cockpit);