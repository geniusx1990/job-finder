import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { Welcome } from './pages/Welcome/Welcome';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export default function App() {
  


  return (
    <div className="App">
{/*       <ThemeProvider>
 */}    <Routes>
        <Route index element={<Welcome />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
{/*     </ThemeProvider>
 */}  </div>


  );
}    

