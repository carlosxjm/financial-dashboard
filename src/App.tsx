import { ChakraProvider } from "@chakra-ui/react";
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Route, Routes } from "react-router-dom";
import { ResourceList } from "./pages/ResourceList/ResourceList";
import { Layout } from "./components/Layout/Layout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";


const App = () => {
  return (
    <ChakraProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/resources" element={<ResourceList />} />

            <Route path="*" element={<ErrorPage title="Page not found"/>} />
          </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
