import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Events from './pages/Events';
// import About from './pages/About';
// import Contact from './pages/Contact';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="events" element={<Events />} />
            </Route>
        </Routes>
    )
}

export default App
