import Header from './components/layouts/Header';

function App() {
	return (
		<>
			<Header />

			{/* HERO SECTION */}
			<section className='bg-[#F5F5F5] py-20'>
				<div className='container mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-4'>Welcome to Ravely</h2>
					<p className='text-lg text-gray-700 mb-8'>
						Your one-stop solution for all your rave needs.
					</p>
					<button className='bg-[#FFA03F] text-white px-6 py-3 rounded-full shadow-md hover:bg-white hover:text-[#FFA03F] transition-colors duration-300 ease-in'>
						Get Started
					</button>
				</div>
			</section>
		</>
	);
}

export default App;
