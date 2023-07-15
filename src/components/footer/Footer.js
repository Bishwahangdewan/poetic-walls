import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import {BiLogoFacebook} from 'react/bi'
import {BsFillSendPlusFill} from 'react/bs'

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <h3>Poeticwalls</h3>

                <div>
                    <div>
                        <a>Properties</a>
                        <a>Developments</a>
                        <a>Products</a>
                        <a>Journal</a>
                        <a>Process</a>
                        <a>Cooperation</a>
                        <a>Contact</a>
                    </div>
                    <div>
                        <a>About us</a>
                        <a>Jury</a>
                        <a>Advisors</a>
                        <a>Partners</a>
                    </div>
                </div>
            </div>
            <div>
                <h3>Get in touch</h3>

                <div>
                    <p>hello@poeticwalls.com</p>
                    <p>+41 44 123 45 67</p>

                    <div>
                        <BsInstagram />
                        <BiLogoFacebook />
                        <BsTwitter />
                    </div>

                    <div>
                        <p>Join our newslewtter</p>
                        <div>
                            <input type="email" />
                            <div>
                                <BsFillSendPlusFill />
                            </div>
                        </div>
                        <p>Dont worry. We dont spam</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div>
                <a>Impressum</a>
                <a>Privacy Policy</a>
            </div>
            <div>
                <a>@poeticwalls. 2023</a>
            </div>
        </div>
    </div>
  )
}

export default Footer