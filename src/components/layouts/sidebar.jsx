
import Logo from "../../assets/images/Logo.webp";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    CreditCard,
    PlusCircle
} from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-800 text-white p-5 flex flex-col">

            {/* Logo */}
            <div className="flex justify-center items-center mb-10">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-32 h-16 object-contain"
                />
            </div>

            {/* Menu Heading */}
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
                Main Menu
            </p>

            {/* Navigation Links */}
            <nav className="space-y-3">

                <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>

                <Link
                    to="/meal-card"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition"
                >
                    <CreditCard size={20} />
                    <span>Meal Card</span>
                </Link>

                <Link
                    to="/meal-create"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition"
                >
                    <PlusCircle size={20} />
                    <span>Meal Create</span>
                </Link>

            </nav>

            {/* Footer */}
            <div className="mt-auto border-t border-slate-600 pt-4">
                <p className="text-xs text-slate-400 text-center">
                    Meal Management System
                </p>
            </div>

        </div>
    );
}
