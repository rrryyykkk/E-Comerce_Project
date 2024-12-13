import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/Route";
import AuthProvider from "./auth/AuthProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={route} />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
