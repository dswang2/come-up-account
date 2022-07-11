import { useState } from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
}
const CategorySection: React.FunctionComponent<Props> = () => {
    const categoryMap = { '-': '支出', '+': '收入' }
    const [category, setCategory] = useState<(keyof typeof categoryMap)>('-'); // 保存当前状态的
    const [categoryList, setCategoryList] = useState<(keyof typeof categoryMap)[]>(['-', '+']);
    return (<Wrapper>
        <ul>
            {categoryList.map((c) =>
                <li key={c}
                    className={category == c ? "selected" : ""}
                    onClick={() => {
                        setCategory(c);
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