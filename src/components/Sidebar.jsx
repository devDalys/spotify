import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { logo } from '../assets';
import { links } from '../assets/constants';
import { HiOutlineMenu } from 'react-icons/hi';

const Sidebar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const NavLinks = ({ handleClick }) => (
		<div className="mt-10">
			{links.map(item => (
				<NavLink
					key={item.name}
					to={item.to}
					end={item.end}
					className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
					onClick={() => handleClick && handleClick()}
				>
					<item.icon className="w-6 h-6 mr-2" />
					{item.name}
				</NavLink>
			))}
		</div>
	);

	return (
		<>
			<div className="md:flex hidden flex-col  w-[240px] py-10 px-4 bg-[#191624]">
				<img src={logo} alt="logo" className="w-full h-14 object-contain" />
				<NavLinks />
			</div>
			<div className="absolute md:hidden block top-6 right-3">
				{mobileMenuOpen ? (
					<RiCloseLine
						className="w-6 h-6 text-white mr-2 z-10"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				) : (
					<HiOutlineMenu
						className="w-6 h-6 text-white mr-2 z-10"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				)}
			</div>
			<div
				className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg] z-10 p-6 md:hidden smooth-transition ${
					mobileMenuOpen ? 'left-0' : '-left-full'
				}`}
			>
				<img src={logo} alt="logo" className="w-full h-14 object-contain" />
				<NavLinks onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
			</div>
		</>
	);
};

export default Sidebar;
