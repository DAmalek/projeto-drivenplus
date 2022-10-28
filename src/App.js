import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";
import { UserContextProvider } from "./context/UserContext";
import LoginPage from "./pages/login/LoginPage";
import MembershipPage from "./pages/membership/MembershipPage";
import SignPage from "./pages/signin/SignPage";
import SubscriptionsPage from "./pages/subscriptions/SubscriptionsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscription/:membershipId" element={<MembershipPage />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
