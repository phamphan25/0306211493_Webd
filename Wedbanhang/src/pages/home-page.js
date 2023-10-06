import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Card from "../components/card";
import { useEffect } from "react";
import { json } from "react-router-dom";

export default function HomePage() {
  const list_pd = [
    {
      pic: "a1.png",
      name: "Iphone",
      price: 5000,
    },
    {
      pic: "a2.png",
      name: "Iphone",
      price: 35000,
    },
    {
      pic: "a3.png",
      name: "Iphone",
      price: 15000,
    },
    {
      pic: "a4.png",
      name: "Iphone",
      price: 7000,
    },
    {
      pic: "a6.png",
      name: "Samsung",
      price: 9000,
    },
    {
      pic: "a5.png",
      name: "Samsung",
      price: 23000,
    },
    {
      pic: "a8.png",
      name: "Samsung",
      price: 25000,
    },
    {
      pic: "a7.png",
      name: "Samsung",
      price: 1000,
    },
  ];

  const PDlist = list_pd.map(function (item) {
    return <Card data={item} />;
  });
  return (
    <>
      <Header />
      <Banner />
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {" "}
        {PDlist}
      </div>
      <Footer />
    </>
  );
}
