import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'

export default function Notfound(){
    return(
        <div className = 'h-screen flex justify items-center flex-col'>
            <Image 
                src = "/images/404.svg" width = {500} height = {500} alt = '404'
            />

            <Link href = "/">
            <Button>Back to home</Button>
            </Link>
        </div>
    )
}