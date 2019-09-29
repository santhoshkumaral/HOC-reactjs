import React from 'react';

const UpdatedComponent = (OriginalComponent)=>{

class NewComponent extends React.Component{

constructor(){
  super();
  this.state = {
    runs : 0
  }
}

incRuns = ()=>{
  this.setState(preState=>{
    return {
      runs : preState.runs+1
    }
  })
}

render(){
  return <OriginalComponent runs={this.state.runs} incRuns={this.incRuns}/>
}

}

return NewComponent;

}

export default UpdatedComponent;