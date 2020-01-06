import React, { Component } from 'react';
import PropTypes from 'prop-types';

import portal from './svg/portal12.svg';
import streetview from './svg/portal_streetview.svg';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const styles = {
      transform: `translate(${100}px, ${100}px)`
    };


    return (
        <div className="portal">
          <div>
            <img style={styles} src={portal} alt={"I don't know where I can find the image"}/>
          </div>
        </div>
    )
  }
}



const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
