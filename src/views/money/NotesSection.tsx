import React, { useRef, useState } from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}
const NotesSection: React.FunctionComponent<Props> = (props) => {
    const [notes, setNotes] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    return (<Wrapper>
        <label>
            <span>备注</span>
            <input type="text"
                   ref={inputRef}
                   placeholder={"在这里添加备注"}
                   defaultValue={notes}
                   onBlur={(e) => {
                       // setNotes(e.target.value);
                       if(inputRef && inputRef.current){
                           setNotes(inputRef.current.value);
                       }
                   }}
            />
        </label>
    </Wrapper>);
}




const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
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
  }
`;

export { NotesSection }