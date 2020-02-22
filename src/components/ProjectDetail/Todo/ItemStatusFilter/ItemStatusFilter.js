import React, { Component } from 'react';
import './ItemStatusFilter.css';

class ItemStatusFilter extends Component {

  state = {
    btns: [
        ["all",'btn btn-primary'],
        ["active","btn btn-info"],
        ["done","btn btn-info"]
      ] 
  }

  onChangeStatusHandler = (e) =>{
    this.props.changeFilter(e.target.id);
    const newbtns = this.state.btns.map(btn=>{
      if(btn[0] == e.target.id){
        return [btn[0], 'btn btn-primary']
      }else{
        return [btn[0], 'btn btn-info']
      }
    })
      this.setState({
        btns: newbtns
      })
  }

  render(){
    const allbutton = this.state.btns[0][1];
    const activebutton = this.state.btns[1][1];
    const donebutton = this.state.btns[2][1];
    return (
      <div className="btn-group">
        <button type="button" id='all'
                className={allbutton}
                onClick={this.onChangeStatusHandler}>All</button>
        <button type="button" id='active'
                className={activebutton}
                onClick={this.onChangeStatusHandler}>Active</button>
        <button type="button" id='done'
                className={donebutton}
                onClick={this.onChangeStatusHandler}>Done</button>
      </div>
    );
  }
};


export default ItemStatusFilter;