import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import ContactsModal from "./components/ContactsModal/ContactsModal"

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Category from "./pages/Category"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"

function App() {
  const [isContactsOpen, setIsContactsOpen] = useState(false)

  return (
    <>
      <Header onContactsClick={() => setIsContactsOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:categoryId" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
 <Footer />
      <ContactsModal
        isOpen={isContactsOpen}
        onClose={() => setIsContactsOpen(false)}
      />
    </>
  )
}

export default App