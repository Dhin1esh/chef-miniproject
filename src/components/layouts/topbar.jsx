import Logo from "../../assets/images/Logo.webp";
import Input from "../commons/input";
export default function Topbar() {
    return (
        <div className="shadow-lg py-2 px-10 flex items-center justify-between bg-white border-2 border-slate-200 fixed w-full">
            <div>
                <h1>DashBoard</h1>
            </div>
            <div className="flex gap-5 items-center">
                <div>
                    <Input />
                </div>
                <div className="bg-black rounded-full p-1 shadow-md">
                    <img src={Logo} alt="" className="h-10 w-10" />
                </div>
            </div>

        </div>

    );
};
