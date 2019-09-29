import React from 'react';

const withSecr4eatToLife =  (WrappedComponent)=>{

  class HOC extends React.Component{

render(){
  return (
    <WrappedComponent {...props} setTo={42}/>
  )
}

  }
} 

export default withSecr4eatToLife;