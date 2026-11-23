export default function Input({ search, onSearchchange }) {
    return (
        <input
            type="text"
            value={search}
            onChange={onSearchchange}
            placeholder="Search pages..."
            className=" bg-slate-100 text-slate-700 text-sm px-4 py-2 pl-4 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 placeholder:text-slate-400"
        />
    );
};
