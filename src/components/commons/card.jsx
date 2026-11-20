export default function Card({ title, images, availabilityStatus, rating, price }) {
    return (
        <div className="rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
            <div className="bg-zinc-100">
                <img src={images} alt={title} className="w-full h-48 sm:h-52 object-cover" loading="lazy" />
                <h1 className="font-bold text-base sm:text-lg p-3 line-clamp-1">{title}</h1>
                <div className="flex flex-wrap items-center justify-between font-semibold gap-1 p-3 text-xs sm:text-sm pt-0">
                    <span className=" px-2.5 py-1 bg-pink-200 text-sm text-pink-500 rounded-md">{availabilityStatus}</span>
                    <span className=" px-2.5 py-1 bg-green-200 text-sm text-green-500 rounded-md">Price:{price}</span>
                    <span className=" px-2.5 py-1 bg-yellow-200 text-sm text-yellow-500 rounded-md">Rating:{rating}</span>
                </div>
            </div>
        </div >
    );
};
