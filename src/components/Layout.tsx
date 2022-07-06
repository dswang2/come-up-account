import styled from "styled-components";
import { Nav } from "./Nav";

const Layout = (props: any) => {
    return (
        <Wrapper>
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1; // 膨胀指数
  overflow: auto;
`;

export {Layout};