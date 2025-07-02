const Footer = () => {
	return (
		<footer className='bg-[#FFA03F] text-white py-4'>
			<div className='container mx-auto flex flex-col items-center justify-center'>
				<span className='grid grid-cols-4 w-full gap-10'>
					<span className='flex flex-col items-start justify-star gap-10'>
						<div className='grid gap-3'>
							<h1 className='font-semibold text-lg'>Travel</h1>
							<small>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga aspernatur sunt rem
								non, iure ipsam porro beatae id fugit labore eius necessitatibus accusamus quasi
								corrupti maiores accusantium aperiam possimus ducimus.
							</small>
						</div>

						<div className='flex items-center justify-center gap-5'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								fill={'currentColor'}
								viewBox='0 0 24 24'
							>
								{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
								<path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592q1.05-.003 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1'></path>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								fill={'currentColor'}
								viewBox='0 0 24 24'
							>
								{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
								<path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096m11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z'></path>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width={24}
								height={24}
								fill={'currentColor'}
								viewBox='0 0 24 24'
							>
								{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
								<path d='M13.68 10.62 20.24 3h-1.55L13 9.62 8.45 3H3.19l6.88 10.01L3.19 21h1.55l6.01-6.99 4.8 6.99h5.24l-7.13-10.38Zm-2.13 2.47-.7-1-5.54-7.93H7.7l4.47 6.4.7 1 5.82 8.32H16.3z'></path>
							</svg>
						</div>
					</span>

					{/* SERVICES */}
					<span className='flex flex-col items-start justify-start gap-3'>
						<h1 className='font-semibold text-lg'>Services</h1>
						<ul className='flex flex-col gap-2'>
							<li className='text-xs'>Web Development</li>
							<li className='text-xs'>App Development</li>
							<li className='text-xs'>SEO Services</li>
							<li className='text-xs'>Content Creation</li>
							<li className='text-xs'>Digital Marketing</li>
						</ul>
					</span>
					{/* END SERVICES */}

					{/* SERVICES */}
					<span className='flex flex-col items-start justify-start gap-3'>
						<h1 className='font-semibold text-lg'>Instagram</h1>
						<ul className='flex flex-col gap-2'>
							<li className='text-xs'>Web Development</li>
							<li className='text-xs'>App Development</li>
							<li className='text-xs'>SEO Services</li>
							<li className='text-xs'>Content Creation</li>
							<li className='text-xs'>Digital Marketing</li>
						</ul>
					</span>
					{/* END SERVICES */}

					{/* SERVICES */}
					<span className='flex flex-col items-start justify-start gap-3'>
						<h1 className='font-semibold text-lg'>Contact</h1>
						<ul className='flex flex-col gap-2'>
							<li className='flex items-center gap-1'>
								<i className='bx bxs-location'></i>
								<p className='text-xs mb-1'>Yogyakarta, Indonesia</p>
							</li>
							<li className='flex items-center gap-1'>
								<i className='bx bxs-phone'></i>
								<p className='text-xs mb-1'>+62 672 234 5332</p>
							</li>
							<li className='flex items-center gap-1'>
								<i className='bx bxs-envelope'></i>
								<p className='text-xs mb-1'>ravely@gmail.com</p>
							</li>
						</ul>
					</span>
					{/* END SERVICES */}
				</span>
				<p className='text-xs mt-4'>
					&copy; {new Date().getFullYear()} My Website. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
