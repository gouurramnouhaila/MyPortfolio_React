import React from 'react';
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

function NavBar() {
    return (
        <header className="bg-red-100">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"  className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-500 text-4xl font-bold cursive tracking-widest">
                        Nouhaila
                    </NavLink>
                    <NavLink to="/post" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-500 cursive tracking-widest">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-500 cursive tracking-widest">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-500 cursive tracking-widest">
                        About Me!
                    </NavLink>
                   <NavLink to="/post/:slug" className="inflex-flex items-center py-6 px-3 mr-4 text-gray-400 hover:text-gray-500 cursive tracking-widest"></NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/GourramNouhaila" className="mr-4" target="_blank" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/nouhaila-gourram-969ab220b/" className="mr-4" target="_blank" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.facebook.com/profile.php?id=100012078340024" className="mr-4" target="_blank" style={{height:35,width:35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar;

