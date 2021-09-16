import React from "react";
import WorkoutDatabase from "../img/workoutDatabase.jpg";
import Broadcastr from "../img/broadcastr.png";
import BudgetTracker from "../img/budgetTracker.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"workoutbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Workout Database</h2>
									</div>
									<div>
										<button
											id="workoutDatabase-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var workoutDatabaseModal = document.getElementById(
													"workoutDatabase"
												);
												modalBG.style.display = "block";
												workoutDatabaseModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"broadcastrbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Broadcastr</h2>
									</div>
									<div>
										<button
											id="broadcastr-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var broadcastrModal = document.getElementById(
													"broadcastr"
												);
												modalBG.style.display = "block";
												broadcastrModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"budgetTrackerbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>To Do List</h2>
									</div>
									<div>
										<button
											id="budgetTracker-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var budgetTrackerModal = document.getElementById(
													"budgetTrackerlist"
												);
												modalBG.style.display = "block";
												budgetTrackerModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="workoutDatabase" className="modal-card">
						<div className="visual">
							<img src={WorkoutDatabase} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Workout Database</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype workout Database command line application to
										provide exercises, save exercises.
									</li>
									<li>
										Designed with python and pandas.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>Comming Soon!</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var workoutDatabaseModal = document.getElementById(
											"workoutDatabase"
										);
										modalBG.style.display = "none";
										workoutDatabaseModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="broadcastr" className="modal-card">
						<div className="visual">
							<img src={Broadcastr} alt=""/>
						</div>
						<div className="modal-info">
							<h2>broadcastr</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to promote health
										natural-made products to increase brand
										and online presence.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, Parallax Effect,
										SmoothScrolling(UI), and VanillaJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="./broadcastr/index.html"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var broadcastrModal = document.getElementById(
											"broadcastr"
										);
										modalBG.style.display = "none";
										broadcastrModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="budgetTrackerlist" className="modal-card">
						<div className="visual">
							<img src={BudgetTracker} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Budget Tracker</h2>
							<div className="modal-description">
								<ul>
									<li>
										A to-do list to keep track of goals.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="./budgetTrackerList/index.html" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var budgetTrackerModal = document.getElementById(
											"budgetTrackerlist"
										);
										modalBG.style.display = "none";
										budgetTrackerModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
