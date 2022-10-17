import Link from 'next/link'

function Header() {
    return (
        <div className='bg-indigo-800 text-orange-300 p-7 text-lg'>
            <ul className='flex justify-center'>
                <li className='px-6 hover:text-neutral-100'><Link href='/'> Clubs </Link></li>
                <li className='px-6 hover:text-neutral-100'><Link href='/pokemons'> Pokemons </Link></li>
                <li className='px-6 hover:text-neutral-100'><Link href='/feedbacks'> Feedbacks </Link></li>
            </ul>
        </div>
    )
}

export default Header