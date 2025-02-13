import { button } from "./button.css.ts";

export interface IButtonStyledProps {
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  slot?: string;
}

interface IProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  transfer?: boolean;
  variant?: "primary" | "secondary" | "tertiary" | "filled" | "ghost";
}

type Props = IButtonStyledProps & IProps;

const FPLButton: React.FC<Props> = ({
  children,
  className = "",
  type = "button",
  fullWidth = false,
  variant,
  transfer = false,
  onClick,
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`${button({
      fullWidth,
      variant,
      transfer,
    })} ${className}`.trim()}
    {...rest}
  >
    {children}
  </button>
);

export default FPLButton;
