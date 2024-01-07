
import { Route, Routes } from "react-router-dom";
import UsersPage from "./containers/UsersPage/UsersPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./containers/LoginPage/LoginPage";
import PostsPage from "./containers/PostsPage/PostsPage";


const App = () => {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/story_sparkle" element={<UsersPage />} />
          <Route path="/story_sparkle/users/:id/posts" element={<PostsPage />} />
        </Route>
        <Route path={"/story_sparkle/login"} element={<LoginPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
