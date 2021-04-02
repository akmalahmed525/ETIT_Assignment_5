import { FC, memo, ChangeEventHandler } from "react";

import './styles/checkbox.css'

type Props = {
  name: string;
  inputLabel: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const CheckBox: FC<Props> = memo(({ name, inputLabel, onChange }) => (
  <div className="checkbox-div">
    <input id={name} type="checkbox" onChange={onChange} />
    <label htmlFor={name}>{inputLabel}</label>
  </div>
));

export default CheckBox;
