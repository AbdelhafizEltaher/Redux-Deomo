import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import AboutUs from './pages/aboutUs/aboutUs';
import ContactUs from './pages/contactUs/contactUs';
import Articles from './pages/articles/articles';
import { useSelector } from 'react-redux';
import { CounterProvider } from "./contexts/counter";
import { useState } from "react";
import Counter from "./pages/counter/counter";
import NotFound from './pages/notFound/notFound';
import { AuthProvider } from "./contexts/auth";
function App() {

  const language = useSelector((state) => state.language.lang)
  const [counter, setCounter] = useState(0)
  const [isAuth, setAuth] = useState(true)

  return (
    <>
      <Router>
      <AuthProvider value={{isAuth,setAuth}} >
        <CounterProvider value={{ counter, setCounter }}>
         

          <Header />
          <div dir={(language == "en") ? 'ltr' : 'rtl'} className={`container my-5 ${(language == "en") ? 'text-left' : "text-right"}`}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs/*" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>



          </div>

        </CounterProvider>
        <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
