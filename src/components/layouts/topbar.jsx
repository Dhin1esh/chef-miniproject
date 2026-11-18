import Logo from "../../assets/images/Logo.webp";
export default function Topbar() {
    return (
        <div className="shadow-lg py-2 px-10 flex items-center justify-between bg-white border-2 border-slate-200">
            <div>
                <h1>DashBoard</h1>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <input
                        type="text"
                        placeholder="Search pages..."
                        className=" bg-slate-100 text-slate-700 text-sm px-4 py-2 pl-4 rounded-lg border border-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-200 placeholder:text-slate-400"
                    />
                </div>
                <div className="bg-black rounded-full p-1 shadow-md">
                    <img src={Logo} alt="" className="h-10 w-10" />
                </div>
            </div>

        </div>

    );
};
