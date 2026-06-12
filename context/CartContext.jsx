import {
  createContext,
  useState,
  useEffect
} from "react";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  const [requests, setRequests] =
    useState([]);

  const [isAuthenticated,
    setIsAuthenticated] =
    useState(false);

  useEffect(() => {

    const savedRequests =
      JSON.parse(
        localStorage.getItem(
          "requests"
        )
      ) || [];

    const savedLogin =
      JSON.parse(
        localStorage.getItem(
          "login"
        )
      ) || false;

    setRequests(savedRequests);
    setIsAuthenticated(savedLogin);

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "requests",
      JSON.stringify(requests)
    );

  }, [requests]);

  useEffect(() => {

    localStorage.setItem(
      "login",
      JSON.stringify(
        isAuthenticated
      )
    );

  }, [isAuthenticated]);

  const addRequest = (dog) => {
    setRequests((prev) => [
      ...prev,
      dog
    ]);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CartContext.Provider
      value={{
        requests,
        addRequest,
        isAuthenticated,
        login,
        logout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;