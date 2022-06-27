import React from 'react';
import { Link } from 'react-router-dom';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import styled from 'styled-components';
import { Nav } from "./components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1; // 膨胀指数
  overflow: auto;
`;


function App() {
    return (
        <HashRouter>
            <Wrapper>
                <Main>
                    <Routes>
                        <Route>
                            <Route path="/" element={<Money/>}/> {/*默认页面*/}
                            <Route path="/tags" element={<Tags/>}/>
                            <Route path="/money" element={<Money/>}/>
                            <Route path="/statistics" element={<Statistics/>}/>
                            {/*错误页面*/}
                            <Route
                                path="*"
                                element={
                                    <main style={{ padding: "1rem" }}>
                                        <h1>404!</h1>
                                    </main>
                                }
                            />
                        </Route>
                    </Routes>
                </Main>
                <Nav/>
            </Wrapper>
        </HashRouter>
    );
}
function Tags() {
    return (
        <>
            <main>
                <h2>标签页</h2>
                <p>You can do this, I believe in you.</p>
            </main>
        </>
    );
}

function Money() {
    return (
        <>
            <main>
                <h2>记账页</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
        </>
    );
}

function Statistics() {
    return (
        <>
            <main>
                <h2>统计页</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
        </>
    );
}
export default App;
