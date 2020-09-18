import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import 'ress'
import styles from './index.css'

ReactDOM.render(
    <div>
        <h1 className={styles.title}>Hello</h1>
    </div>,
    document.querySelector('#root')
)
