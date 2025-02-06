import { Button as RacButton } from "react-aria-components";
import { button } from "./button.css.ts";

export interface IButtonStyledProps {
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  slot?: string;
}

interface IProps {
  onPress?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  transfer?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "filled" | "ghost";
}

type Props = IButtonStyledProps & IProps;

const Button: React.FC<Props> = ({
  children,
  className = "",
  type = "button",
  fullWidth = false,
  variant,
  transfer = false,
  onPress,
  ...rest
}) => (
  <RacButton
    type={type}
    onPress={onPress}
    className={`${button({
      fullWidth,
      variant,
      transfer,
    })} ${className}`.trim()}
    {...rest}
  >
    {children}
  </RacButton>
);

export default Button;
