import React from 'react';


const Smurf= (props) =>{
    console.log(props)
    return(
        <div className = "smurf">
            <p>Name: {props.props.name}</p>
            <p>age: {props.props.age}</p>
            <p>height: {props.props.height}</p>
        </div>
    )
}

export default Smurf;