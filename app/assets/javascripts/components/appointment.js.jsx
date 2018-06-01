var Appointment = createReactClass({
	render: function(){
		return(
			<div>
				<h3>{this.props.appointment.title}</h3>
				<p>{moment(this.props.appointment.appt_time).format('MMMMM DD YYYYY, h:mm:ss a')}</p>
			</div>
		)
	}
});