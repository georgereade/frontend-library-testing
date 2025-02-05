import { Button as RacButton } from "react-aria-components";
import { button } from "./button.css.ts";

export interface IButtonStyledProps {
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface IProps {
  onPress?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

type Props = IButtonStyledProps & IProps;

const Button: React.FC<Props> = ({
  children,
  className = "",
  type = "button",
  fullWidth = false,
  onPress,
  ...rest
}) => (
  <RacButton
    type={type}
    onPress={onPress}
    className={`${button({ fullWidth })} ${className}`.trim()}
    {...rest}
  >
    {children}
  </RacButton>
);

export default Button;
