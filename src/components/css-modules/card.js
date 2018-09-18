import React from 'react'
import styles from './styles.css'

console.log(styles)

const Card = () => (
  <div className={styles.card}>
    <h1 className={styles.title}>Título</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet tortor ac odio feugiat feugiat. Integer consectetur magna ac risus laoreet cursus.</p>
  </div>
)

export default Card