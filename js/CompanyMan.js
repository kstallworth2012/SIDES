// A GENERIC PERSON CLASS 
// for business use and to basic class set up information 
class CompanyMan {
	constructor(companyID,
				lastName, 
				firstName, 
				title, 
				companyName, 
				address,
				homePhone,
				workPhone, 
				fax, 
				email, 
				webpage,
				linkedin,  
				notes){

				this.companyID = companyID
				this.lastName  = lastName
				this.firstName firstName
				this.title = title 
				this.companyName companyName
				this.address = address
				this.homePhone = homePhone
				this.workPhone = workPhone 
				this.fax = fax 
				this.email = email 
				this.webpage = webpage
				this.linkedin = linkedin  
				this.notes = notes
	}

			 toString(){
			 	return `${this.companyID},${this.lastName}, ${this.firstName}, ${this.title}`
			 }


	           get companyID() {
	           	   return this._companyID
	           }

	           set companyID(value) {
	           	 if(typeof value === 'string' && value.trim().length > 0){
	           	 	this._companyID = value 
	           	 }
	           	   else {
	           	   	   throw new TypeError("Value needs to be a string and length greater than zero")
	           	   }
	           }



				get lastName() {
					return this._lastName
				}
 
				set lastName(value) {}


				get firstName() {
					  this._firstName
				}

				set firstName(value) {}



				get title() {
					return this._title
				}

				set title(value) {}



				get companyName() {
					this._companyName
				}

				set companyName(value) {}


				get address() {
					   this._address
				}

				set address(value) {}


				get homePhone() {
					return this._homePhone
				}

				set homePhone(value) {}


				get workPhone() {
					this_.workPhone
				}

				set workPhone(value) {}



				get fax() {
					this._fax
				}

				set fax(value) {}

				
				get email() {
					this._email
				}

				set email(value) {}

				
				get webpage() {
					this._webpage
				}

				set webpage(value) {}

				
				get linkedin() {}
  
				set linkedin(value) {
					this._linkedin
				}
  

				get notes() {
					this._notes
				}
				set notes(value) {}

				static validate(CompanyMan){

						if(typeof CompanyMan.companyName === 'string' && typeof CompanyMan.firstName === 'string' && typeof CompanyMan.lastName === 'string' )
						{
									return
						} 
						else{
							throw new TypeError("you must provide first, last names and companyName")
						}
				}

}