import './styles.css';
import React from 'react';
const HomePage = React.lazy(() => import('./scenes/HomePage'));
import { Routes, Route } from 'react-router-dom';
const VideoGame = React.lazy(() => import('./scenes/VideoGame'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<VideoGame />} />
    </Routes>
  );
}
