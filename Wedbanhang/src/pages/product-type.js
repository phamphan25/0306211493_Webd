import Header from "../components/header";
import Footer from "../components/footer";
import CardType from "../components/type-card";

export default function ProductType() {
  const list_pdtype = [
    {
      name: "IPhone ",
      list_pd: [
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
      ],
    },
    {
      name: "SamSung",
      list_pd: [
        {
          pic: "a5.png",
          name: "Samsung",
          price: 9000,
        },
        {
          pic: "a6.png",
          name: "Samsung",
          price: 23000,
        },
        {
          pic: "a7.png",
          name: "Samsung",
          price: 25000,
        },
        {
          pic: "a8.png",
          name: "Samsung",
          price: 1000,
        },
      ],
    },
  ];

  const listPDType = list_pdtype.map(function (item) {
    return <CardType data={item} />;
  });

  return (
    <>
      <Header />
      {listPDType}
      <Footer />
    </>
  );
}
