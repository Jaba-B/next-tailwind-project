import Button from '../../components/Button';
import { useRouter } from 'next/router';
import { enGB, ka } from '../../translations';

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=21');
    const data = await res.json();

    return {
        props: {pokemons: data.results}
    }
}

interface Pokemon {
    name: string,
    url: string,
    pokemons: []
}

export default function Pokemons({pokemons}: Pokemon) {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en-GB" ? enGB : ka;
    
    const pokemonsRenderer = pokemons.map((pokemon: Pokemon) => (
        <div key={pokemon.name} className='bg-rose-50 m-4 text-center'>
            <p className='font-bold text-xl mb-2 text-blue-500 uppercase'> {pokemon.name}</p>
            <Button name = {t.pokemonBtn} className='' type=''  url={`pokemons/${(pokemon.url).slice(-3)}`}/>
        </div>
    ))
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-violet-200'>
            {pokemonsRenderer}
        </div>
    )
}