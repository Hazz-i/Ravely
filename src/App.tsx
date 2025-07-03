import React, { useState, useEffect, useRef } from 'react';
import Header from './components/layouts/Header';
import Carousel from './components/Carousel';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import Footer from './components/layouts/Footer';
import DestinationResults from './components/DestinationResults';
import { filterDestinations, type Destination } from './data/destinations';

function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<Destination[]>([]);
	const [showResults, setShowResults] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// New states for autocomplete
	const [allDestinations, setAllDestinations] = useState<any[]>([]);
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [activeSuggestion, setActiveSuggestion] = useState(-1);
	const [isLoadingDestinations, setIsLoadingDestinations] = useState(true); // Add loading state for destinations
	const inputRef = useRef<HTMLInputElement>(null);

	// Fetch all destinations on component mount
	useEffect(() => {
		const fetchAllDestinations = async () => {
			try {
				setIsLoadingDestinations(true); // Start loading
				const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
				const response = await fetch(`${apiBaseUrl}/destinations`);

				if (response.ok) {
					const data = await response.json();
					setAllDestinations(data.destinations || []);
				}
			} catch (error) {
				console.error('Error fetching all destinations:', error);
			} finally {
				setIsLoadingDestinations(false); // End loading
			}
		};

		fetchAllDestinations();
	}, []);

	// Handle input change for autocomplete
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Don't allow input changes while destinations are loading
		if (isLoadingDestinations) return;

		const value = e.target.value;
		setSearchQuery(value);

		if (value.length > 0) {
			const filteredSuggestions = allDestinations
				.map((dest) => dest.title)
				.filter((title) => title.toLowerCase().includes(value.toLowerCase()))
				.slice(0, 5); // Limit to 5 suggestions

			setSuggestions(filteredSuggestions);
			setShowSuggestions(true);
			setActiveSuggestion(-1);
		} else {
			setShowSuggestions(false);
			setSuggestions([]);
		}
	};

	// Handle suggestion click
	const handleSuggestionClick = (suggestion: string) => {
		setSearchQuery(suggestion);
		setShowSuggestions(false);
		setSuggestions([]);
		setActiveSuggestion(-1);
	};

	// Handle keyboard navigation
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setActiveSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (activeSuggestion >= 0) {
				handleSuggestionClick(suggestions[activeSuggestion]);
			} else {
				handleSearch();
			}
		} else if (e.key === 'Escape') {
			setShowSuggestions(false);
			setActiveSuggestion(-1);
		}
	};

	// Close suggestions when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
				setShowSuggestions(false);
				setActiveSuggestion(-1);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleSearch = async () => {
		if (searchQuery.trim()) {
			setIsLoading(true);
			setShowSuggestions(false);
			try {
				// Array of image URLs from the project
				const imageUrls = [
					'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					'https://images.unsplash.com/photo-1448518184296-a22facb4446f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					'https://images.unsplash.com/photo-1553913861-dc2ce76b856c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					'https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					'https://i.pinimg.com/736x/cd/fc/7d/cdfc7df29fb2a2590c915b2f48ba3e7b.jpg',
				];

				// Function to shuffle array and ensure unique images for each destination
				const getUniqueImages = (count: number) => {
					const shuffled = [...imageUrls].sort(() => Math.random() - 0.5);
					return shuffled.slice(0, count);
				};

				// Function to generate random rating between 3.5-5.0
				const getRandomRating = () => {
					return Math.round((Math.random() * (5.0 - 3.5) + 3.5) * 10) / 10;
				};

				// Call the API endpoint for recommendations
				const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
				const response = await fetch(
					`${apiBaseUrl}/recommendations?destination_name=${encodeURIComponent(
						searchQuery
					)}&limit=5`
				);

				if (response.ok) {
					const data = await response.json();
					// Get unique images for each destination (up to 5)
					const uniqueImages = getUniqueImages(data.recommendations.length);

					// Transform API response to match our Destination type
					const transformedResults = data.recommendations.map((item: any, index: number) => ({
						id: Math.random(),
						name: item.nama_destinasi,
						location: item.kabupaten,
						image: uniqueImages[index],
						price: 'Contact for pricing',
						rating: getRandomRating(),
						description: `Explore ${item.nama_destinasi} in ${item.kabupaten}`,
						duration: 'Full Day',
						highlights: item.categories || ['Cultural Site', 'Local Experience', 'Scenic Views'],
						mapUrl: item.alamat,
					}));

					setSearchResults(transformedResults);
					setShowResults(true);
				} else {
					console.error('Failed to fetch recommendations');
					// Fallback to local data if API fails
					const results = filterDestinations(searchQuery);
					setSearchResults(results);
					setShowResults(true);
				}
			} catch (error) {
				console.error('Error fetching recommendations:', error);
				// Fallback to local data if API fails
				const results = filterDestinations(searchQuery);
				setSearchResults(results);
				setShowResults(true);
			} finally {
				setIsLoading(false);
			}
		}
	};

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
						<div className='flex items-center justify-between py-5 px-10 gap-[5rem] absolute rounded-3xl shadow-lg backdrop-blur-lg'>
							<span className='flex items-center justify-between gap-15 w-full'>
								{/* LOCATION */}
								<span className='grid'>
									<h1 className='text-lg font-semibold'>Location</h1>
									<div className='relative'>
										<input
											ref={inputRef}
											type='text'
											placeholder={
												isLoadingDestinations ? 'Loading destinations...' : 'Where are you going?'
											}
											className={`text-sm bg-transparent border-none outline-none w-full ${
												isLoadingDestinations ? 'text-gray-400 cursor-not-allowed' : 'text-gray-500'
											}`}
											value={searchQuery}
											onChange={handleInputChange}
											onKeyDown={handleKeyDown}
											disabled={isLoadingDestinations}
										/>

										{/* Loading indicator */}
										{isLoadingDestinations && (
											<div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
												<div className='w-4 h-4 border-2 border-[#FFA03F] border-t-transparent rounded-full animate-spin'></div>
											</div>
										)}

										{/* Autocomplete Suggestions */}
										{showSuggestions && suggestions.length > 0 && !isLoadingDestinations && (
											<div className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-60 overflow-y-auto'>
												{suggestions.map((suggestion, index) => (
													<div
														key={index}
														className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
															index === activeSuggestion
																? 'bg-[#FFA03F]/10 text-[#FFA03F]'
																: 'text-gray-700'
														}`}
														onClick={() => handleSuggestionClick(suggestion)}
													>
														<div className='flex items-center'>
															<i className='bx bx-map-pin text-gray-400 mr-3'></i>
															<span className='text-sm'>{suggestion}</span>
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								</span>

								{/* DATE */}
								<span className='grid'>
									<h1 className='text-lg font-semibold'>Date</h1>
									<p className='text-sm text-gray-500'>{new Date().toLocaleDateString('en-GB')}</p>
								</span>
							</span>

							<button
								className='bg-[#FFA03F] text-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center disabled:opacity-50 disabled:cursor-not-allowed'
								onClick={handleSearch}
								disabled={isLoading || isLoadingDestinations}
							>
								{isLoading ? (
									<div className='w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
								) : (
									<i className='bx bx-search text-xl'></i>
								)}
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
								src='https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-60 h-[20rem] rounded-2xl overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1448518184296-a22facb4446f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
								src='https://images.unsplash.com/photo-1553913861-dc2ce76b856c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
								src='https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute flex items-center justify-center gap-5 -bottom-15 -right-5 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-lg bg-black/20'>
							<span className='text-[#FFA03F] bg-white p-2 rounded-full cursor-pointer transition duration-300 items-center flex justify-center'>
								<i className='bxr bx-book text-3xl'></i>
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
							<button className='text-[#FFA03F] -white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center shadow-sm'>
								<i className='bxr bx-seal text-3xl'></i>
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
							<button className='text-[#FFA03F] bg-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center shadow-sm'>
								<i className='bxr bx-calendar-week text-3xl'></i>
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
							<button className='text-[#FFA03F] bg-white p-2 rounded-lg cursor-pointer transition duration-300 items-center flex justify-center shadow-sm'>
								<i className='bxr bx-location text-3xl'></i>
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
								src='https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute flex items-center flex-col justify-center -bottom-15 -left-5 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-lg bg-[#EBEBEB]/50'>
							<h1 className='text-lg'>How Your Experience?</h1>
							<span className='items-center flex justify-center gap-2'>
								<p className='cursor-pointer text-xl hover:scale-125 hover:rotate-12 transition-all duration-300 ease-in-out transform hover:shadow-lg'>
									🥵
								</p>
								<p className='cursor-pointer text-xl hover:scale-125 hover:-rotate-6 transition-all duration-300 ease-in-out transform hover:shadow-lg'>
									😭
								</p>
								<p className='cursor-pointer text-xl hover:scale-125 hover:rotate-6 transition-all duration-300 ease-in-out transform hover:shadow-lg'>
									😂
								</p>
								<p className='cursor-pointer text-xl hover:scale-125 hover:-rotate-12 transition-all duration-300 ease-in-out transform hover:shadow-lg'>
									🤔
								</p>
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
					<span className='flex items-center justify-between gap-5 w-3/4 relative'>
						<div className='relative w-full'>
							<Input
								ref={inputRef}
								className={`w-full ${isLoadingDestinations ? 'cursor-not-allowed' : ''}`}
								placeholder={
									isLoadingDestinations
										? 'Loading destinations...'
										: 'Search destinations (e.g., Yogyakarta, Borobudur, diving...)'
								}
								value={searchQuery}
								onChange={handleInputChange}
								onKeyDown={handleKeyDown}
								disabled={isLoadingDestinations}
							/>

							{/* Loading indicator for second input */}
							{isLoadingDestinations && (
								<div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
									<div className='w-4 h-4 border-2 border-[#FFA03F] border-t-transparent rounded-full animate-spin'></div>
								</div>
							)}

							{/* Autocomplete Suggestions */}
							{showSuggestions && suggestions.length > 0 && !isLoadingDestinations && (
								<div className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-60 overflow-y-auto'>
									{suggestions.map((suggestion, index) => (
										<div
											key={index}
											className={`px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
												index === activeSuggestion
													? 'bg-[#FFA03F]/10 text-[#FFA03F]'
													: 'text-gray-700'
											}`}
											onClick={() => handleSuggestionClick(suggestion)}
										>
											<div className='flex items-center'>
												<i className='bx bx-map-pin text-gray-400 mr-3'></i>
												<span className='text-sm'>{suggestion}</span>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
						<Button
							className='bg-[#FFA03F] rounded-lg cursor-pointer transition duration-300 font-semibold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed'
							onClick={handleSearch}
							disabled={isLoading || isLoadingDestinations}
						>
							{isLoading ? 'Searching...' : 'Get Recommendation'}
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

			{/* SEARCH RESULTS */}
			{showResults && <DestinationResults searchQuery={searchQuery} destinations={searchResults} />}
			{/* END SEARCH RESULTS */}

			<Footer />
		</div>
	);
}

export default App;
