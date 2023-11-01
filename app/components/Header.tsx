import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsList, BsX } from 'react-icons/bs';
const style={
    navLinks:
    " ml-10 uppercase border-b border-white hover:border-[#F6B519] text-xl"
}
const Header = () => {
    return (
        <header>
            <nav className='w-full h-24 shadow-xl bg-black'>
                {/*dekstop version*/}
                <div className='flex items-center justify-between w-full h-full px-4'>
                    <Link href='/'>
                        <Image src="https://document-export.canva.com/1A82M/DAFozI1A82M/8/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231029%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231029T082514Z&X-Amz-Expires=71831&X-Amz-Signature=680d19b57cf5199072d43a7709638b2a512b3fb156395433905b5efb9ec77877&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2030%20Oct%202023%2004%3A22%3A25%20GMT" alt='logo' width={285} height={75} className='cursor-pointer'></Image>
                    </Link>
                    <div className='text-white hidden md:flex'>
                        <ul className='hidden md:flex'>
                            <li className={style.navLinks}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li  className={style.navLinks}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li  className={style.navLinks}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='flex items-center space-x-5 ml-10 text-[#F6B519]'>
                                <h3 className='cursor-pointer border border-[#F6B519] px-4 py-1 rounded-full bg-[#F6B519] text-black hover:bg-black hover:text-[#F6B519]  ease-in-out duration-300'>Sign Up</h3>
                            </li>
                        </ul>
                    </div>
                    { /*mobule version*/}
                    <div className='md:hidden cursor-pointer pl-24'>
                    <BsList className="h-8 w-8 text-[#F6B519]"/>
                    </div>
                </div>
             {/*mobile-nav*/}
             <div className='md:hidden fixed top-18 left-0 bg-[#ecf0f3] w-[75%] h-screen p-10 ease-in-out duration-300'>
                <div className='flex w-full items-center justify-end'>
                    <div className='cursor-pointer'>
                    <BsX className="h-8 w-8 text-[#F6B519]"/>

                    </div>

                </div>

             </div>
               {/*social icon*/}
            </nav>
        </header>
    );
};

export default Header;