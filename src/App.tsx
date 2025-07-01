import Header from './components/layouts/Header';
import Carousel from './components/Carousel';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

function App() {
	return (
		<div className='bg-white text-black min-h-screen'>
			<Header />

			{/* HERO SECTION */}
			<section className='px-20 flex items-center justify-center gap-10 relative ml-20 min-h-[90vh]'>
				{/* TEXT */}
				<div className='w-1/4 relative grid'>
					{/* GARIS PEMANIS */}
					<div className='w-[9.5rem] h-1 rounded-full bg-[#FFA03F] absolute top-[4.9rem] left-1'></div>
					{/* GARIS PEMANIS */}
					<h1 className='text-7xl font-bold mb-4 tracking-wide leading-tight'>
						Let's Create Memorable Journey
					</h1>
					<p className='text-lg text-gray-700 mb-6 py-5'>
						Join us in crafting unforgettable experiences that resonate with your audience. Our
						platform offers the tools and resources you need to bring your creative visions to life.
					</p>

					{/* BOX SEARCH */}
					<span className='relative h-20'>
						<div className='flex items-center justify-between py-5 px-10 gap-[10rem] absolute rounded-3xl shadow-lg backdrop-blur-lg'>
							<span className='flex items-center justify-between gap-15 w-full'>
								{/* LOCATION */}
								<span className='grid'>
									<p className='font-semibold text-lg'>Location</p>
									<p className='text-xs'>Yogyakarta</p>
								</span>

								{/* DATE */}
								<span className='grid'>
									<p className='font-semibold text-lg'>Date</p>
									<p className='text-xs'>Yogyakarta</p>
								</span>

								{/* PRICE */}
								<span className='grid'>
									<p className='font-semibold text-lg'>Price</p>
									<p className='text-xs'>Yogyakarta</p>
								</span>
							</span>

							<button className='bg-[#FFA03F] text-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-search text-3xl'></i>
							</button>
						</div>
					</span>
					{/* END BOX SEARCH */}
				</div>
				{/* END TEXT */}

				{/* IMAGE */}
				<div className='flex justify-center items-start gap-6 w-1/2'>
					{/* Kolom Kiri: Dua gambar vertikal */}
					<div className='flex flex-col gap-4'>
						<div className='w-60 h-[20rem] rounded-2xl overflow-hidden'>
							<img
								src='https://i.pinimg.com/736x/42/eb/c8/42ebc887a379f5a735fbf863b520231f.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-60 h-[20rem] rounded-2xl overflow-hidden'>
							<img
								src='https://i.pinimg.com/736x/42/eb/c8/42ebc887a379f5a735fbf863b520231f.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
					</div>

					{/* IMAGE */}
					<div className='w-1/2 relative items-center justify-center'>
						<img src='./airplane.png' alt='' className='absolute top-3 left-50 h-10' />
						<img src='./doted-airplane.png' alt='' className='h-20 absolute top-3 left-25' />
						<div className='w-70 h-[30rem] rounded-2xl overflow-hidden absolute top-25'>
							<img
								src='https://i.pinimg.com/736x/a4/2c/a5/a42ca54e4214fce41d5804b4580b38eb.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
				{/* END IMAGE */}
			</section>

			{/* WHY CHOSE US */}
			<section className='py-10 flex items-center justify-center min-h-screen gap-40 container mx-auto'>
				{/* IMAGE */}
				<span className='flex items-center justify-end'>
					<div className='relative h-[40rem] w-[25rem] bg-[#EBEBEB] rounded-3xl'>
						<div className='h-[40rem] w-[25rem] rounded-3xl overflow-hidden absolute -left-7 top-7'>
							<img
								src='https://i.pinimg.com/736x/14/95/16/14951623665d09790a7ed2d4d9d887b2.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute flex items-center justify-center gap-5 -bottom-15 -right-5 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-lg bg-black/20'>
							<span className='text-[#FFA03F] bg-white p-2 rounded-full cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-search text-3xl'></i>
							</span>
							<h1 className='text-white font-semibold text-sm'>
								Profesional <br />
								Tour Guide
							</h1>
						</div>
					</div>
				</span>
				{/* END IMAGE */}

				{/* TEXT */}
				<span className='flex flex-col items-start justify-start gap-10 w-[40rem]'>
					<div>
						<p className='text-[#FFA03F]'>Way Choose Us?</p>
						<h1 className='font-bold text-4xl'>Plan Your Trip With Us</h1>
					</div>
					<div className='grid gap-10'>
						<span className='flex items-center justify-between gap-5'>
							<button className='bg-[#FFA03F] text-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-search text-3xl'></i>
							</button>
							<span className='text-lg grid'>
								<p className='font-semibold'>Best Price Guarantee</p>
								<small>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam quo
									exercitationem optio provident eveniet pariatur at quam iste adipisci nesciunt ab
									dolorem dolores sapiente voluptatum tenetur, aut harum esse.
								</small>
							</span>
						</span>

						<span className='flex items-center justify-between gap-5'>
							<button className='bg-[#FFA03F] text-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-search text-3xl'></i>
							</button>
							<span className='text-lg grid'>
								<p className='font-semibold'>Best Price Guarantee</p>
								<small>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam quo
									exercitationem optio provident eveniet pariatur at quam iste adipisci nesciunt ab
									dolorem dolores sapiente voluptatum tenetur, aut harum esse.
								</small>
							</span>
						</span>

						<span className='flex items-center justify-between gap-5'>
							<button className='bg-[#FFA03F] text-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-search text-3xl'></i>
							</button>
							<span className='text-lg grid'>
								<p className='font-semibold'>Best Price Guarantee</p>
								<small>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam quo
									exercitationem optio provident eveniet pariatur at quam iste adipisci nesciunt ab
									dolorem dolores sapiente voluptatum tenetur, aut harum esse.
								</small>
							</span>
						</span>
					</div>
					<div className='h-10 w-full relative'>
						<img
							src='./airplane.png'
							alt=''
							className='absolute -bottom-[13rem] right-[21.1rem] h-8 rotate-240'
						/>
						<img
							src='./doted-airplane.png'
							alt=''
							className='h-30 absolute -bottom-[20rem] right-50 -rotate-115'
						/>
					</div>
				</span>
				{/* END TEXT */}
			</section>
			{/* END WHY CHOSE US */}

			{/* OUR POPULAR DESTINATION */}
			<section className='py-10 flex items-start flex-col justify-center gap-10 container mx-auto'>
				{/* TITLE */}
				<div className='w-1/2 ps-[10rem]'>
					<p className='text-[#FFA03F]'>Famous Destination!</p>
					<h1 className='font-bold text-4xl'>
						Our Popular <span className='text-[#FFA03F]'>Destination</span>
					</h1>
				</div>
				{/* END TITLE */}

				{/* CAROUSEL */}
				<div className='w-full flex items-center justify-center gap-10 py-5'>
					<Carousel />
				</div>
				{/* END CAROUSEL */}
			</section>
			{/* END OUR POPULAR DESTINATION */}

			{/* SECOND WHY CHOOSE US */}
			<section className='flex items-center justify-center gap-40 continer mx-auto min-h-screen'>
				{/* TEXT */}
				<span className='w-[40rem] flex flex-col items-start justify-start gap-10'>
					<div className='grid gap-20'>
						<span className='grid gap-5'>
							<div className='grid gap-5'>
								<p className='text-[#FFA03F]'>Way Choose Us?</p>
								<h1 className='font-bold text-4xl'>Choose Dream Dictation For Explore World</h1>
							</div>
							<div className='flex items-start justify-center flex-col gap-5'>
								<p className=''>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam quo
									exercitationem optio provident eveniet pariatur at quam iste adipisci nesciunt ab
									dolorem dolores sapiente voluptatum tenetur, aut harum esse.
								</p>
								<button className='bg-[#FFA03F] text-white px-8 py-2 rounded-lg cursor-pointer transition duration-300 font-semibold shadow-xl'>
									About Us
								</button>
							</div>
						</span>

						<span className='grid grid-cols-3'>
							<span className='flex items-start flex-col justify-center gap-2'>
								<h1 className='text-4xl font-semibold'>14</h1>
								<p className='text-lg text-gray-500'>
									Years <br /> Experince
								</p>
							</span>
							<span className='flex items-start flex-col justify-center gap-2'>
								<h1 className='text-4xl font-semibold'>320+</h1>
								<p className='text-lg text-gray-500'>
									Distention <br />
									Collaboration
								</p>
							</span>
							<span className='flex items-start flex-col justify-center gap-2'>
								<h1 className='text-4xl font-semibold'>67+</h1>
								<p className='text-lg text-gray-500'>
									Statisfied <br />
									Customer
								</p>
							</span>
						</span>
					</div>
				</span>

				{/* IMAGE */}
				<span className='flex items-center justify-start'>
					<div className='relative h-[40rem] w-[30rem] bg-[#EBEBEB] rounded-3xl'>
						<div className='h-[40rem] w-[30rem] rounded-3xl overflow-hidden absolute -right-7 top-7'>
							<img
								src='https://i.pinimg.com/736x/14/95/16/14951623665d09790a7ed2d4d9d887b2.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute flex items-center flex-col justify-center -bottom-15 -left-5 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-lg bg-[#EBEBEB]/50'>
							<h1 className='text-lg'>How Your Experience?</h1>
							<span className='items-center flex justify-center gap-2'>
								<p className='cursor-pointer text-xl'>😭</p>
								<p className='cursor-pointer text-xl'>😭</p>
								<p className='cursor-pointer text-xl'>😭</p>
								<p className='cursor-pointer text-xl'>😭</p>
							</span>
						</div>
					</div>
				</span>
				{/* END IMAGE */}
			</section>
			{/* END SECOND WHY CHOOSE US */}

			{/* REVIEW  */}
			<section className='py-10 flex items-start justify-center flex-col min-h-screen gap-20 container mx-auto'>
				<div className='ps-[10rem]'>
					<p className='text-[#FFA03F]'>What Our Customer Say?</p>
					<h1 className='font-bold text-4xl'>Client Testimonial</h1>
				</div>
				<span className='flex items-center justify-center w-full bg-red-60 relative'>
					<div className='flex w-[60rem] items-center justify-start relative'>
						{/*IMAGE  */}
						<div className='relative h-[40rem] w-[25rem] bg-[#EBEBEB] rounded-3xl'>
							<div className='h-[40rem] w-[25rem] rounded-3xl overflow-hidden absolute -left-7 -top-7'>
								<img
									src='https://i.pinimg.com/736x/cd/fc/7d/cdfc7df29fb2a2590c915b2f48ba3e7b.jpg'
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
						{/* TEXT */}
						<div className='absolute right-10'>
							<div className='relative w-xl bg-white shadow-xl rounded-br-xl rounded-tr-xl p-8 border'>
								{/* Decorative border */}
								<div className='absolute top-0 left-0 w-2 h-full bg-[#FFA03F]'></div>

								<h2 className='text-xl font-semibold text-black'>Max Skshena</h2>
								<p className='text-sm text-[#FFA03F] mb-4'>Ceo Of Xyz Compny</p>
								<p className='text-gray-700 text-base leading-relaxed'>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
								</p>
							</div>
						</div>
						{/* END TEXT */}
					</div>
					{/* Navigation Arrows */}
					<div className='flex gap-7 absolute top-35 right-[21rem]'>
						<button className='w-10 h-10 bg-[#FFA03F] rounded-full text-white flex items-center justify-center hover:bg-[#ff8a1a] transition shadow-xl cursor-pointer'>
							<i className='bx bx-chevron-left'></i>
						</button>
						<button className='w-10 h-10 text-[#FFA03F] rounded-full bg-white flex items-center justify-center border border-[#ff8a1a] hover:bg-black/10 hover:border-none transition shadow-xl cursor-pointer'>
							<i className='bx bx-chevron-right'></i>
						</button>
					</div>

					<img
						src='./airplane.png'
						alt=''
						className='absolute -top-[6.2rem] rotate-180 w-10 right-[37.5rem]'
					/>
					<img
						src='./doted-airplane.png'
						alt=''
						className='absolute -top-[9rem] rotate-180 w-30 right-[30rem]'
					/>
				</span>
			</section>
			{/* END REVIEW  */}

			{/* RECOMMENDATION DESTINATION */}
			<section className='container mx-auto py-10 flex items-center justify-center gap-10 min-h-[50vh]'>
				{/* PESAWAT KIRI */}
				<div className='relative w-1/4'>
					<img
						src='./airplane.png'
						alt=''
						className='absolute -top-2 rotate-280 w-10 right-[6rem]'
					/>
					<img
						src='./doted-airplane.png'
						alt=''
						className='absolute top-[3rem] rotate-280 w-30 right-[3rem]'
					/>
				</div>
				{/* PESAWAT END */}

				{/* CENTER CONTENT */}
				<div className='flex flex-col items-center justify-center gap-10 w-1/2'>
					<h1 className='text-4xl font-bold'>Get Recommendation Destination</h1>
					<p className='text-center'>
						Discover your next adventure with our personalized destination recommendations. Share
						your preferences and let us guide you to the perfect getaway tailored just for you.
					</p>
					{/* INPUT */}
					<span className='flex items-center justify-between gap-5 w-3/4'>
						<Input className='w-full' />
						<Button className='bg-[#FFA03F] rounded-lg cursor-pointer transition duration-300 font-semibold shadow-xl'>
							Get Recommendation
						</Button>
					</span>
				</div>
				{/* END CENTER CONTENT */}

				{/* PESAWAT KANAN */}
				<div className='relative w-1/4'>
					<img
						src='./airplane.png'
						alt=''
						className='absolute top-[5.9rem] rotate-180 w-10 right-[10.5rem]'
					/>
					<img
						src='./doted-airplane.png'
						alt=''
						className='absolute top-[3rem] rotate-180 w-30 right-[3rem]'
					/>
				</div>
				{/* PESAWAT END */}
			</section>
			{/* END RECOMMENDATION DESTINATION */}
		</div>
	);
}

export default App;
