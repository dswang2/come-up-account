import React, { LegacyRef } from "react";
import styled from "styled-components";

type Props = {
    label: string;
    children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef((props: Props, ref: LegacyRef<HTMLInputElement>) => {
    const { label, children, ...rest } = props;
    return (<Wrapper>
        <span>{label}</span>
        <input {...rest} ref={ref}/>
    </Wrapper>);
});
const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  > span {
    font-size: 16px;
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block; // 宽度可以顶一整行，默认另一起行
    width: 100%;
    height: 72px;
    background: none;
    border: none;
  }
`;
export { Input };