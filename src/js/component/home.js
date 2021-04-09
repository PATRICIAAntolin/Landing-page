import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar></Navbar>
			<div className="father">
				<div className="bodypage">
					<Jumbotron></Jumbotron>
					<div className="d-flex">
						<Card
							title="Titúlo 1"
							text="This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer."
							img="https://picsum.photos/id/237/200/300"></Card>
						<Card
							title="Titúlo 2"
							text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
							img="https://picsum.photos/id/238/200/300"></Card>

						<Card
							title="Titúlo 3"
							text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
							img="https://picsum.photos/id/239/200/300"></Card>
						<Card
							title="Titúlo 4"
							text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
							img="https://picsum.photos/id/232/200/300"></Card>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
