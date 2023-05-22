import { useEffect, useState } from "react";
import { generateRandom, visualizeChange } from "../../utils/Algo";

type Props = {};
type VerticalBarType = { index: number; value: 0 | 1 | 2 };
const barHeightTypes = {
	0: "h-24 bg-[#17A68C]",
	1: "h-36 bg-[#FF4C52]",
	2: "h-48 bg-[#0DC4D9]",
};
const space = 1.05;
const VerticalBar = ({ index, value }: VerticalBarType) => {
	return (
		<div
			id={`idx-${index}`}
			style={{ left: `${index * space + 1}rem` }}
			className={`transition-all w-2 rounded-full ${barHeightTypes[value]}  absolute bottom-4`}></div>
	);
};

const DNF = ({}: Props) => {
	const [array, setArray] = useState([1, 2, 1, 0, 1, 0, 2, 0, 1, 2, 1, 2, 2]);
	const [size, setSize] = useState(46);
	const [delay, setDelay] = useState(0.25);
	const [start, setStart] = useState(false);
	const [shuffled, setShuffled] = useState(false);
	const onSizeChangeHandler = (number: number) => {
		if (number > 46) {
			setSize(46);
		} else {
			setSize(number);
		}
	};
	const visualize = async () => {
		setStart(true);
		setShuffled(true);
		await visualizeChange(array, delay, space);
		setStart(false);
	};
	useEffect(() => {
		setArray(generateRandom(size));
	}, [size]);
	const resetSort = () => {
		setStart(false);
		setShuffled(false);
		setArray(generateRandom(size));
	};
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4">
				<button
					disabled={shuffled}
					onClick={() => {
						visualize();
					}}
					className={`flex-shrink-0 px-4 py-2 text-base font-semibold text-white  rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 ${
						shuffled
							? "bg-gray-500 hover:bg-gray-500"
							: "bg-purple-600"
					} w-fit`}>
					Sort
				</button>
				<button
					disabled={start}
					onClick={resetSort}
					className={`flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200 w-fit  ${
						start ? "bg-gray-500 hover:bg-gray-500" : "bg-red-600"
					}`}>
					Re-shuffle
				</button>
			</div>
			<div className="flex gap-4 items-center">
				<span className="text-white">No of bars</span>
				<input
					value={size}
					onChange={(e) => onSizeChangeHandler(+e.target.value)}
					type="number"
					id='"form-subscribe-Subscribe'
					className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					min={15}
				/>
				<span className="text-white">Animation Time</span>
				<select
					value={delay}
					className="rounded-lg px-4 self-stretch"
					onChange={(e) => setDelay(+e.target.value)}>
					<option value={0.25}>0.25s</option>
					<option value={0.5}>0.5s</option>
					<option value={1}>1s</option>
				</select>
			</div>
			<div
				key={`${size}${array}`}
				className="w-[50rem] bg-[#292927] h-64 relative p-4">
				<div
					id="lowPointer"
					className="w-2 absolute h-6 rounded-full bg-yellow-300"></div>
				<div
					id="midPointer"
					className="w-2 absolute h-6 rounded-full bg-red-300"></div>
				<div
					id="highPointer"
					className="w-2 absolute h-6 rounded-full bg-green-300"></div>
				{array.map((numb: any, idx) => (
					<VerticalBar index={idx} value={numb} />
				))}
			</div>
			<div className="font-bold text-white border-b-4 border-b-[#292927]">
				Dutches National Flag Algorithm
			</div>
			<div className="flex gap-4 items-center">
				<span className="text-white">Legends : </span>
				<span className="h-4 rounded-full aspect-square bg-red-400"></span>
				<span className="text-white">Mid</span>
				<span className="h-4 rounded-full aspect-square bg-yellow-400"></span>
				<span className="text-white">Low</span>
				<span className="h-4 rounded-full aspect-square bg-green-400"></span>
				<span className="text-white">High</span>
			</div>
		</div>
	);
};

export default DNF;
