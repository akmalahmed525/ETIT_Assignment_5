import { FC, memo, MouseEventHandler } from "react";

import "./styles/button.css";

type Props = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const Button: FC<Props> = memo(({ title, onClick }) => (
  <button onClick={onClick}>
    <h3>{title}</h3>
  </button>
));

export default Button;
