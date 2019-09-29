import React from 'react';
import UpdatedComponent from './PlayerHOC';
const Player = (props)=>{

return (
  <div>
The runs is {props.runs}
<hr/>
<button onClick={props.incRuns}>++</button>
  </div>
)

}

export default UpdatedComponent(Player);