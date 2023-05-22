const swap = (arr: number[], first: number, second: number) => {
	[arr[first], arr[second]] = [arr[second], arr[first]];
	console.log(first, second);
};
const delayPromis = (delay: number) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve("yo");
		}, delay * 1000);
	});

export const generateRandom = (size: number) => {
	const arr = [0, 1, 2];
	const temp = [];
	for (let i = 0; i < size; i++) {
		const idx = Math.floor(Math.random() * arr.length);
		temp.push(arr[idx]);
	}
	return temp;
};

export const visualizeChange = async (
	array: number[],
	delay: number,
	space: number
) => {
	const arr = [...array];
	let low = 0;
	let mid = 0;
	let high = arr.length - 1;
	const idx = arr.map((_, idx) => idx);

	while (mid <= high) {
		if (arr[mid] === 0) {
			swap(arr, low, mid);
			swap(idx, low, mid);
			const lowEle = document.getElementById(`idx-${idx[low]}`);
			const midEle = document.getElementById(`idx-${idx[mid]}`);
			lowEle!.style.left = `${low * space + 1}rem`;
			midEle!.style.left = `${mid * space + 1}rem`;
			const midPointer = document.getElementById(`midPointer`);
			midPointer!.style.left = `${mid * space + 1}rem`;
			const lowPointer = document.getElementById(`lowPointer`);
			lowPointer!.style.left = `${low * space + 1}rem`;
			low++;
			mid++;
			await delayPromis(delay);
		} else if (arr[mid] === 2) {
			swap(idx, mid, high);
			swap(arr, mid, high);
			const highEle = document.getElementById(`idx-${idx[high]}`);
			const midEle = document.getElementById(`idx-${idx[mid]}`);
			highEle!.style.left = `${high * space + 1}rem`;
			midEle!.style.left = `${mid * space + 1}rem`;
			const midPointer = document.getElementById(`midPointer`);
			midPointer!.style.left = `${mid * space + 1}rem`;
			const highPointer = document.getElementById(`highPointer`);
			highPointer!.style.left = `${high * space + 1}rem`;
			high--;
			await delayPromis(delay);
		} else if (arr[mid] === 1) {
			const midPointer = document.getElementById(`midPointer`);
			midPointer!.style.left = `${mid * space + 1}rem`;
			mid++;
			await delayPromis(delay);
		}
	}
};
