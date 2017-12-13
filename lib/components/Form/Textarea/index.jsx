import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
  fieldId,
  fieldName,
  onChange,
  helpText,
  value,
  required,
}) => (
  <div className="form-group">
    <label htmlFor={fieldId}>{fieldName}</label>
    <textarea
      id={fieldId}
      className="form-control"
      onChange={onChange}
      required={required}
    >
      {value}
    </textarea>
    { helpText && <span className="help-block">{helpText}</span> }
  </div>
);

// eslint-disable-next-line
Textarea.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
};

// eslint-disable-next-line
Textarea.defaultProps = {
  onChange: null,
  helpText: null,
  value: null,
  required: false,
};

export default Textarea;
