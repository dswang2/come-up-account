import React from 'react';
import { Link } from 'react-router-dom';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
function App() {
  return (
      <HashRouter>
          <nav><ul>
              <li><Link to="/tags">标签页</Link></li>
              <li><Link to="/money">记账页</Link></li>
              <li><Link to="/statistics">统计页</Link></li>
          </ul>
          </nav>
          <Routes >
              <Route>
                  <Route path="/" element={<Money />} /> {/*默认页面*/}
                  <Route path="/tags" element={<Tags />} />
                  <Route path="/money" element={<Money />} />
                  <Route path="/statistics" element={<Statistics />} />
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
