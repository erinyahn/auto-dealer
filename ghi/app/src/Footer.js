import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
                <div className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            The premiere solution for automobile dealership management.
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright: AutoDealers
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
