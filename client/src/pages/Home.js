import Section from "../components/ui/Section";
import Category from "../components/ui/Category";
import Product from "../components/ui/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [activeCategory, setActiveCategory] = useState("sve");
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  useEffect(() => {
    const getCategories = async () => {
      var allCategories = [{ name: "sve" }];
      const requestURL = "http://localhost:5000/api/categories/";
      const categoriesRequest = await axios.get(requestURL);
      var categories = categoriesRequest.data.results;
      categories.map((category) => {
        allCategories.push(category);
      });
      setCategories(allCategories);
    };
    const getProducts = async () => {
      const requestURL = "http://localhost:5000/api/products/";
      const productsRequest = await axios.get(requestURL);
      const products = productsRequest.data.results;
      setProducts(products);
      setFilteredProducts(products);
    };
    getCategories();
    getProducts();
  }, []);
  useEffect(() => {
    const filterProducts = () => {
      var filteredProducts = [];
      if (activeCategory !== "sve") {
        filteredProducts = products.filter(function (product) {
          return activeCategory.indexOf(product.category) > -1;
        });
      } else {
        filteredProducts = products;
      }
      setFilteredProducts(filteredProducts);
    };
    filterProducts();
  }, [activeCategory]);
  return (
    <Section>
      <ul className="flex">
        {categories &&
          categories.map((category) => {
            return (
              <Category
                category={category}
                onClick={() => setActiveCategory(category.name)}
              />
            );
          })}
      </ul>
      <div className="border border-slate-150 p-4 my-12">
        <h1 className="text-xl">
          <span>Odabrana kategorija: </span>
          <b className="capitalize">{activeCategory}</b>
        </h1>
      </div>
      <ul className="grid grid-cols-3 gap-8 justify-center mx-auto w-content">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <Product product={product} />;
          })}
      </ul>
    </Section>
  );
};

export default Home;
