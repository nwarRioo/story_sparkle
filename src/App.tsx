
import { Route, Routes } from "react-router-dom";
import UsersPage from "./containers/UsersPage/UsersPage";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Layout from "./components/components/Layout/Layout";


const App = () => {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/" element={<UsersPage />} />
          {/* <Route path="/users/:id/posts" element={<PostsPage />} /> */}
        {/* </Route> */}
        {/* <Route path={"/login"} element={<LoginPage/>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
