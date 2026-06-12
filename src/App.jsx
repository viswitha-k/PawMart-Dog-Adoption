import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import About from "../pages/About.jsx";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/Checkout.jsx";
import DogPage from "../pages/DogPage.jsx";
import DogInfo from "../pages/DogInfo.jsx";
import AdoptionGuide from "../pages/AdoptionGuide.jsx";
import Success from "../pages/Success.jsx";
import Contact from "../pages/Contact.jsx";

import ProtectedRoute from "../components/ProtectedRoute.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

function App() {

  return (

    <BrowserRouter>

      <ErrorBoundary>

        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dog/:id"
            element={
              <ProtectedRoute>
                <DogPage />
              </ProtectedRoute>
            }
          >

            <Route
              path="info"
              element={<DogInfo />}
            />

            <Route
              path="adoption"
              element={<AdoptionGuide />}
            />

          </Route>

        </Routes>

      </ErrorBoundary>

    </BrowserRouter>

  );
}

export default App;