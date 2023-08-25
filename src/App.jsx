import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/contexts/Theme";
import AuthProvider from "@/contexts/Auth";
import router from "./routes";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <div className="App">
              <RouterProvider router={router} />
            </div>
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </HelmetProvider>
    </>
  );
}

export default App;
