import products from "./assets/products.json"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

                {products.map(product =>
                <li key={product.sku} className="mb-2 list-none flex flex-col items-center gap-4">
                        <h3 className="text-xl font-bold">{product.description}</h3>
                        <div className="flex">
                            <Image
                                className="dark:invert"
                                src={product.image1}
                                alt=""
                                width={180}
                                height={38}
                                priority
                            />
                        </div>
                        <p className="flex gap-4 items-center">
                            <span className="line-through">£{product.ssp}</span>
                            <span className="text-xl font-bold">£{product.bloodstock}</span>
                        </p>
                        <Link className="py-4 px-8 uppercase bg-gradient-to-r bg-cyan-600 text-white rounded drop-shadow-lg" href={product.link ?? '#'}>Buy</Link>
                    </li>
                )}

            </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">Copyright &copy; Sound Service U.K. Ltd</footer>
    </div>
  );
}
