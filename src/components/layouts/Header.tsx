import { Button } from '../ui/button';

const Header = () => {
	return (
		<header className='py-6'>
			<div className='container mx-auto flex justify-between items-center'>
				<span className='flex items-center gap-50 w-1/3 justify-center'>
					<h1 className='text-2xl font-bold'>
						Rave<span className='text-[#FFA03F]'>ly</span>
					</h1>
					<nav>
						<ul className='flex items-center gap-6 text-lg'>
							<li>
								<a href='/' className='hover:underline'>
									Home
								</a>
							</li>
							<li>
								<a href='/about' className='hover:underline'>
									About
								</a>
							</li>
							<li>
								<a href='/package' className='hover:underline'>
									Package
								</a>
							</li>
							<li>
								<a href='/contact' className='hover:underline'>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</span>
				<span className='flex items-center justify-center gap-2'>
					<Button className='cursor-pointer rounded-3xl px-7 py-1 bg-[#FFA03F] shadow-md font-semibold text-white hover:bg-white hover:text-[#FFA03F] transition-colors duration-300 ease-in'>
						Sign In
					</Button>
					<Button className='cursor-pointer rounded-3xl px-7 py-1 bg-white shadow-md text-[#FFA03F] font-semibold hover:bg-[#FFA03F] hover:text-white transition-colors duration-300 ease-in'>
						Sign Up
					</Button>
				</span>
			</div>
		</header>
	);
};

export default Header;
