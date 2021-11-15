import Document, { Html, Head, Main, NextScript } from 'next/document'
 export  default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.scss" rel="stylesheet"/>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"/>
                </Head>
                <body>
                <Main />
                <NextScript>

                </NextScript>
                </body>
            </Html>
        )
    }
}
