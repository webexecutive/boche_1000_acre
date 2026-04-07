import useNetworkStatus from "./hooks/useNetworkStatus";

function App() {
  const isOnline = useNetworkStatus();

  return (
    <>
      {!isOnline && (
        <div className="fixed top-0 w-full bg-red-500 text-white text-center p-2 z-50">
          You are offline. Reconnecting...
        </div>
      )}

      <BrowserRouter>
        <ScrollToTop />
        {/* your routes */}
      </BrowserRouter>
    </>
  );
}