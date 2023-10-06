import Card from "../components/card";

export default function CardType(props) {
  const PDlist = props.data.list_pd.map(function (item) {
    return <Card data={item} />;
  });
  return (
    <>
      <h2 className="name-PDtype ">{props.data.name}</h2>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {" "}
        {PDlist}
      </div>
    </>
  );
}
