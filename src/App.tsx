import { Route, Routes } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import './style.css';
import VacancyDetails from './components/VacancyDetails/VacancyDetails';

export default function App() {
  return (
    <div className="App">
 <Routes>
        <Route index element={<Welcome />} />
        <Route path="/vacancy/:id" element={<VacancyDetails />} />
        <Route path="*" element={<PageNotFound />} />
 </Routes>
    </div>

  );
}
