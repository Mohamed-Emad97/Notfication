import React from 'react';
import Head from "../Head/Head";
import Items from "../Items/Items";

export default function Home() {
    return (
        <>
            <section id="home" className='vh-100'>
                <div className="container d-flex justify-content-center align-items-center my-3">
                    <div className="card p-4">
                        <Head/>
                        <Items/>
                    </div>
                </div>
            </section>
        </>
    )
}
