import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.img}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string
};
