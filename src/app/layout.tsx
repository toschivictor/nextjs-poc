import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'My Next App Playground',
	description: 'App for test next.js functionalities',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="bg-white flex items-center justify-center border-b border-gray-100">
					<h1 className="font-semibold text-2xl p-5">Playground</h1>
				</header>
				<main>{children}</main>
				<footer className="bg-white flex items-center justify-center border-t border-gray-100">
					<h1 className="font-semibold text-2xl p-5">Playground</h1>
				</footer>
			</body>
		</html>
	);
}
