import Usefetch from "../services/usefetch"
import Card from "../commons/card";
export default function Mealcard() {

    const { data, loading, error } = Usefetch("https://dummyjson.com/products/category/groceries")
    console.log("Response:", { data })

    if (loading) {
        return <p>loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="p-1 m-1">
            <div>
                <h1 className="font-bold text-2xl text-slate-400 py-2 px-2" > Products-List</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4">
                {data?.products?.map((product) => (
                    <Card key={product.id} images={product.images} title={product.title} price={product.price} rating={product.rating} availabilityStatus={product.availabilityStatus} />
                ))}
            </div>
        </div>
    );
};
