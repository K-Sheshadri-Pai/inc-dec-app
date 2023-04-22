import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const page = () => {
  return (
    <>
      <div className={styles.main}>
        <button className={styles.btn}>
          <Link href="./incdecapp" style={{textDecoration:"none",color:"white"}}>Go to the App</Link>
        </button>
      </div>
    </>
  )
}

export default page