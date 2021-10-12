import React from "react";
import WorkoutDatabase from "../img/workoutDatabase.jpg";
import Broadcastr from "../img/broadcastr.png";
import BudgetTracker from "../img/budgetTracker.png";
import GooglePotholes from "../img/googlePotholes.png";
import TechBabble from "../img/techBabble.png";
import EmployeeDB from "../img/employeeDatabase.png";

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
									"googlePotholesbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Google Potholes</h2>
									</div>
									<div>
										<button
											id="googlePotholes-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var googlePotholesModal = document.getElementById(
													"googlePotholes"
												);
												modalBG.style.display = "block";
												googlePotholesModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"techBabblebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Tech Babble</h2>
									</div>
									<div>
										<button
											id="techBabble-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var techBabbleModal = document.getElementById(
													"techBabble"
												);
												modalBG.style.display = "block";
												techBabbleModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"employeeDBbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Employee Database</h2>
									</div>
									<div>
										<button
											id="employeeDB-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var employeeDBModal = document.getElementById(
													"employeeDB"
												);
												modalBG.style.display = "block";
												employeeDBModal.style.display =
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
										<h2>Budget Tracker</h2>
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
							<img src={WorkoutDatabase} alt="" />
						</div>
						<div className="modal-info">
							<h2>Workout Database</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype workout Database command line application to
										provide exercises, save exercises.
										Hit a plateau or just don't know where to start with exercises?
										I built this workout database just for you! This app helps a user create new
										workouts based off of user selected muscle groups, returns exercise associated with
										that muscle group, and stores them for later use.
									</li>
									<li>
										Designed with python and pandas.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>Watch live demo above!</h4>
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

					<div id="googlePotholes" className="modal-card">
						<div className="visual">
							<img src={GooglePotholes} alt="" />
						</div>
						<div className="modal-info">
							<h2>Google Potholes</h2>
							<div className="modal-description">
								<ul>
									<li>
										A website that displays and allows you to search potholes all over austin!
									</li>
									<li>
										Developed with JavaScript, HTML & CSS
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://rmwillow.github.io/googlePotholes/"
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
										var googlePotholesModal = document.getElementById(
											"googlePotholes"
										);
										modalBG.style.display = "none";
										googlePotholesModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="employeeDB" className="modal-card">
						<div className="visual">
							<img src={EmployeeDB} alt="" />
						</div>
						<div className="modal-info">
							<h2>Employee Database</h2>
							<div className="modal-description">
								<ul>
									<li>
										Employee Database is a command-line application to manage a company's employee database
									</li>
									<li>
										Developed with JavaScript, Express, NodeJs, & MySQL2
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://drive.google.com/file/d/1-sO-UYQSLQdRDVdQUff2bJ-24V4JylGY/view"
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
										var employeeDBModal = document.getElementById(
											"employeeDB"
										);
										modalBG.style.display = "none";
										employeeDBModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="techBabble" className="modal-card">
						<div className="visual">
							<img src={TechBabble} alt="" />
						</div>
						<div className="modal-info">
							<h2>Tech Babble</h2>
							<div className="modal-description">
								<ul>
									<li>
										A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
									</li>
									<li>
										Developed with JavaScript, Express, MySQL2, Bcrypt & Handlebars
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://technologybabble.herokuapp.com/"
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
										var techBabbleModal = document.getElementById(
											"techBabble"
										);
										modalBG.style.display = "none";
										techBabbleModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="broadcastr" className="modal-card">
						<div className="visual">
							<img src={Broadcastr} alt="" />
						</div>
						<div className="modal-info">
							<h2>broadcastr</h2>
							<div className="modal-description">
								<ul>
									<li>
										broadcastr is a social engagement application that makes it easy
										for avid TV watchers to find their next bingeworthy show. Users
										can search for TV shows of all types of genres, read reviews submitted
										by other users, and upvote those reviews. After binging a show, users
										can come back to the app and share a review of their own.


									</li>
									<li>
										Developed with JavaScript, Node.js, Handlebars, dotenv & MySQL
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://broadcastrss.herokuapp.com/"
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
							<img src={BudgetTracker} alt="" />
						</div>
						<div className="modal-info">
							<h2>Budget Tracker</h2>
							<div className="modal-description">
								<ul>
									<li>
										A PWA for tracking your budget!
									</li>
									<li>
										Developed  Express, Mongoose, and MongoDB
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://budgetrackers.herokuapp.com/" target="_blank">
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
