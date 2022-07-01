import { Link } from "react-router-dom";
import styled from "styled-components";

import money from "icons/money.svg"

const NavWrapper = styled.nav`
  line-height: 24px; // 不特别设置的话，line-height等于font-size+行距，是文字实际占用尺寸，一般不直接改变标签大小，而是改变line-height
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25); // 给某一快区域加上阴影效果
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;

    > li {
      padding: 16px;
      flex-grow: 1; // flex布局占比放大
      text-align: center; // 文字居中
    }
  }
`;

const Nav = () => {
    return (<NavWrapper>
        <ul>
            <img src={money} alt=""/>
            <li><Link to="/tags">标签页</Link></li>
            <li><Link to="/money">记账页</Link></li>
            <li><Link to="/statistics">统计页</Link></li>
        </ul>
    </NavWrapper>);
}

export { Nav };