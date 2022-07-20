import { useState } from "react";
import styled from "styled-components";
import { Category } from "../../types/Category";

type Props = {
    children?: React.ReactNode;
    value: string;
    onChange: (value: Category) => void;
}
const CategorySection: React.FunctionComponent<Props> = (props) => {
    const categoryMap = { '-': '支出', '+': '收入' }
    const [categoryList] = useState<(keyof typeof categoryMap)[]>(['-', '+']);
    // const [category, setCategory] = useState<(keyof typeof categoryMap)>('-'); // 保存当前状态的
    const category = props.value;
    return (<Wrapper>
        <ul>
            {categoryList.map((c) =>
                <li key={c}
                    className={category === c ? "selected" : ""}
                    onClick={() => {
                        props.onChange(c);
                    }}>{categoryMap[c]}
                </li>)}
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