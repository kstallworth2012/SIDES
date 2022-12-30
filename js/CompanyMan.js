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

				this.companyID companyID
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


	           get companyID() {}

	           set companyID(value) {}



				get lastName() {}
 
				set lastName(value) {}


				get firstName() {}

				set firstName(value) {}



				get title() {}

				set title(value) {}



				get companyName() {}

				set companyName(value) {}


				get address() {}

				set address(value) {}


				get homePhone() {}

				set homePhone(value) {}


				get workPhone() {}

				set workPhone(value) {}



				get fax() {}

				set fax(value) {}

				
				get email() {}

				set email(value) {}

				
				get webpage() {}

				set webpage(value) {}

				
				get linkedin() {}
  
				set linkedin(value) {}
  

				get notes() {}
				set notes(value) {}

}