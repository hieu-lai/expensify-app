import React from 'react';

const Option = (props) => (
  <div>
    <div>
      {props.optionText}
    </div>  
    <button
      className="button button--link" 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
); 


export default Option;