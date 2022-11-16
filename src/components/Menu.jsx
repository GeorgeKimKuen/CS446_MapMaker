import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, eraseDrawing, placePiece }) => {
	return (
		<div className="Menu">
		<label></label>
		<input
			type="button"
			value="△"
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
			value="Place a piece"
			onClick={(e) => {
				placePiece();
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
