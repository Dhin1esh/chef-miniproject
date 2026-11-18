import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { Outlet } from "react-router-dom";

export default function Dashboardlayout() {
    return (
        <div className=" flex h-screen bg-slate-200">
            <Sidebar />

            <div className="flex flex-col flex-1 ">
                <Topbar />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
