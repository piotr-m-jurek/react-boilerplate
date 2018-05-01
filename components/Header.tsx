import * as React from 'react'
import * as styles from './Header.module.scss'

interface HeaderProps {
  text: string
}

export default class Header extends React.Component<{text: string}, {}> {
  render () {
    const { text } = this.props
    return (
      <h1 className={styles.header}>{ text }</h1>
    )
  }
}
