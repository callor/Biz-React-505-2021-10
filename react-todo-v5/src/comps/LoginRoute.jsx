import { BrowserRouter } from "react-router-dom";

const LoginRoute = ({ children }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>{children}</BrowserRouter>
  );
};

export default LoginRoute;
