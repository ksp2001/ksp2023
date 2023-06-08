import Link from 'next/link';
import { motion as m } from 'framer-motion';

export default function Nav() {
    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} exit={{ opacity: 0 }}>
            <Link href="/" className="absolute text-lg hover:text-xl hover:font-bold"><m.p whileHover={{
                rotate: 105,
                transition: { duration: 0.5 },
            }}>k.</m.p></Link>
        </m.div>
    )
}