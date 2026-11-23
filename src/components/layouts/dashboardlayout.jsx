import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { Outlet } from "react-router-dom";

export default function Dashboardlayout() {
    return (
        <div className=" flex h-full bg-slate-300">
            <Sidebar />

            <div className="flex flex-col flex-1 ">
                <Topbar />
                <main className="flex-1 mt-18 ml-56">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
