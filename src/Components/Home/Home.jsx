import React from 'react';
import Head from "../Head/Head";
import Items from "../Items/Items";

export default function Home() {
    return (
        <>
            <section id="home">
                <div className="container d-flex justify-content-center align-items-center my-3">
                    <div className="card my-5 p-4">
                        <Head/>
                        <Items/>
                    </div>
                </div>
            </section>
        </>
    )
}
