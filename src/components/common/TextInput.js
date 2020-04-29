import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  // to handle the error once we need to add error wrapper as boostrap logic
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {/* We use the and operator to execute the second item if the first one is correct*/}
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};
// add default prop for the error
TextInput.defaultProps = {
  error: "", // by adding this we do not need to check aboce the existance of the error coz it already exists ;)
};

export default TextInput;
