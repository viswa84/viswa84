import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditMusicRecord from './EditMusicRecord'
import Login from './Login'
import MusicRecords from './MusicRecords'
import SingleMusicRecord from './SingleMusicRecord'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<MusicRecords/>}/>
        <Route path='/music/:id' element={<SingleMusicRecord/>}/>
        <Route path='/music/:id/edit' element={<EditMusicRecord/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default MainRoute