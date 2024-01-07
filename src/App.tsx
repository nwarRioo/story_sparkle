
import { Route, Routes } from "react-router-dom";
import UsersPage from "./containers/UsersPage/UsersPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./containers/LoginPage/LoginPage";


const App = () => {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UsersPage />} />
        </Route>
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
