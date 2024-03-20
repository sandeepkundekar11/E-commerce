import Navbar from "../NavBar";
import EmptyCard from "./EmptyCard";
import ProductDetailCard from "./ProductDetailCard";
import ProductPriceCard from "./ProductPriceCard";
import ProductSendAddress from "./ProductSendAddress";

const ProductsCheckoutComp = () => {
  return (
    <>
      <Navbar />
      <div class="flex min-h-screen max-h-full w-full flex-wrap items-start justify-center m-auto bg-slate-100 p-2 pt-20">
        {/* <!-- emptyCard --> */}
        {/* <EmptyCard /> */}

        {/* <!-- added Product card --> */}
        <div class="addtoCard flex w-11/12 flex-col md:flex-row">
          <div class="ProductsCard h-auto w-full md:w-3/5">
            {/* <!-- head --> */}
            <div class="flex h-12 w-full items-center justify-center bg-white">
              <h1 class="-mb-3 w-60 border-b-2 border-b-blue-400 pb-1 text-center text-xl font-medium text-blue-500">
                E-Shop
              </h1>
            </div>
            {/* <!-- address --> */}
            <ProductSendAddress />
            {/* <!--added Procuts Details --> */}
            <div className="w-full">
              <ProductDetailCard />
            </div>
          </div>

          {/* <!-- price Card --> */}
          <div>
            <ProductPriceCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCheckoutComp;
