'use client'

import { Song } from "@/types"
import useLoadImage from "../hooks/useLoadImage"
import Image from "next/image"

interface MediaItemsProps {
    onClick: (id:string) => void
    data: Song
}

const MediaItems: React.FC<MediaItemsProps> = ({data,onClick}) => {
    const imageUrl = useLoadImage(data)

    const handleClick = () => {
        if(onClick) {
            return onClick(data.id)
        }
    }

  return (
    <div onClick={handleClick} className="flex items-center rounded-md  gap-x-4 cursor-pointer hover:bg-neutral-800/50 transition p-2 w-full">

        <div className="relative rounded-md min-h-[40px] min-w-[40px] overflow-hidden">
            <Image className="object-cover rounded-full w-8 h-8" src={imageUrl || '/images/liked.png'} fill alt="image" />
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden">
            <p className="text-white truncate">{data.title}</p>
            <p className="text-neutral-400 text-sm truncate">{data.author}</p>
        </div>
    </div>
  )
}

export default MediaItems