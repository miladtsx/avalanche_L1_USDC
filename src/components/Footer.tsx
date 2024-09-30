import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="pt-8 px-6 bg-black text-white text-center">
            <p className="text-xs">
                Built for
                <a href="https://app.dework.xyz/avalanche/bounty9000?taskId=0bd6dc92-2594-4023-8d0a-5e754fa1396e"
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Avalanche
                    Bounty9000 (L1PayUSDC)
                </a>
            </p>
            <p className="text-xs">
                Love to the DevRel for their support
                <br />and of course AI chatbots trainers.
            </p>
            <a
                href="https://github.com/miladtsx/avalanche_custom_blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-500"
            >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5 inline-block" />
            </a>

            <p className="text-xs text-white pb-8 pt-4">
                @2024, with curiosity and love.
            </p >
        </footer >
    );
};

export default Footer;
