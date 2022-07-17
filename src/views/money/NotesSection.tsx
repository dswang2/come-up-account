import React, { useRef } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";

type Props = {
    children?: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
}
const NotesSection: React.FunctionComponent<Props> = (props) => {
    // const [notes, setNotes] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const notes = props.value;
    return (<Wrapper>
        <Input label={"备注"}
               ref={inputRef}
               placeholder={"请填写备注"}
            // value={notes}
            // onChange={(e) => {
            //     props.onChange(e.target.value);
            // }}
               defaultValue={notes}
               onBlur={(e) => {
                   if (inputRef && inputRef.current) {
                       props.onChange(inputRef.current.value);
                   }
               }}/>
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