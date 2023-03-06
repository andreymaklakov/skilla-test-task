import Header from "./components/header";
import Page from "./components/page";
import CallsPage from "./components/callsPage";
import SideBar from "./components/sideBar";
import { Route, Routes } from "react-router-dom";
import AppLoader from "./components/hoc/appLoader";
import WindowWrapper from "./components/windowWrapper";

function App() {
  return (
    <WindowWrapper>
      <Page>
        <SideBar />

        <div>
          <Header />

          <AppLoader>
            <Routes>
              <Route path="/calls" element={<CallsPage />} />
            </Routes>
          </AppLoader>
        </div>
      </Page>
    </WindowWrapper>
  );
}

export default App;
