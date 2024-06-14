import './App.css'
import Navbar from './compontents/Navbar'
import Aside from './compontents/Aside'
import  Content  from './compontents/Content'

export default function App() {

  return (
    <main className='w-full min-h-screen grid grid-cols-1 lg:grid-cols-[13%_auto] grid-rows-[3.2rem_auto]'>
      <Navbar />
      <Aside />
      <Content />
    </main>
  )
}


