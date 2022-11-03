import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../../components/Button';
import { enGB, ka } from '../../translations';


export async function getStaticPaths() {
    return {
        fallback:false,
        paths: [
            { params: { pokemon: '1', }, locale: "en-GB" },
            { params: { pokemon: '1', }, locale: "ka" },
            { params: { pokemon: '2', }, locale: "en-GB" },
            { params: { pokemon: '2', }, locale: "ka" },
            { params: { pokemon: '3', }, locale: "en-GB" },
            { params: { pokemon: '3', }, locale: "ka" },
            { params: { pokemon: '4', }, locale: "en-GB" },
            { params: { pokemon: '4', }, locale: "ka" },
            { params: { pokemon: '5', }, locale: "en-GB" },
            { params: { pokemon: '5', }, locale: "ka" },
            { params: { pokemon: '6', }, locale: "en-GB" },
            { params: { pokemon: '6', }, locale: "ka" },
            { params: { pokemon: '7', }, locale: "en-GB" },
            { params: { pokemon: '7', }, locale: "ka" },
            { params: { pokemon: '8', }, locale: "en-GB" },
            { params: { pokemon: '8', }, locale: "ka" },
            { params: { pokemon: '9', }, locale: "en-GB" },
            { params: { pokemon: '9', }, locale: "ka" },
            { params: { pokemon: '10', }, locale: "en-GB" },
            { params: { pokemon: '10', }, locale: "ka" },
            { params: { pokemon: '11', }, locale: "en-GB" },
            { params: { pokemon: '11', }, locale: "ka" },
            { params: { pokemon: '12', }, locale: "en-GB" },
            { params: { pokemon: '12', }, locale: "ka" },
            { params: { pokemon: '13', }, locale: "en-GB" },
            { params: { pokemon: '13', }, locale: "ka" },
            { params: { pokemon: '14', }, locale: "en-GB" },
            { params: { pokemon: '14', }, locale: "ka" },
            { params: { pokemon: '15', }, locale: "en-GB" },
            { params: { pokemon: '15', }, locale: "ka" },
            { params: { pokemon: '16', }, locale: "en-GB" },
            { params: { pokemon: '16', }, locale: "ka" },
            { params: { pokemon: '17', }, locale: "en-GB" },
            { params: { pokemon: '17', }, locale: "ka" },
            { params: { pokemon: '18', }, locale: "en-GB" },
            { params: { pokemon: '18', }, locale: "ka" },
            { params: { pokemon: '19', }, locale: "en-GB" },
            { params: { pokemon: '19', }, locale: "ka" },
            { params: { pokemon: '20', }, locale: "en-GB" },
            { params: { pokemon: '20', }, locale: "ka" },
            { params: { pokemon: '21', }, locale: "en-GB" },
            { params: { pokemon: '21', }, locale: "ka" },
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
    const { locale } = router;
    const t = locale === "en-GB" ? enGB : ka;

    return (
        <div className='text-center bg-rose-50'>
                <div>   
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.front_default}`} alt="logo"/>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.back_default}`} alt="logo"/>
                </div>
                <p className='font-bold text-xl mb-2 text-blue-500 uppercase'>{pokemons.name}</p>
                <ul>
                    <li className='py-1'> <strong>{t.order}: </strong> {pokemons.order} </li>
                    <li className='py-1'> <strong>{t.height}: </strong> {pokemons.height} </li>
                    <li className='py-1'> <strong>{t.weight}: </strong> {pokemons.weight} </li>
                    <li className='py-1'> <strong>{t.firstAbility}: </strong> {pokemons.abilities[0].ability.name} </li>
                    <li className='py-1'> <strong>{t.firstType}: </strong> {pokemons.types[0].type.name} </li>
                    <li className='py-1'> <strong>{t.baseExperience}: </strong> {pokemons.base_experience} </li>
                    <li className='py-1'> <strong>{t.baseHp}: </strong> {pokemons.stats[0].base_stat} </li>
                    <li className='py-1'> <strong>{t.baseAttack}: </strong> {pokemons.stats[1].base_stat} </li>
                    <li className='py-1'> <strong>{t.baseDefense}: </strong> {pokemons.stats[2].base_stat} </li>
                    <li className='py-1'> <strong>{t.baseSpecialAttack}: </strong> {pokemons.stats[3].base_stat} </li>
                    <li className='py-1'> <strong>{t.baseSpecialDefense}: </strong> {pokemons.stats[4].base_stat} </li>
                    <li className='py-1'> <strong>{t.baseSpeed}: </strong> {pokemons.stats[5].base_stat} </li>
                </ul>
                <Button name = {t.dynamicPokemonBtn} url={`/pokemons`} className='' type=''/>
                <div>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.back_shiny}`} alt="logo"/>
                    <Image width={200} height={200} className="" src = {`${pokemons.sprites.front_shiny}`} alt="logo"/>
                </div>
        </div>
    )
}