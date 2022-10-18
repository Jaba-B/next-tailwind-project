import Input from '../components/Input';
import Button from '../components/Button';

export default function Feedbacks() {


    return (
        <div className='text-center bg-rose-50'> 
            <h1 className="font-bold text-2xl py-3 text-blue-500 text-center">Share your feedbacks</h1>
            <form>
                <Input name='First name' />
                <Input name='Last name' />
                <Input name='Age' />
                <Input name='Email' />
                <Input name='Mobile' />
                <label htmlFor='feedback' className='block text-l font-medium text-gray-700'>Feedback</label>
                <textarea id='feedback' placeholder='Feedback' className='w-80 h-80 m-5 border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-800 focus:ring-1 focus:ring-indigo-500'></textarea>
                <div>
                <Button url='/' name='submit' className='my-5' type='submit' />
                </div>
            </form>
        </div>

    )
}
