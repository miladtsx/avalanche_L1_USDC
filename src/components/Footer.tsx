import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="pt-8 px-6 bg-black text-white text-center">
            <p className="text-xs">
            Built for Bounty9000 (AvaPayUSDC)
            </p>
            <p className="text-xs">
            Love to the DevRel for their support 
                <br />and of course AI chatbots trainers.
            </p>
            <a
                href="https://github.com/miladtsx/avalanche_custom_blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
            >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5 inline-block" />
            </a>

            <p className="text-xs text-white pb-8">
                @2024, with curiosity and love.
            </p >
        </footer >
    );
};

export default Footer;
