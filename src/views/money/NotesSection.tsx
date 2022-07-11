import React, { useRef, useState } from "react";
import styled from "styled-components";

// const Button2 = React.forwardRef((props, ref) => {
//     return <input ref={ref} {...props} />;
// })

type Props = {
    children?: React.ReactNode;
}
const NotesSection: React.FunctionComponent<Props> = (props) => {
    const [notes, setNotes] = useState('');
    const inputRef = useRef(null);
    return (<Wrapper>
        <label>
            <span>备注</span>
            <input type="text"
                   ref={inputRef}
                   placeholder={"在这里添加备注"}
                   value={notes}
                   onChange={(e) => {
                       setNotes(e.target.value);
                       // if(inputRef && inputRef.current){
                       //     setNotes(inputRef.current.value);
                       // }
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