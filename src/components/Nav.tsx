import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icon";

const NavWrapper = styled.nav`
  line-height: 24px; // 不特别设置的话，line-height等于font-size+行距，是文字实际占用尺寸，一般不直接改变标签大小，而是改变line-height
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25); // 给某一快区域加上阴影效果
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    > li {
      flex-grow: 1; // flex布局占比放大
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
      }

    }
  }
`;

const Nav = () => {
    return (<NavWrapper>
        <ul>
            <li>
                <Link to="/tags"><Icon name={"tag"}/>标签页</Link>
            </li>
            <li>
                <Link to="/money"><Icon name={"money"}/>记账页</Link></li>
            <li>
                <Link to="/statistics"><Icon name={"chart"}/>统计页</Link></li>
        </ul>
    </NavWrapper>);
}

export { Nav };