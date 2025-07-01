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
							<i className='bxl bx-facebook'></i>
							<i className='bxl bx-linkedin'></i>
							<i className='bxl bx-tweeter'></i>
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
