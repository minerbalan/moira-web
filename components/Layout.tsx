import React, {ReactNode, useState} from 'react'
import Head from 'next/head'
import PrimaryButton from "./Button/PrimaryButton";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title}: Props) => {
    const [doViewModal, setDoViewModal] = useState(false)


    return <>
        <Head>
            <title>{title ?? "index" + " | moira"}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <body className="flex flex-col min-h-screen">
        <header className="mx-4">
            <nav className="flex justify-between bg-gray-50">
                <div/>
                <div/>
                <div>
                    <PrimaryButton onClick={() => {
                        setDoViewModal(!doViewModal)
                    }}>ログイン</PrimaryButton>
                </div>
            </nav>
        </header>
        <main className="flex-1">
            {children}
        </main>
        <footer className="bg-gray-100">
            <hr/>
            <span>Footer</span>
        </footer>
        </body>
    </>
}

export default Layout
