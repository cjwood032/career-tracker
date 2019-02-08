import React from 'react'
import '../App.css'
const About = () => {
  return (
    <div className="about-page">
      <h4 className="about-title"> About Career Tracker App </h4>
        <h5 className="about-description"> 
        Created by Chris Wood <br/>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/cjwood032/'>Github</a><br/>
        <a target="_blank" rel="noopener noreferrer" href='http://topherwood.com'>Blog</a>
        </h5>
        <p>I made this app to help me with my career tracking after graduating flatiron.
        There are no users in this app, as I intend to only run it locally, and add features if 
        they help. The main purpose of this app is to localize the postings I find and the people I connect with
        People are welcome to submit inquiries or bug reports to the email in the readme. Happy hunting!
        </p>
    </div>
  )
}
export default About
