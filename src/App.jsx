import WeaponsPage from "./pages/WeaponsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <WeaponsPage />
        </Router>
      </QueryClientProvider>
    </>
  );
};
export default App;
