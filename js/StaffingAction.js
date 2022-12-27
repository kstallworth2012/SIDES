


class StaffingAction {
	constructor(staffActionID,reasonCode, actionSubject,StaffingActionContact){
		this.staffActionID = staffActionID;
		this.reasonCode = reasonCode; 
		this.actionSubject = actionSubject;
		this.StaffingActionContact =  StaffingActionContact;
	}


	toString(){
		return `${this.staffActionID},${this.reasonCode},${this.actionSubject},${this.StaffingActionContact}`
	}


	get staffActionID(){
		return this._staffActionID
	}

	set (value){
		if (value instanceof String){
			this._staffActionID = value
		}
		else {
			throw new TypeError("this needs to be a string!")
		}
	}


	get reasonCode(){
		return this._reasonCode
	}

	set reasonCode(value){
		if (value instanceof String){
			return this._reasonCode
		}
		else {
			throw new TypeError("this needs to be a string!")
		}
	}

		get actionSubject(){
		return this._actionSubject
	}

	set actionSubject(value){
		if (value instanceof String){
			return this._actionSubject
		}
		else {
			throw new TypeError("this needs to be a string!")
		}
	}

		get StaffingActionContact(){
		return this._StaffingActionContact
	}

	set StaffingActionContact(value){
		if (value instanceof String){
			return this._StaffingActionContact
		}
		else {
			throw new TypeError("this needs to be a string!")
		}
	}


}