import Header from './components/layouts/Header';

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
			<section className='bg-red-500 py-10 flex items-center justify-center min-h-screen'>
				<h1>halo</h1>
			</section>
			{/* END WHY CHOSE US */}
		</div>
	);
}

export default App;
