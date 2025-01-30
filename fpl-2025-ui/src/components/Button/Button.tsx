import { Button } from "react-aria-components";

export interface IButtonStyledProps {
  isDisabled?: boolean;
  fullwidth?: string;
  className: string;
  children?: React.ReactNode;
}

interface IProps {
  onPress?: () => void;
  type?: "button" | "submit" | "reset";
  width?: number;
}

type Props = IButtonStyledProps & IProps;

const MyButton: React.FC<Props> = ({
  children,
  className,
  type = "button",
  fullwidth,
  onPress,
  ...rest
}) => (
  <Button
    type={type}
    onPress={onPress}
    className={className}
    fullwidth={fullwidth}
    {...rest}
  >
    {children}
  </Button>
);

export default MyButton;
