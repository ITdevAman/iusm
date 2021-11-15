import Link from 'next/link';

export default function ErrorPage(){
    return(
        <>
            <h1>Error Page 404!</h1>
            <p>Pleace <Link href={'/'}><em>go to back</em></Link> safety</p>
        </>
    )
}