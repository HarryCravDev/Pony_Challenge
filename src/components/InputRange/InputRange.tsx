import React, { useState } from "react";
import { usePonyContext } from "../../context/Pony/PonyContext";

interface InputRangeProps {
	title: string;
	maxValue: number;
	minValue: number;
	inputColor:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error"
		| "info"
		| "accent";
	actionType: string;
	sideNav: boolean;
}

const getColorClass = (color: string) => {
	switch (color) {
		case "primary":
			return "range-primary";
		case "secondary":
			return "range-secondary";
		case "success":
			return "range-success";
		case "warning":
			return "range-warning";
		case "error":
			return "range-error";
		case "info":
			return "range-info";
		case "accent":
			return "range-accent";
		default:
			return "range-primary";
	}
};

const InputRange: React.FC<InputRangeProps> = ({
	title,
	maxValue,
	minValue,
	inputColor = "success",
	actionType,
	sideNav,
}) => {
	const { dispatch } = usePonyContext();
	const [value, setValue] = useState(minValue);

	const inputColorClass = getColorClass(inputColor);

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setValue(value);
		dispatch({
			type: actionType,
			data: value,
		});
	};

	if (!sideNav) {
		return (
			<section className="d-flex w-36">
				<h1 className="mb-1 font-bold text-lg">
					{title} : {value}
				</h1>
				<div>
					<input
						type="range"
						min={minValue}
						max={maxValue}
						value={value}
						className={`range ${inputColorClass}`}
						onChange={onInputChange}
					/>
				</div>
			</section>
		);
	} else {
		return (
			<section className="d-flex w-full">
				<h1 style={{ width: "40%" }} className="mb-1 font-bold text-lg">
					{title}: {value}
				</h1>
				<div style={{ width: "60%" }}>
					<input
						type="range"
						min={minValue}
						max={maxValue}
						value={value}
						className={`range ${inputColorClass}`}
						onChange={onInputChange}
					/>
				</div>
			</section>
		);
	}
};

export default InputRange;
