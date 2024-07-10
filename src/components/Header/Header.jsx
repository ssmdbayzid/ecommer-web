import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header text-white">
        <div className="container">
            <div className="header-cnt">
                <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
                    <div className="header-cnt-top-1">
                        <ul className="flex top-links align-center">
                        <li>
                            <Link to="/seller">Sellar Center</Link>
                        </li>
                        <li className="vert-line"></li>
                       {/* Dummy Links */}
                       <li>
                        <Link to="/download">Download</Link>
                       </li>

                       <li className='flex align-center'>
                        <span className='fs-13'>Follow us on</span>
                        <ul className="social-links flex align-center">
                            <li className='mx-2'>
                                <a href="www.facebook" className='fs-15'>
                                    
                                </a>
                            </li>
                        </ul>
                       </li>
                        <li>
                            <Link to="/seller">Sellar Center</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header