import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import SajuPage from './pages/SajuPage.tsx'
import PrivacyPolicy from './pages/policy/PrivacyPolicy.tsx'
import TermsOfService from './pages/policy/TermsOfService.tsx'
import AboutUs from './pages/policy/AboutUs.tsx'
import ContactUs from './pages/policy/ContactUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SajuPage />} />
        <Route path="/saju" element={<SajuPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
