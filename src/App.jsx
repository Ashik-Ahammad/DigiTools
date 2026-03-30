import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductsHeading from "./components/Products/ProductsHeading/ProductsHeading";
import Stats from "./components/Stats/Stats";
import Products from "./components/Products/Products";
import Tab from "./components/Tab/Tab";
import Cart from './components/Cart/Cart';
import { ToastContainer } from "react-toastify";

const fetchProductsData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProductsData();
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <ProductsHeading></ProductsHeading>
        <Tab activeTab={activeTab}
          handleTabChange={handleTabChange} carts={carts}></Tab>
        {activeTab === "products" && (
          <Suspense
            fallback={
              <div className="flex justify-center w-full mt-5 mb-5">
                <span className="loading loading-bars loading-xl text-[#4F39F6]"></span>
              </div>
            }
          >
            <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts}></Products>
          </Suspense>
        )}
        {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
        <Stats></Stats>
      </main>
      <footer>
        <Explore></Explore>
        <Footer></Footer>
        <ToastContainer position="top-right" autoClose={2000} />
      </footer>
    </>
  );
}

export default App;
