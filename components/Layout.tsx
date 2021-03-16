import React, {ReactNode} from 'react'
import Head from 'next/head'
import {PrimaryButtonRef} from "./button/PrimaryButton";
import Link from "next/link";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title}: Props) => {
    return <>
        <Head>
            <title>{(title ?? "index") + " | moira"}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="flex flex-col min-h-screen">
            <header>
                <nav className="flex justify-between bg-gray-200">
                    <div className="ml-4"/>
                    <div/>
                    <div className="mr-4">
                        <Link href="/login" passHref>
                            <PrimaryButtonRef>ログイン</PrimaryButtonRef>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="flex-1 bg-gray-50">
                {children}
            </main>
            <footer className="bg-gray-400">
                <hr/>
                <span>Footer</span>
            </footer>
        </div>
    </>
}

export default Layout
