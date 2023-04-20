import 'antd/dist/reset.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home';
import './App.css'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient()

// import { feedPlaces } from './api/index';
// feedPlaces();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Home/>
    </QueryClientProvider>
  
  );
}

export default App
