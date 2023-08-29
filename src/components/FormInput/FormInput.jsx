import { useId } from 'react';
import { oneOf, string } from 'prop-types';
import S from './FormInput.module.css';

export function FormInput({ type = 'text', name = null, label, ...restProps }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
      className={S.label}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={S.input}
        {...restProps}
      />
    </div>
  );
}

FormInput.propTypes = {
  type: oneOf(['text', 'password','number', 'email', 'search']),
  name: string.isRequired,
  label: string.isRequired,
};