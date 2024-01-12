import Link from 'next/link'
import React from 'react'
import CopyTW from './copy-tw'
import CopyCSS from './copy-css'
import DownloadImage from './download-image'
import ShareGradient from './share-gradient'
import { cn } from '@/lib/utils'

export default function Card({title,gradientTw, gradientCSS,encode}) {
  return (
    <article className="relative">
        <Link href={`/${encode}`} >
          <div className={cn("h-64 rounded-xl", gradientTw)}></div>
        </Link>
        <div className="mx-1.5 -mt-6 rounded-xl bg-neutral-900 p-6 text-white">
          <p className="font-black tracking-wide uppercase">{title}</p>
          <div className="flex items-center w-full gap-2 mt-4">
            <CopyTW gradient={gradientTw}/>
            <CopyCSS gradient={gradientCSS}/>
            <DownloadImage encode={encode}/>
            <ShareGradient encode={encode}/>
          </div>
        </div>
      </article>
  )
}
