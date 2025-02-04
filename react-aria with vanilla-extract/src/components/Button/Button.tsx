import { Button as RacButton } from "react-aria-components";

export interface IButtonStyledProps {
  isDisabled?: boolean;
  className: string;
  children?: React.ReactNode;
}

interface IProps {
  onPress?: () => void;
  type?: "button" | "submit" | "reset";
  width?: number;
}

type Props = IButtonStyledProps & IProps;

const Button: React.FC<Props> = ({
  children,
  className,
  type = "button",

  onPress,
  ...rest
}) => (
  <RacButton type={type} onPress={onPress} className={className} {...rest}>
    {children}
  </RacButton>
);

export default Button;
