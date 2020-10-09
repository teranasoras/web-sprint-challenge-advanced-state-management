import {connect} from 'react-redux';
import React from 'react';
import Smurf from './smurf'


const SmurfList =(props)=>{
  console.log(props)
  return(
   
    <div className ='smurflist'>
        {props.list.map((item) =>(
            <Smurf props = {item}>
            </Smurf>
        ))}

    </div>
)};


const mapStateToProps = (state) =>{
    return(
      {
        list:state.smurfs
      }
    )
  }
  export default connect(mapStateToProps, {})(SmurfList);
  