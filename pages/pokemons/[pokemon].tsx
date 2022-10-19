import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../../components/Button';
import { Url } from 'url';

export async function getStaticPaths() {
    return {
        fallback:false,
        paths: [
            { params: { pokemon: '1', } },
            { params: { pokemon: '2',} },
            { params: { pokemon: '3',} },
            { params: { pokemon: '4',} },
            { params: { pokemon: '5',} },
            { params: { pokemon: '6',} },
            { params: { pokemon: '7',} },
            { params: { pokemon: '8',} },
            { params: { pokemon: '9',} },
            { params: { pokemon: '10',} },
            { params: { pokemon: '11',} },
            { params: { pokemon: '12',} },
            { params: { pokemon: '13',} },
            { params: { pokemon: '14',} },
            { params: { pokemon: '15',} },
            { params: { pokemon: '16',} },
            { params: { pokemon: '17',} },
            { params: { pokemon: '18',} },
            { params: { pokemon: '19',} },
            { params: { pokemon: '20',} },
            { params: { pokemon: '21',} },
        ]
    }
}

export async function getStaticProps(context: any) {
    const pokemonId = context.params.pokemon;
    console.log(pokemonId)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await res.json();
    return {
        props: {pokemons: data}
    }
}

interface PokemonsProps {
    [key: string]: any;
    props: []
}

export default function DetailPage({pokemons}: PokemonsProps) {
    const router = useRouter();
    const pokemonId = router.query.pokemon;
    return (
        <div className='text-center bg-rose-50'>
                <div>   
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.front_default}`} alt="logo"/>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.back_default}`} alt="logo"/>
                </div>
                <p className='font-bold text-xl mb-2 text-blue-500 uppercase'>{pokemons.name}</p>
                <ul>
                    <li className='py-1'> <strong>Order: </strong> {pokemons.order} </li>
                    <li className='py-1'> <strong>Height: </strong> {pokemons.height} </li>
                    <li className='py-1'> <strong>Weight: </strong> {pokemons.weight} </li>
                    <li className='py-1'> <strong>First ability: </strong> {pokemons.abilities[0].ability.name} </li>
                    <li className='py-1'> <strong>Second ability: </strong> {pokemons.abilities[1].ability.name} </li>
                    <li className='py-1'> <strong>First type: </strong> {pokemons.types[0].type.name} </li>
                    <li className='py-1'> <strong>Base experience: </strong> {pokemons.base_experience} </li>
                    <li className='py-1'> <strong>Base hp: </strong> {pokemons.stats[0].base_stat} </li>
                    <li className='py-1'> <strong>Base attack: </strong> {pokemons.stats[1].base_stat} </li>
                    <li className='py-1'> <strong>Base defense: </strong> {pokemons.stats[2].base_stat} </li>
                    <li className='py-1'> <strong>Base special-attack: </strong> {pokemons.stats[3].base_stat} </li>
                    <li className='py-1'> <strong>Base special-defense: </strong> {pokemons.stats[4].base_stat} </li>
                    <li className='py-1'> <strong>Base speed: </strong> {pokemons.stats[5].base_stat} </li>
                </ul>
                <Button name = 'Go Back' url={`/pokemons`} className='' type=''/>
                <div>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.back_shiny}`} alt="logo"/>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.front_shiny}`} alt="logo"/>
                </div>
        </div>
    )
}