import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import './style.css';

export default function App() {
  return (
    <div className="App">
 <Routes>
        <Route index element={<Welcome />} />
        <Route path="*" element={<PageNotFound />} />
 </Routes>
    </div>

  );
}
