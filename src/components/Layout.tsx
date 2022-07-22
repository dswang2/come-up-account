import styled from "styled-components";
import { Nav } from "./Nav";
import React, { useEffect, useRef } from "react";

type Props = {
    children?: React.ReactNode;
    className?: string;
    scrollTop?:number;
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
            if(mainRef.current){
                mainRef.current.scrollTop = props.scrollTop!;
            }
        },0)
    },[props.scrollTop])
    return (
        <Wrapper>
            <Main ref={mainRef} className={props.className} data-x={"ddsw"}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    );
}

// 默认值
Layout.defaultProps = {
    scrollTop: 0,
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