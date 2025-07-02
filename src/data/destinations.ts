export interface Destination {
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

export const dummyDestinations: Destination[] = [
	{
		id: 1,
		name: 'Borobudur Temple',
		location: 'Magelang, Central Java',
		description:
			'Experience the magnificent 8th-century Buddhist temple, a UNESCO World Heritage site surrounded by lush tropical landscapes. Witness breathtaking sunrise views and explore ancient Buddhist architecture.',
		image: 'https://i.pinimg.com/736x/42/eb/c8/42ebc887a379f5a735fbf863b520231f.jpg',
		price: '$45/person',
		rating: 4.8,
		duration: 'Full Day',
		highlights: ['UNESCO Heritage', 'Sunrise Tour', 'Buddhist Culture', 'Photography Spots'],
	},
	{
		id: 2,
		name: 'Raja Ampat Islands',
		location: 'West Papua, Indonesia',
		description:
			"Dive into the world's richest marine biodiversity in this pristine archipelago. Perfect for snorkeling, diving, and exploring untouched coral reefs with vibrant marine life.",
		image: 'https://i.pinimg.com/736x/a4/2c/a5/a42ca54e4214fce41d5804b4580b38eb.jpg',
		price: '$120/person',
		rating: 4.9,
		duration: '3-4 Days',
		highlights: ['Marine Biodiversity', 'Diving Paradise', 'Coral Reefs', 'Island Hopping'],
	},
	{
		id: 3,
		name: 'Mount Bromo Sunrise',
		location: 'East Java, Indonesia',
		description:
			'Witness the spectacular sunrise over the volcanic landscape of Mount Bromo. Experience the otherworldly beauty of the Tengger Caldera and traditional Tenggerese culture.',
		image: 'https://i.pinimg.com/736x/14/95/16/14951623665d09790a7ed2d4d9d887b2.jpg',
		price: '$65/person',
		rating: 4.7,
		duration: '2 Days 1 Night',
		highlights: ['Sunrise Views', 'Volcanic Landscape', 'Jeep Adventure', 'Local Culture'],
	},
	{
		id: 4,
		name: 'Yogyakarta Cultural Tour',
		location: 'Yogyakarta, Indonesia',
		description:
			'Immerse yourself in the cultural heart of Java with visits to royal palaces, traditional markets, and authentic Javanese cuisine experiences.',
		image: 'https://i.pinimg.com/736x/92/24/c7/9224c73f577d398b338fd8e0ab03c91a.jpg',
		price: '$35/person',
		rating: 4.6,
		duration: '2 Days',
		highlights: ['Royal Palace', 'Traditional Batik', 'Street Food', 'Art Villages'],
	},
	{
		id: 5,
		name: 'Lake Toba Paradise',
		location: 'North Sumatra, Indonesia',
		description:
			'Relax by the largest volcanic lake in the world, surrounded by stunning mountain views and rich Batak culture. Perfect for a peaceful getaway.',
		image: 'https://i.pinimg.com/736x/cd/fc/7d/cdfc7df29fb2a2590c915b2f48ba3e7b.jpg',
		price: '$55/person',
		rating: 4.5,
		duration: '3 Days 2 Nights',
		highlights: ['Volcanic Lake', 'Batak Culture', 'Traditional Villages', 'Mountain Views'],
	},
	{
		id: 6,
		name: 'Komodo National Park',
		location: 'East Nusa Tenggara, Indonesia',
		description:
			'Meet the legendary Komodo dragons in their natural habitat and explore pristine beaches with pink sand and crystal-clear waters.',
		image: 'https://i.pinimg.com/736x/42/eb/c8/42ebc887a379f5a735fbf863b520231f.jpg',
		price: '$150/person',
		rating: 4.8,
		duration: '4 Days 3 Nights',
		highlights: ['Komodo Dragons', 'Pink Beach', 'Diving & Snorkeling', 'Wildlife Photography'],
	},
];

// Function to filter destinations based on search query
export const filterDestinations = (query: string): Destination[] => {
	if (!query.trim()) return [];

	const searchTerm = query.toLowerCase();
	return dummyDestinations.filter(
		(destination) =>
			destination.name.toLowerCase().includes(searchTerm) ||
			destination.location.toLowerCase().includes(searchTerm) ||
			destination.description.toLowerCase().includes(searchTerm) ||
			destination.highlights.some((highlight) => highlight.toLowerCase().includes(searchTerm))
	);
};
