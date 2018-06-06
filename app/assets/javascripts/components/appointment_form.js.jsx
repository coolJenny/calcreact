class AppointmentForm extends React.Component {
	handleChange(e){
		const name = e.target.name;
		obj = {},
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onFormSubmit();
	}

	setApptTime(e){
		const name = 'appt_time';
		const obj = {};
		if(obj[name] == e.toDate()){
			this.props.onUserInput(obj);
		}
	}

	render (){
		const inputProps = {
			name: 'appt_time'
		};
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className='form-group'>
						<input name='title' placeholder='Appointment Title'
							value={this.props.title}
							onChange={this.handleChange.bind(this)}
							type='text' className='form-control' />
						
						<Datetime input={false} open={true} inputProps={inputProps} value={this.props.title} onChange={this.setApptTime.bind(this)} />

						<input type='submit' value='Make Appointment' className='submit-button btn btn-primary' />
					</div>
				</form>
			</div>			
		)
	}
}