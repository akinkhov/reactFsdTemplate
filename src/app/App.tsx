import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { Header } from '@/widgets/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
