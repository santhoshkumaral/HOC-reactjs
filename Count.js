import React,{Component} from 'react';
import UpdatedComponent from './withCounter';
class Count extends Component{


render(){
  return (
    <div>
The count is {this.props.count}{this.props.name}<br/>
<button onClick={this.props.inc}>Click</button>
    </div>
  )
}

}

export default UpdatedComponent(Count);