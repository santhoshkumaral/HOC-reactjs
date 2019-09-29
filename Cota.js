import React from 'react';
import withSecr4eatToLife from './HOC'

const Cota = props =>{

return (
  <div>
The string set to {props.setTo}
  </div>
)

}

const WrappedComponent = withSecr4eatToLife(Cota)

export default Cota;