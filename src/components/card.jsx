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
        <Link href={`/${encode}`}>
            <span className='sr-only'>Gradiente generado con HUE WAVE</span>
          <div className={cn("size-64 max-[320px]:size-56  rounded-xl", gradientTw)}></div>
        </Link>
        <div className="w-full p-6 mx-auto -mt-12 text-white max-w-56 rounded-xl bg-neutral-900/90">
          <p className="font-black tracking-wide uppercase">{title}</p>
          <div className="grid grid-cols-2 min-[320px]:grid-cols-4 items-center w-full gap-2 mt-4">
            <CopyTW gradient={gradientTw}/>
            <CopyCSS gradient={gradientCSS}/>
            <DownloadImage encode={encode}/>
            <ShareGradient encode={encode}/>
          </div>
        </div>
      </article>
  )
}
