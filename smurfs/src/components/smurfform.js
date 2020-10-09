import React, {useState} from 'react';
import {SubmitSmurf} from '../actions';
import {connect} from 'react-redux';



const emptysmurf = {
    name: '',
    age: '',
    height: '',
}
const SmurfForm = (props) =>{
const [formValues, setFormValues]= useState(emptysmurf);

const change = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
}
    const add = evt => {
        evt.preventDefault();
        // const newSmurf = {
        //   name: formValues.name.trim(),
        //   role: formValues.age.trim(),
        //   email: formValues.height.trim(),
        //   id: Date.now,
        // }
        (props.SubmitSmurf(formValues))
    }

return(
<div className = 'theform'>
    <form onSubmit={add}>
<input
          type="text"
          name='name'
          value={formValues.name}
          onChange={change}
          placeholder="Name the smurf"
        />
<input
          type="text"
          name='age'
          value={formValues.age}
          onChange={change}
          placeholder="Whats his age"
        />
<input
          type="text"
          name='height'
          value={formValues.height}
          onChange={change}
          placeholder="How tall is he"
        />

<button>Add this new smurf</button>
</form>
</div>


);
}

const mapStateToProps = (state) =>{
    return(
        {}
    )
  }
  export default connect(mapStateToProps, {SubmitSmurf})(SmurfForm);