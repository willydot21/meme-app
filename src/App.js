
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TemplatePage from './pages/template-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/"
            element={ <Navigate to="/english" /> }
          /> 

          <Route path="/:language"
            element={
              <TemplatePage
                section_name="latest"
              />
            }
          />  

          <Route path="/:language/search"
            element={
              <TemplatePage
                section_name="search"
              />
            }
          />  

          <Route path="/:language/top"
            element={
              <TemplatePage
                section_name="top"
              />
            }
          />  

          <Route path="/:language/random"
            element={
              <TemplatePage
                section_name="random"
              />
            }
          /> 

          <Route path="/:language/tag"
            element={
              <TemplatePage
                section_name="tag"
              />
            }
          />

          <Route path="/:language/latest"
            element={
              <TemplatePage
                section_name="latest"
              />
            }
          />   

        </Routes>
      </BrowserRouter>
    </div>
  ); 

  /*
      This code could be simplified using ":route"
      inside route component path parameter, but i think which
      this is more readable, i save abstractions or so i think.
  */
}

export default App;
