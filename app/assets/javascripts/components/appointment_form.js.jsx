var AppointmentForm = createReactClass({
	handleChange: function(e){
		var name = e.target.name;
		obj = {},
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	},

	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit();
	},

	setApptTime: function(e){
		var name = 'appt_time';
		var obj = {};
		if(obj[name] == e.toDate()){
			this.props.onUserInput(obj);
		}
	},

	render: function(){
		var inputProps = {
			name: 'appt_time'
		};
		return(
			<div>
				<Label label='Enter a title, date and time' />
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<input name='title' placeholder='Appointment Title'
							value={this.props.title}
							onChange={this.handleChange}
							type='text' className='form-control' />
						
						<Datetime input={false} open={true} inputProps={inputProps} value={this.props.title} onChange={this.setApptTime} />

						<input type='submit' value='Make Appointment' className='submit-button btn btn-primary' />
					</div>
				</form>
			</div>			
		)
	}
});