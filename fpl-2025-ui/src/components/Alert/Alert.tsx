const AlertWrap = styled.div`
  margin: ${(props) => props.theme.space[2]};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    margin-right: 0;
    margin-left: 0;
  }
`;

const StyledAlert = styled.div<IStyleProps>`
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[4]}`};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.fantasy};
  text-align: ${(props) => props.textAlign};

  ${(props) =>
    props.isInline &&
    css`
      display: inline-block;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      background-color: ${props.theme.colors.error};
      color: white;
    `}
  
   ${(props) =>
    props.type === "info" &&
    css`
      color: white;
    `}

  ${(props) =>
    (props.copnr || props.copnr === 0) &&
    css`
      background-color: ${props.theme.colors.elementStatus[props.copnr].bg};
      color: ${props.theme.colors.elementStatus[props.copnr].color};
    `}
`;

const AlertText = styled.div<IStyleProps>`
  color: currentColor;
`;

export const AlertItem = styled.p`
  margin-top: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[1]};
  color: currentColor;
`;

export const AlertGroup = styled.div`
  margin-top: ${({ theme }) => theme.space[3]};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;

interface IStyleProps {
  copnr?: number | null;
  isInline?: boolean;
  type?: "default" | "error" | "news" | "info";
  textAlign?: "left" | "center";
}

interface IProps extends IStyleProps {
  children: React.ReactNode;
}

const Alert: React.FC<IProps> = ({
  children,
  copnr = null,
  isInline = false,
  textAlign = "center",
  type = "default",
}) => (
  <AlertWrap>
    <StyledAlert
      copnr={copnr}
      isInline={isInline}
      type={type}
      textAlign={textAlign}
    >
      <AlertText type={type}>{children}</AlertText>
    </StyledAlert>
  </AlertWrap>
);

export default Alert;
