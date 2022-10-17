function Input(props) {
    return (
        <div className="m-5">
            <label className="block text-l font-medium text-gray-700 my-2">{props.name}</label>
            <input id={props.name} required placeholder={props.name} className="w-80 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-500"/>
        </div>
    )
}

export default Input