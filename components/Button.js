import Link from 'next/link';
function Button(props) {
    return (
        <button className="bg-gray-200 my-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:bg-violet-200">
           <Link href={props.url}>{props.name}</Link>
        </button>
    )
}

export default Button