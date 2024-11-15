import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img width={'80px'} src="https://imgs.search.brave.com/DFHJR5IUIwtV8Rpcbhw4SGm9QbE6WaddrUPX_ZKmsY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8xMi8z/L0lUbU1FVy5qcGc" alt="star wars logo"/>
			</Link>
			<div className="ml-auto">
				<button>
					favoritos
				</button>
			</div>
		</nav>
	);
};
