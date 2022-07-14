import React from 'react';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import { TagList } from "./views/TagList";
import { Money } from "./views/Money";
import { Statistics } from "./views/Statistics";
import { NoMatch } from "./components/NoMatch";
import styled from 'styled-components';
import { Tag } from "./views/Tag";

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
                        <Route path="/tags" element={<TagList/>} />
                        <Route path="/tags/:id" element={<Tag/>}/>
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
