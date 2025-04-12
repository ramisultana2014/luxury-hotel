import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  // CheckoutForm,
  ConfirmationPage,
  LandingPage,
  PageNotFound,
  Return,
  RoomDetails,
} from "./pages";
import { lazy, Suspense } from "react";
import { Skeleton } from "./components";
const CheckoutForm = lazy(() => import("./pages/CheckoutForm.tsx"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 20, //Specifies the duration (in milliseconds) that a query's data is considered "fresh."
      //cacheTime: 1000 * 60 * 30, //Determines how long unused query results stay in memory before being garbage-collected.
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <Skeleton />
              <Skeleton />
            </>
          }
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/roomDetails/:roomName" element={<RoomDetails />} />
            <Route path="/confirmationPage" element={<ConfirmationPage />} />
            <Route path="/checkout/:reservationID" element={<CheckoutForm />} />
            <Route path="/return" element={<Return />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12} // space between window and toaster
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 6000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "#000",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
