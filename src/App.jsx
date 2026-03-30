import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductsHeading from "./components/Products/ProductsHeading/ProductsHeading";
import Stats from "./components/Stats/Stats";
import Products from "./components/Products/Products";
import Tab from "./components/Tab/Tab";

const fetchProductsData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProductsData();

  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <Stats></Stats>
        <ProductsHeading></ProductsHeading>
        <Tab></Tab>
        <Suspense
          fallback={
            <div className="flex justify-center w-full mt-5">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <Products productsPromise={productsPromise}></Products>
        </Suspense>
      </main>
      <footer>
        <Explore></Explore>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
