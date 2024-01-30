import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="social-icons">
                    <div className="socialMedia">
                        <a href="https://github.com/BJhisel" className="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#" className="linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;