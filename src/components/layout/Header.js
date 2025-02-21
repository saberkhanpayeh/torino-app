import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from '@/components/icons/Profile'


function Header() {
  return (
    <header>
        <div>
            <button>ورود | ثبت نام<Profile/></button>

        </div>
        <div>
            <nav>
                <ul>
                    <li><Link href="">صفحه اصلی</Link></li>
                    <li><Link href="">خدمات گردشگری</Link></li>
                    <li><Link href="">درباره ما</Link></li>
                    <li><Link href="">تماس باما</Link></li>
                </ul>
                <Link href="/"><Image src="/images/torino-logo.png" width={146} height={44}alt="torino-logo"/></Link>
            </nav>
        </div>
    </header>
  )
}

export default Header