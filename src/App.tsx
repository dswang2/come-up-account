import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Money } from "./views/Money";
import { Tags } from "./views/Tags";
import { Statistics } from "./views/Statistics";
import { NoMatch } from "./components/NoMatch";
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
    return (
        <AppWrapper>
            <HashRouter>
                <Routes>
                    <Route>
                        <Route path="/" element={<Money/>}/> {/*默认页面*/}
                        <Route path="/tags" element={<Tags/>}/>
                        <Route path="/money" element={<Money/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                        {/*错误页面*/}
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </AppWrapper>
    );
}
export default App;
