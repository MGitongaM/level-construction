
import ImageView from "@/components/NextCloudinary/ImageView";
import { products } from "@/staticData/ProductsPage/Products";

import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const Item = products.find((item) => item.id == parseInt(product));
  const relatedProducts=products.slice(0,5)
  
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {Item != undefined ? (
          <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8">
            <div className="w-full md:w-4/12  space-y-12">
            <p className="text-2xl font-semibold pt-10">{Item.title}</p>
              
              <ImageView
                imageSrc={Item.imagSrc}
                height={800}
                width={800}
                alt={Item.title}
                // classNames="object-contain h-96 w-full bg-slate-100 hover:bg-slate-200 rounded-lg p-1"
                classNames="object-contain h-96 w-full bg-teal-50 hover:bg-teal-50 rounded-lg p-1"
              />
            </div>
            <div className="w-full md:w-5/12">
              <p className="leading-7 px-4">{Item.details}</p>
              <div
                className="py-8 px-4 prose"
                dangerouslySetInnerHTML={{ __html: Item.moreDetails }}
              ></div>
            </div>
          </div>
        ) : null}
      <div className=" pt-40 pl-0 md:pl-20">
        <p className="text-xl font-bold pb-10">Related Products</p>
        <div className="flex flex-wrap justify-evenly items-start gap-x-2 gap-y-20">
          {relatedProducts.map((product) => (
            // <Link href={`products/${product.id}`} key={product.id} className="w-2/12">
            (<Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-5/12 md:w-2/12"
              >
              <div >
                <ImageView
                  imageSrc={product.imagSrc}
                  height={800}
                  width={800}
                  alt={product.title}
                  classNames="object-contain h-64 w-full bg-teal-50 hover:shadow-lg rounded-lg p-1"
                />
                <div className="text- px-8 pt-4">
                  {/* <p className="text-lg font-semibold">KSH</p> */}
                  <p className="text- text-center font-semibold">
                    {product.title}
                  </p>
                </div>
              </div>
            </Link>)
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}