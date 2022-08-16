import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { PaginaPadrao } from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { Sobre } from 'pages/Sobre/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio/>} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}