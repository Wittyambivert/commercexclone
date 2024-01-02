import { useRef } from "react";
import { Category, Footer, Hero, Navbar, Products } from "../components/public";
import AboutUs from "../components/public/AboutUs";
import Features from "../components/public/Features";
import Subscribe from "../components/public/Subscribe";
import FeaturedProducts from "../components/public/featured-products/FeaturedProducts";
import News from "../components/public/news/News";

export const Home = () => {
  const browseProducts = useRef(null);
  const scrollToProducts = (e) => {
    window.scrollTo({
      top: e.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex-col">
        <Navbar />
        <Hero onClick={() => scrollToProducts(browseProducts)} />
        <Category />
        <Products scroll={browseProducts} />
        <AboutUs />
        <FeaturedProducts />
        <Subscribe />
        <News />
        <Features />
        <Footer />
      </div>
    </>
  );
};
