'use client'
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "../hooks/useAuthmodal";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    const authModal = useAuthModal()
    const handleLogout = () => {

    }

    return (
        <div className={twMerge(`h-fit   bg-gradient-to-b from-emerald-800 p-6 `, className)}>
            <div className="flex justify-between">
                <div className="flex items-center justify-center">
                    <div className="hidden md:flex gap-x-2">
                        <button onClick={() => router.back()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                            <RxCaretLeft className="text-white" size={35} />
                        </button>
                        <button onClick={() => router.forward()} className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                            <RxCaretRight className="text-white" size={35} />
                        </button>
                    </div>
                </div>

                <div className="w-full flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-gray-950" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-gray-950" size={20} />
                    </button>
                </div>

                <div className="flex justify-end items-center gap-x-4 md:w-full">
                    <>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-transparent text-neutral-300 font-medium">Signup</Button>
                        </div>
                        <div>
                            <Button onClick={authModal.onOpen} className="bg-transparent bg-white font-medium">Login</Button>
                        </div>
                    </>
                </div>
            </div>

            {children}
        </div>

    );

}

export default Header;