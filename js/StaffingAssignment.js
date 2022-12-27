


class StaffingAssignment {
	constructor(assignmentID,status,dateRange,endComments,ContractInfo,JobInfo,humanResourceInfo){
		this.assignmentID = assignmentID;
		this.status = status;
		this.dateRange = dateRange;
		this.endComments = endComments;
		this.ContractInfo = ContractInfo;
		this.JobInfo = JobInfo;
		this.humanResourceInfo = humanResourceInfo;
	}




		get assignmentID(){

		return this._assignmentID
		}

		set assignmentID(value){
			if(value instanceof String){
				this._assignmentID = value
			}
			else{
				throw new TypeError("Assignment ID IS A String")
			}
		}
		
		get status() {
			
			return this._status 

		   
		}


		set status() {
			if(value instanceof String){
			return this._status 

		}
		   else{
		   	throw new TypeError("status IS A String")
		   }
		}








		get dateRange(){
	    return this._dateRange 
	}
		get endComments(){

			return this._endComments 
		}
		get ContractInfo() {

			return this._ContractInfo
		}
		get JobInfo() {
			return this._JobInfo
		}
		get humanResource(){
			return this._humanResourceInfo
		}

		toString(){
			return `${this.assignmentID},${this.status},${this.ContractInfo}, ${this.JobInfo}, ${this.humanResource}`
		}
}