import './App.css';

//componentes
import Header from './components/Header';
import ArticleOne from './components/ArticleOne';
import ArticleTwo from './components/ArticleTwo';
import Footer from './components/Footer';

function App() {
    
  return (
    <>
        <div>
          <Header />
        </div>
        <article>
          <ArticleOne />
          <ArticleTwo />
        </article>
        <Footer />
    </>
  );
}

export default App;
