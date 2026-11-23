import Usefetch from "../services/usefetch"
import Card from "../commons/card";
import Input from "../commons/input";
import { useState } from "react";
export default function Mealcard() {

    const { data, loading, error } = Usefetch("https://dummyjson.com/products/category/groceries")
    console.log("Response:", { data })

    const [search, setSearch] = useState("")
    const onSearchchange = (e) => {
        setSearch(e.target.value)
    }

    const mealFilter = data?.products?.filter((product) => product.title.toLowerCase().includes(search.toLocaleLowerCase()))

    if (loading) {
        return <p>loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="p-1 m-1">
            <div className="flex justify-between p-1 m-1">
                <h1 className="font-bold text-2xl text-slate-400 md:text-orange-200 lg:text-red-300 py-2 px-2" > Products-List</h1>
                <Input search={search} onSearchchange={onSearchchange} />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 mt-4">
                {mealFilter?.map((product) => (
                    <Card key={product.id} images={product.images} title={product.title} price={product.price} rating={product.rating} availabilityStatus={product.availabilityStatus} />
                ))}
            </div>
        </div>
    );
};
