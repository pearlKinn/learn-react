import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/contexts/Theme";
import AuthProvider from "@/contexts/Auth";
import router from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Toaster/>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
