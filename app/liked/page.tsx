import getLikedSongs from "@/actions/getLikedSongs";
import Header from "../components/Header";
import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const LikedPage = async () => {
    const songs = await getLikedSongs();
    return (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Liked Songs
                    </h1>
                    <div className="relative w-32 h-32 lg:h-44 lg:w-44">
                        <Image src="/images/liked.png" className="object-contain" fill alt="image" />
                    </div>
                    <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                        <p className="hidden md:block font-semibold text-sm">Playlist</p>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">Liked Songs</h1>
                    </div>
                </div>
            </Header>
            <LikedContent songs={songs}/>
        </div>
    )
}

export default LikedPage