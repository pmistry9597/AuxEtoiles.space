import genStyle from '../../components/genlayout/genlayout.module.css';
import Link from 'next/link';

export default function GenLayout({children, page}) {
    return (
        <div>
            <div className={genStyle.header}>
                <div className={genStyle.logo}>
                    <img src='/images/plainvector.svg'></img>
                    <p className={genStyle.slogan}>Nous y irons!</p>
                </div>
                <p className={genStyle.createdBy}>Created by Preet Mistry</p>
            </div>
            <div className={genStyle.navBar}>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <li className={genStyle.about}>
                        About
                        <div className={genStyle.dropdown}>
                            <ul style={{listStyle: 'none'}}>
                                <Link href='/aboutcreator'><li>About the Creator</li></Link>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {children}
            <p className={genStyle.copyright}>© Aux Étoiles. All rights reserved.</p>
        </div>
    );
}