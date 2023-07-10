import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import SingleBlogPost from './components/SingleBlogPost';
import Error from './components/Error';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/blog/:slug' element={<SingleBlogPost />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
