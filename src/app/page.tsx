import Image from 'next/image';
import { UserAuthentication } from '@/components/user-authentication/user-authentication';
import { Search } from '@/components/search/search';

export default function Home() {
	return (
		<div>
			<Search />
			<UserAuthentication />
		</div>
	);
}
