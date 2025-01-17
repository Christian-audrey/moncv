import React, { Component } from 'react';
import { Data } from '../../data/Data';
import Project from './Project';
export default class ProjectList extends Component {

  state = {
    projects:Data
  };

  render() {
    let {projects}=this.state;
    return (
      <div className='portfolioContent'>
        <ul className='radioDisplay'>

        </ul>
        <div className='projects'>

            {
              projects.map(item => {
                return(
                  <Project 
                     key={item.id}
                     item={item}
                  />
                )
              })
            }
        </div>
        
      </div>
    )
  }
}
