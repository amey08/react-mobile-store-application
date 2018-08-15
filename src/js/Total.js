import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Total extends Component{
    render(){
        return(
         <div>
            <h3>Total Cash: {this.props.value}</h3>
         </div>   
        );
    }
}
Total.propTypes={
    value : PropTypes.number
}
export default Total;