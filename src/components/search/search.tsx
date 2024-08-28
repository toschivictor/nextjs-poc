'use client';

import React, { useState, useMemo } from 'react';

export function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	const [items] = useState([
		'Apple',
		'Banana',
		'Orange',
		'Mango',
		'Pineapple',
		'Grapes',
	]);

	// Memoize the filtered list
	const filteredItems = useMemo(() => {
		console.log('Filtering items...');
		return items.filter((item) =>
			item.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [items, searchTerm]); // Dependencies: recalculate only if items or searchTerm change

	return (
		<div>
			<input
				type="text"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}
