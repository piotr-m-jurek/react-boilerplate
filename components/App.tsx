import * as React from 'react'
import * as styles from './App.module.css'

export default class App extends React.Component<{}, {}>{
  render() {
    return (
      <h1 className={styles.header}>Hello React!</h1>
    )
  }
}
