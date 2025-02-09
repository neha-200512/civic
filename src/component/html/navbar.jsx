import React, { useState } from "react";
import LogoImage from "../img/logo1.png";
import SearchIcon from "../img/search.png"; // Search button image
import BellIcon from "../img/bell2.png"; // Notification button image
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
	const [searchExpanded, setSearchExpanded] = useState(false);

	return (
		<nav
			className="navbar navbar-light shadow-sm p-2"
			style={{ backgroundColor: "#F8F9FA" }}
		>
			<div className="container-fluid d-flex justify-content-between align-items-center">
				{/* Left Section: Logo and Navigation Links */}
				<div className="d-flex align-items-center">
					<img
						src={LogoImage}
						alt="Logo"
						className="navbar-brand me-3"
						style={{ height: "80px" }} // Increased logo size
					/>

					<ul className="navbar-nav flex-row">
						<li className="nav-item mx-2">
							<a className="nav-link fw-bold text-theme" href="#home">
								Home
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link fw-bold text-theme" href="#news">
								News
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link fw-bold text-theme" href="#categories">
								Categories
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link fw-bold text-theme" href="#videos">
								Videos
							</a>
						</li>
						<li className="nav-item mx-2">
							<a className="nav-link fw-bold text-theme" href="#schemes">
								Schemes
							</a>
						</li>
					</ul>
				</div>

				{/* Right Section: Search Bar, Notification */}
				<div className="d-flex align-items-center">
					{/* Search Bar (Animated) */}
					<div
						className={`input-group me-3 search-bar ${
							searchExpanded ? "expanded" : ""
						}`}
					>
						<input
							type="text"
							className="form-control search-input"
							placeholder="Search..."
							aria-label="Search"
							onFocus={() => setSearchExpanded(true)}
							onBlur={() => setSearchExpanded(false)}
						/>
						<button className="btn search-btn">
							<img src={SearchIcon} alt="Search" className="search-icon" />
						</button>
					</div>

					{/* Notification Button (Large, Animated, Bordered) */}
					<button
						className="btn position-relative me-3 animate-button border-2 border-gray-500 bg-light shadow-sm"
						style={{ transition: "all 0.3s ease-in-out" }}
						onMouseOver={(e) =>
							(e.currentTarget.style.transform = "scale(1.1)")
						}
						onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
						onClick={(e) => {
							e.currentTarget.style.transform = "rotate(10deg)";
							setTimeout(
								() => (e.currentTarget.style.transform = "rotate(0deg)"),
								200
							);
						}}
					>
						<img
							src={BellIcon}
							alt="Notifications"
							style={{ width: "30px", height: "30px" }}
						/>
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							3+
						</span>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
