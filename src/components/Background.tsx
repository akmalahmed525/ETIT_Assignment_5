import { FC, ReactNode } from "react";

import "./styles/background.css";

type Props = {
  children: ReactNode;
};
const Background: FC<Props> = ({ children }) => (
  <div className="background">{children}</div>
);

export default Background;
