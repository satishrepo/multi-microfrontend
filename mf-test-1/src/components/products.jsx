import { Button } from "my-react-lib";
export const Products = () => {
  const list = [
    { name: "shirt", price: 6600 },
    { name: "shoe", price: 4000 },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button label="Click me!" />
      {list.map((i) => (
        <div className="product" key={i.name}>
          <h5>
            {i.name} - {i.price}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Products;
