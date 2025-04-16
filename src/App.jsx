
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Header from './components/Header'
function App() {


  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#52c41a",
            colorInfo: "#52c41a",
          },
        }}
      >
        <Header/>
        {/* <div className='app_block'>
          <Side_menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/explore/:id' element={<Explorer_one />} />
          </Routes>
        </div> */}
      </ConfigProvider>

    </>
  )
}

export default App
