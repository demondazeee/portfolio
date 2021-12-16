import Document, {Html, Head, Main, NextScript} from "next/document";


class DocumentPage extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta name="description" content="Fullstack Web Dev" />
                    <meta name="keywords" content="ReactJS, NextJS, NestJS, Express, Postgres, Developer" />  
                    <meta name="author" content="Bryan Avila"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default DocumentPage