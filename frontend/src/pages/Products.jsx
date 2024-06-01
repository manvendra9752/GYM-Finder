import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { AiOutlineSearch } from "react-icons/ai"; // Import search icon
import axios from "axios";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/products/getProducts"
      );
      setAllProducts(response.data);
      setFilteredProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, allProducts]);

  const filterProducts = () => {
    const filtered = allProducts.filter((product) =>
      product.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div
    // style={{
    //   backgroundImage:
    //     "url('https://img.freepik.com/free-photo/digital-art-international-women-s-day-celebration-women-s-rights_23-2151368508.jpg?size=626&ext=jpg')",
    //   backgroundPosition: "top",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundAttachment: "fixed",
    //   opacity: "1",
    //   height: "100%",
    // }}
    >
      <div className="md:max-w-screen-xl sm:max-w-screen-lg max-w-screen-md items-center justify-center mx-auto sm:px-10 p-4 h-full md:pb-10 sm:pb-10 pb-12 min-h-full">
        <div className="flex justify-center items-center mb-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 transition duration-300 hover:border-purple-500"
            />
            <AiOutlineSearch className="absolute top-[14px] right-4 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 cursor-pointer">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, i) => (
              <Item
                key={i}
                username={item.username}
                userId={item.userId}
                profile={item.profile}
                _id={item._id}
                caption={item.caption}
                imageUrl={item.imageUrl}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center">
              <img
                src="https://ouch-cdn2.icons8.com/lmIhjGb08SHwj2F42VBILBiofIxtSePyKKuteXtoUxA/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDQ5/L2FhOGJjN2ZkLTY3/ZmEtNGM4OC1iYWFm/LTRjNDgwZGJmNjQ3/Yy5zdmc.png"
                alt="No Data"
                className="mb-4"
              />
              <p className="text-2xl font-bold ">No post found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
