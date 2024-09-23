import { UserAuthentication } from '@/components/user-authentication/user-authentication';

export default function Home() {
	return (
		<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
			<UserAuthentication />
		</div>
	);
}
