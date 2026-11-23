
import Logo from "../../assets/images/Logo.webp";
import { Link, NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    CreditCard,
    PlusCircle,
    Icon
} from "lucide-react";

export default function Sidebar() {

    const navLinks = [
        { name: "Dashboard", Icon: LayoutDashboard, path: "/dashboard" },
        { name: "Meal Card", Icon: CreditCard, path: "/meal-list" },
        { name: "Meal Create", Icon: PlusCircle, path: "/meal-create" },
    ]

    const navLinkclass = "flex items-center gap-3 px-4 py-3 rounded-lg text-white"
    return (
        <div className="w-54 h-screen bg-slate-800 text-white p-5 flex flex-col fixed">

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

                {navLinks.map((link) => {
                    const Icon = link.Icon
                    return <NavLink key={link.path} className={({ isActive }) => `${navLinkclass} ${isActive ? "bg-orange-500" : "hover:bg-slate-600 hover:text-white transition"}`} to={link.path}>
                        <Icon size={20} />
                        {link.name}
                    </NavLink>;
                })

                }

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
