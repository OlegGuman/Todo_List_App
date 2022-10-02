import React, { Component } from "react";
import './task.css';

export default class Task extends Component {
    
    render() {
        const { props, onChangeTaskStatus, onDeleted } = this.props;
        
        return (
            <div className="view">
                <input 
                className="toggle" 
                type="checkbox" 
                onClick={() => onChangeTaskStatus(props.id)}
                defaultChecked={props.status === 'completed'} 
                />
                <label>
                    <span className='description'>{props.title}</span>
                    <span className="created">{props.created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={onDeleted}></button>
            </div>
        )
    };
};