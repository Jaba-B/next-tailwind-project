import Link from 'next/link';
import { useRouter } from 'next/router';
import { enGB, ka } from '../translations';

function Header() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en-GB" ? enGB : ka;

    const handleLanguageEgnlish = () => {
        router.push(`${router.pathname}`, `/${router.pathname}`, { locale:"en-GB" })
    }
    const handleLanguageGeorgian = () => {
        router.push(`${router.pathname}`, `${router.pathname}`, { locale:"ka" })
    }

    return (
        <div className='bg-indigo-800 text-orange-300 py-7 text-lg w-screen flex flex-col sm:flex-row justify-center relative'>
            <ul className='flex flex-col sm:flex-row sm:ml-32 text-center justify-center w-screen'>
                <li className=' sm:px-6  hover:text-neutral-100'><Link href='/'><a>{t.clubs}</a></Link></li>
                <li className=' sm:px-6  hover:text-neutral-100'><Link href='/pokemons'><a>{t.pokemons}</a></Link></li>
                <li className=' sm:px-6  hover:text-neutral-100'><Link href='/feedbacks'><a>{t.feedbacks}</a></Link></li>
                {/* <li className='px-6 hover:text-neutral-100 float-right'><a>{t.language}</a></ li> */}
            </ul>
            <ul className='flex sm:px-8'>
                <li className=' text-red-400 text-sm whitespace-nowrap text-center list-none right-0 cursor-pointer'><a className='hover:text-neutral-100' onClick={handleLanguageEgnlish}>{t.english}</a></ li>
                <li className=' text-red-400 text-sm whitespace-nowrap text-center list-none right-0 cursor-pointer'>/<a className='hover:text-neutral-100' onClick={handleLanguageGeorgian}>{t.georgian}</a></ li>
            </ul>
            {/* <li className=' sm:px-8 text-red-400 text-sm whitespace-nowrap hover:text-neutral-100 text-center list-none right-0 cursor-pointer'><a>{t.language}</a></ li> */}
        </div>
    )
}

export default Header