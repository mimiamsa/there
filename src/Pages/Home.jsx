import React, { Component } from 'react'
// import HeaderVideo from "./../Components/HeaderVideo"
import { Link } from "react-router-dom"
import GridArticles from './../Components/GridArticles';
import PageTitle from './../Components/PageTitle';
// import Cta from './../Components/Cta'

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="header">
          {/* <div className="header-title-container">
            <p className="header-over-title"> Discover and Share </p>
            <h3 className="header-title">Browse through my articles and learn about my adventure</h3> */}
            {/* <Link to="/articles"><button className="btn-white">Start discovering</button></Link> */}
          {/* </div> */}
          {/* <HeaderVideo /> */}
        </header>
        {/* <Cta /> */}
        <PageTitle 
        title="Browse through my articles and learn about my adventure" 
        subTitle=" Etiam eu blandit lorem. Morbi consequat eu quam in tempus. 
        Etiam auctor, magna sed tempus venenatis, arcu ante malesuada lorem, a hendrerit ex massa eu justo." 
        />
        <Link to="/article"><GridArticles /></Link>
      </>
    )
  }
}
