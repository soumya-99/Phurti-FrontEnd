import './App.css';
import Category from './components/Category';
import NavigationBar from './components/NavigationBar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {' '}
      <Category />
      {' '}
      <Product />
    </div>
  );
}

export default App;
