import { useState } from "react"
import Header from "./component/Header"
import NoteList from "./component/NoteList"
import Write from "./component/Write"
import Edit from "./component/Edit"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
