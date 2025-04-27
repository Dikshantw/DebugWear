import ProductList from "@/components/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Home = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals" limit={4} />
    </>
  );
};

export default Home;
