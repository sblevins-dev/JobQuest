import './App.css';
import Header from './components/header/Header';
import Layout from "./Layout";
import Home from './components/home/Home';
import Applications from './components/myApplications/Applications';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/*" element={<Applications />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
