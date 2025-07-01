const data = [
	{
		image: 'https://i.pinimg.com/736x/44/a4/f8/44a4f851540e5ee0d1c036add10d317f.jpg',
		title: 'Lakshadweep',
		price: '45,000',
		rating: '4.0',
		reviews: '23',
		emoji: '😊',
		days: '4',
		people: '10+',
	},
	{
		image: 'https://i.pinimg.com/736x/d3/f5/3a/d3f53a6d2b0c3e27cb1c3c07a8ed9218.jpg',
		title: 'Kaziranga',
		price: '23,000',
		rating: '4.5',
		reviews: '32',
		emoji: '😍',
		days: '6',
		people: '13+',
	},
	{
		image: 'https://i.pinimg.com/736x/c1/a3/8e/c1a38e24cba5663d75045eeafbadb4de.jpg',
		title: 'Sun temple',
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
				<button className='bg-white shadow-md rounded-full p-3 text-[#FFA03F] hover:bg-orange-100 absolute left-0 top-1/2 -translate-y-1/2'>
					<i className='bx bx-chevron-left'></i>
				</button>

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
									<i className='bx bx-time text-lg'></i> {item.days} Day’s
								</span>
								<span className='flex items-center gap-1'>
									<i className='bx bx-user text-lg'></i> {item.people}
								</span>
								<span className='flex items-center gap-1'>
									<i className='bx bx-map text-lg'></i> India
								</span>
							</div>
						</div>
					</div>
				))}

				<button className='bg-white shadow-md rounded-full p-3 text-[#FFA03F] hover:bg-orange-100 absolute right-0 top-1/2 -translate-y-1/2'>
					<i className='bx bx-chevron-right'></i>
				</button>
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
