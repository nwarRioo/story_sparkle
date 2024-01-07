import { Route, Routes } from "react-router-dom";
import UsersPage from "./containers/UsersPage/UsersPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Layout from "./components/UI/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./containers/LoginPage/LoginPage";
import PostsPage from "./containers/PostsPage/PostsPage";
import "./sass/index.sass"
import HomePage from "./containers/HomePage/HomePage";


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}/>
        <Route element={<PrivateRoute />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id/posts" element={<PostsPage />} />
        </Route>
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
