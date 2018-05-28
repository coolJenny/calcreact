var AppointmentForm = createReactClass({
	render: function(){
		return(
			<div>
				<form>
					<input name="title" placeholder="Appointment Title" />
					<input name="appt_time" placeholder="Appointment Date and Time" />
					<input type="submit" value="Make a Appointment" />
				</form>
			</div>			
		)
	}
});