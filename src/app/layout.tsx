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
				<main className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
					{children}
				</main>
			</body>
		</html>
	);
}
