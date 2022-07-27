export async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init);
	return res.json();
}

interface Response {
	message: string[];
	status: string;
}

export const fetchDogs = async () => {
	const dogs: Promise<string[]> = fetcher<Response>('https://dog.ceo/api/breeds/image/random/16').then(res => res.message);
	return dogs;
}