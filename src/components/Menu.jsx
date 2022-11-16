import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, eraseDrawing }) => {
	return (
		<div className="Menu">
		<label></label>
		<input
			type="button"
			value="△ Hide"
			onChange={(e) => {

			}}
		/>

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
		<label> </label>
		<input
			type="button"
			value="Create Token"
			onClick={(e) => {

			}}
		/>
		<label></label>
		<input
			type="button"
			value="Erase Board"
			onClick={(e) => {
				eraseDrawing();
			}}
		/>
		</div>
		);
};

export default Menu;
