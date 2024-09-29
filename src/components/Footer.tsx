import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="pt-8 bg-gray-100 text-center">
            <p className="text-xs text-gray-600">
            Built for Bounty9000 (Avalanche-based blockchain using USDC as gas)
            </p>
            <p className="text-xs text-gray-600">
            Special thanks to the DevRel team for their support 
                <br />and to those who contributed to the documentation and AI chatbot training.
            </p>
            <a
                href="https://github.com/miladtsx/avalanche_custom_blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
            >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5 inline-block" />
            </a>

            <p className="text-xs text-gray-600 pb-8">
                @2024, with curiosity and love.
            </p >
        </footer >
    );
};

export default Footer;
