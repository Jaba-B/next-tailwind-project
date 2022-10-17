import Link from 'next/link';
import Button from '../../components/Button'

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=21');
    const data = await res.json();

    return {
        props: {pokemons: data.results}
    }
}

export default function Pokemons({pokemons}) {
    
    const pokemonsRenderer = pokemons.map((pokemon) => (
        <div key={pokemon.name} className='bg-rose-50 m-4 text-center'>
            <p className='font-bold text-xl mb-2 text-blue-500 uppercase'> {pokemon.name}</p>
            <Button name = 'More Info'  url={`/pokemons/${(pokemon.url).slice(-2)}`}/>
        </div>
    ))
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-violet-200'>
            {pokemonsRenderer}
        </div>
    )
}