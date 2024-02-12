import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TopFilmsPage } from './components/TopFilmsPage'
import { Header } from './components/Header'
import { FilmsPage } from './components/FilmsPage'
import { NewsPage } from './components/NewsPage'
import { FilmPage } from './components/FilmPage'
import { MainPage } from './components/MainPage'



function App() {
    
  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/top' element={<TopFilmsPage/>} />
            <Route path='/films' element={<FilmsPage/>} />
            <Route path='/news' element={<NewsPage/>}/>
            <Route path='film/:id' element={<FilmPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
