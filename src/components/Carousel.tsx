const data = [
	{
		image:
			'https://images.unsplash.com/photo-1572025600482-08238b1ed5a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Pantai Parangtritis',
		price: '45,000',
		rating: '4.0',
		reviews: '23',
		emoji: '😊',
		days: '4',
		people: '10+',
	},
	{
		image:
			'https://images.unsplash.com/photo-1675296098308-f9f526c6b724?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Gembira Loka Zoo',
		price: '23,000',
		rating: '4.5',
		reviews: '32',
		emoji: '😍',
		days: '6',
		people: '13+',
	},
	{
		image:
			'https://images.unsplash.com/photo-1677211352662-30e7775c7ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Candi Prambanan',
		price: '19,000',
		rating: '4.7',
		reviews: '42',
		emoji: '😎',
		days: '4',
		people: '10+',
	},
];
const Carousel = () => {
	return (
		<span className='grid'>
			<div className='flex items-center justify-center gap-6 relative'>
				{/* <button className='bg-white shadow-md rounded-full p-3 text-[#FFA03F] hover:bg-orange-100 absolute left-0 top-1/2 -translate-y-1/2'>
					<i className='bx bx-chevron-left'></i>
				</button> */}

				{data.map((item, index) => (
					<div key={index} className='bg-white rounded-3xl shadow-xl overflow-hidden w-72'>
						<div className='relative'>
							<img
								src={item.image}
								alt={item.title}
								className='w-full h-[20rem] object-cover rounded-t-3xl'
							/>
							<div className='absolute -bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm shadow flex items-center gap-1'>
								<small>
									⭐ {item.rating} ({item.reviews}) {item.emoji}
								</small>
							</div>
						</div>
						<div className='p-5'>
							<h3 className='text-lg font-semibold'>{item.title}</h3>
							<p className='text-[#FFA03F] font-bold text-sm mb-4'>
								Rs. {item.price}/- <span className='text-gray-500 font-normal'>Per person</span>
							</p>
							<div className='flex items-center justify-between text-sm text-gray-500'>
								<span className='flex items-center gap-1'>
									<i className='bxr  bx-clock-5'></i> {item.days} Day's
								</span>
								<span className='flex items-center gap-1'>
									<i className='bx bx-user text-lg'></i> {item.people}
								</span>
								<span className='flex items-center gap-1'>
									<i className='bx bx-map text-lg'></i> Yogyakarta
								</span>
							</div>
						</div>
					</div>
				))}

				{/* <button className='bg-white shadow-md rounded-full p-3 text-[#FFA03F] hover:bg-orange-100 absolute right-0 top-1/2 -translate-y-1/2'>
					<i className='bx bx-chevron-right'></i>
				</button> */}
			</div>

			<div className='flex justify-center mt-6 gap-2'>
				{[0, 1, 2].map((_, i) => (
					<span
						key={i}
						className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-[#FFA03F]' : 'bg-gray-300'}`}
					></span>
				))}
			</div>
		</span>
	);
};

export default Carousel;
