import { useRouter } from 'next/router';
import { enGB, ka } from '../translations';

function Footer() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en-GB" ? enGB : ka;

    return (
        <div className='bg-indigo-800 text-orange-300 p-7 text-center  text-lg'>
            {t.footer}
        </div>
    )
}

export default Footer