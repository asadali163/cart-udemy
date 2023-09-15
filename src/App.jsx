// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./content";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <main className="loading" style={{ marginTop: "8rem" }}></main>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
