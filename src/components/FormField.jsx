import React from 'react';

function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  helperText,
  error,
  as = 'input',
  rows,
}) {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  const inputProps = {
    id: name,
    name,
    value,
    onChange: handleChange,
    placeholder,
    required,
  };

  return (
    <div style={{ width: '100%' }}>
      <label
        htmlFor={name}
        className={required ? 'label label--required' : 'label'}
      >
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea
          {...inputProps}
          rows={rows || 4}
          className="textarea"
        />
      ) : as === 'select' ? (
        <select
          {...inputProps}
          className="select"
        >
          {inputProps.children}
        </select>
      ) : (
        <input
          {...inputProps}
          type={type}
          className="input"
        />
      )}

      {helperText && !error && (
        <p className="helper-text">{helperText}</p>
      )}

      {error && (
        <p className="error-text">{error}</p>
      )}
    </div>
  );
}

export default FormField;
