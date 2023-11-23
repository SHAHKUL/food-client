import React from 'react'

import classes from './news.module.css'
import {AiOutlineSend} from 'react-icons/ai'

function Newsletter() {
  return (
    <section id='contacts' className={classes.container}>
    <div className={classes.wrapper}>
      <h4 className={classes.subtitle}>Get our latest offers</h4>
      <h2 className={classes.title}>Newsletter</h2>
      <div className={classes.inputContainer}>
        <input type="text" placeholder='Enter email...'/>
        <AiOutlineSend className={classes.sendIcon}/>
      </div>
   
      <img src="https://www.retently.com/wp-content/uploads/2019/08/customer-feedback-cover.png" className={classes.illustration} alt=""/>
   
    </div>
  </section>
  )
}

export default Newsletter