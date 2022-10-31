import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity }) => {
	return (
		<div className="Menu">
		<label>Color </label>
		<input
			type="color"
			onChange={(e) => {
			setLineColor(e.target.value);
			}}
		/>
		<label>Brush Width </label>
		<input
			type="range"
			min="3"
			max="20"
			onChange={(e) => {
			setLineWidth(e.target.value);
			}}
		/>
		<label>Brush Opacity</label>
		<input
			type="range"
			min="1"
			max="100"
			onChange={(e) => {
			setLineOpacity(e.target.value / 100);
			}}
		/>
		<label>Spawn Token </label>
		<input
			type="button"
			value="New Token"
			onChange={(e) => {
			setLineWidth(e.target.value);
			}}
		/>
		</div>
		);
};

export default Menu;
