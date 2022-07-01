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
      padding: 4px 0;
      flex-grow: 1; // flex布局占比放大
      text-align: center; // 文字居中
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
    return (<NavWrapper>
        <ul>
            <li>
                <Icon name={"tag"}/>
                <Link to="/tags">标签页</Link>
            </li>
            <li>
                <Icon name={"money"}/>
                <Link to="/money">记账页</Link></li>
            <li>
                <Icon name={"chart"}/>
                <Link to="/statistics">统计页</Link></li>
        </ul>
    </NavWrapper>);
}

export { Nav };