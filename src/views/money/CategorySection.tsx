import { useState } from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}
const CategorySection: React.FunctionComponent<Props> = () => {
    const [category, setCategory] = useState('-');
    return (<Wrapper>
        <ul>
            <li className={category == '-' ? "selected" : ""}
                onClick={() => {
                    setCategory('-');
                }}>支出
            </li>
            <li className={category == '+' ? "selected" : ""}
                onClick={() => {
                    setCategory('+');
                }}>收入
            </li>
        </ul>
    </Wrapper>);
}
const Wrapper = styled.section`
  > ul {
    display: flex;
    background: #c4c4c4;
    font-size: 24px;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0px;
        width: 100%;
        left: 0;
      }
    }
  }
`;

export { CategorySection }