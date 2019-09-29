import React from 'react';

const UpdatedComponent = (OriginalComponent)=>{

class NewComponent extends React.Component{


constructor(){
  super();
  this.state = {
    count : 0
  }
}

inc=()=>{
// alert('Hi')
this.setState(preState=>{
 return {count : preState.count+1}
})

}

render(){
  return <OriginalComponent count={this.state.count} inc={this.inc}/>
}

}
return NewComponent;
}

export default UpdatedComponent;