import {
	useEffect,
	useRef,
} from "react";

export function Slider({label}) {
	const sliderValue = useRef(null);
	
	function handleValue() {
		console.log(sliderValue.current.value)
	}
	
	return (
		<div
			style={{
				// border: "black solid 1px",
				display:         'flex',
				flexDirection:   "column",
				alignItems:      "start",
				borderRadius:    "2px",
				backgroundColor: "#353535",
				padding:         "2px 6px"
			}}
		>
			<label
				style={{
					marginLeft: "5px"
				}}
			>
				{label}
			</label>
			<input
				type={"range"}
				ref={sliderValue}
				defaultValue={1}
				onInput={handleValue}
				max={1.05}
				min={0.95}
				step={0.001}
			/>
		</div>
	)
}