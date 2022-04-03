import { useRouter } from 'next/router'
import { useEffect } from 'react';

function rendering() {
    return <main>22</main>
}

const Restful = () => {
    const router = useRouter();

    useEffect(()=>{
        if(!router.isReady) return;    
    }, [router.isReady]);

    if (router.isReady === true) {
        const { rest } = router.query;

        if (!/^\d+$/.test(rest[1])) {
            return 'Second parameter must be a number';
        }

        if (!/^\d+$/.test(rest[2])) {
            return 'Third parameter must be a number';
        }

        return <main>{rest[0]} {rest[1]} {rest[2]}</main>
    }
}

export default Restful;