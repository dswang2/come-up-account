import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icon";

const NavWrapper = styled.nav`
  background: white;
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
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
    return (<NavWrapper>
        <ul>
            <li>
                <NavLink to="/tags" className={({ isActive }) =>
                    isActive ? "selected" : undefined
                }><Icon name={"tag"}/>标签页</NavLink>
            </li>
            <li>
                <NavLink to="/money" className={({ isActive }) =>
                    isActive ? "selected" : undefined
                }><Icon name={"money"}/>记账页</NavLink></li>
            <li>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? "selected" : undefined
                }><Icon name={"chart"}/>统计页</NavLink></li>
        </ul>
    </NavWrapper>);
}

export { Nav };