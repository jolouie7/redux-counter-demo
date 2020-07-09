import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchProducts } from "/ProductActions";

// Do i need props here in order to use props.disptach()?
const ProductList = (props) => {
  useEffect(() => {
    props.dispatch(fetchProducts());
  }, []);

  // I think line 12 to line 20 works
  const { error, loading, products } = props;

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(ProductList);
