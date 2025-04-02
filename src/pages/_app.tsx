import { Outlet } from "react-router-dom";
import ReactQueryProvider from "../libs/reactQuery/ReactQueryProvider";

export default function App() {
  return (
    <main>
      <ReactQueryProvider>
        <Outlet />
      </ReactQueryProvider>
    </main>
  );
}
