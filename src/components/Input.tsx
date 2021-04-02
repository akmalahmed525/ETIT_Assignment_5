import { FC, memo, ChangeEventHandler } from "react";

import "./styles/input.css";

type Props = {
  name: string;
  type?: string;
  inputLabel: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const Input: FC<Props> = memo(
  ({ name, inputLabel, placeholder, type, onChange }) => (
    <div className="input-div">
      <label htmlFor={name}>{inputLabel}</label>
      <br />
      <input
        className="input-field"
        id={name}
        type={type}
        onChange={onChange}
        {...(placeholder ? { placeholder } : { placeholder: inputLabel })}
      />
    </div>
  )
);

export default Input;
