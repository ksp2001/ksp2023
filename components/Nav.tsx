import Link from 'next/link';
import {motion as m} from 'framer-motion';

export default function Nav() {
    return(
        <Link href="/" className="absolute text-lg hover:text-xl hover:font-bold"><m.p whileHover={{
            rotate: 105,
            transition: { duration: 0.5 },
          }}>k.</m.p></Link>
    )
}