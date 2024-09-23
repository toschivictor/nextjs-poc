import { Search } from '@/components/search/search';

export default function Dashboard() {
	return (
		<div className="flex">
			<aside className="w-1/6 bg-blue-500"></aside>
			<main>
				<h1>Dashboard</h1>
				<Search />
			</main>
		</div>
	);
}
