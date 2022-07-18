import styled from "styled-components";

type Props = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
    const {children, ...rest} = props;
    return (<Wrapper {...rest}>{props.children}</Wrapper>);
}

const Wrapper = styled.button`
  margin-left: auto;
  margin-right: auto;
  border: none;
  background: #767676;
  border-radius: 4px;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  color: white;
`;

export { Button };