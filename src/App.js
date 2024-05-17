import './App.css';
import LibraryRouter from './router/LibraryRouter';
import { LibraryContext } from './context/LibraryContext'
import Footer from './components/Footer';
import { useBooks } from './hooks/useBooks';

function App() {

  const books = useBooks();

  return (
      <LibraryContext.Provider value={{books}}>
        <LibraryRouter></LibraryRouter>
        <Footer />
      </LibraryContext.Provider>
  );
}

export default App;
