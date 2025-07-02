import { Button } from './ui/button';

interface Destination {
	id: number;
	name: string;
	location: string;
	description: string;
	image: string;
	price: string;
	rating: number;
	duration: string;
	highlights: string[];
}

interface DestinationResultsProps {
	searchQuery: string;
	destinations: Destination[];
}

const DestinationResults = ({ searchQuery, destinations }: DestinationResultsProps) => {
	return (
		<section className='container mx-auto pb-16'>
			{/* Header */}
			<div className='text-center mb-12'>
				<h2 className='text-3xl font-bold mb-4'>Recommended Destinations for "{searchQuery}"</h2>
				<p className='text-gray-600 text-lg'>
					We found {destinations.length} amazing destinations based on your preferences
				</p>
			</div>

			{/* Results Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
				{destinations.map((destination) => (
					<div key={destination.id} className='bg-white rounded-3xl shadow-xl overflow-hidden w-72'>
						<div className='relative'>
							<img
								src={destination.image}
								alt={destination.name}
								className='w-full h-[20rem] object-cover rounded-t-3xl'
							/>
							<div className='absolute -bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm shadow flex destinations-center gap-1'>
								<small>⭐ {destination.rating}</small>
							</div>
						</div>

						<div className='p-6'>
							<div className='mb-4'>
								<h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
								<p className='text-gray-600 text-sm mb-2 flex items-center'>
									<i className='bx bx-map text-[#FFA03F] mr-2'></i>
									{destination.location}
								</p>
							</div>

							{/* Highlights */}
							<div className='mb-6'>
								<p className='text-sm font-semibold mb-2'>Highlights:</p>
								<div className='flex flex-wrap gap-2'>
									{destination.highlights &&
										destination.highlights.slice(0, 3).map((highlight, index) => (
											<span
												key={index}
												className='bg-[#FFA03F]/10 text-[#FFA03F] px-2 py-1 rounded-full text-xs'
											>
												{highlight}
											</span>
										))}
								</div>
							</div>

							{/* Action Buttons */}
							<div className='flex gap-3'>
								<Button
									className='flex-1 bg-[#FFA03F] hover:bg-[#ff8a1a] text-white'
									onClick={() =>
										window.open(
											`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
												destination.name + ' ' + destination.location
											)}`,
											'_blank'
										)
									}
								>
									View Details
								</Button>
								<Button
									variant='outline'
									className='border-[#FFA03F] text-[#FFA03F] hover:bg-[#FFA03F] hover:text-white'
								>
									<i className='bx bx-heart'></i>
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default DestinationResults;
