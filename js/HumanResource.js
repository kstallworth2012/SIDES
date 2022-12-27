
class HRPreferences {
	constructor(
		DesiredShiftName,
		DesiredShiftHours,
		DesiredShiftStartTime,
		DesiredShiftEndTime,
		DesiredShiftComments,
		WillingToTravel,
		TravelPercentage,
		TravelConsiderations,
		CommuteTimeMax,
		CommuteDistanceMax,
		CommuteComments,
		RelocationComments
		WillingToRelocate,
		DoNotDistributeTo,
		DesiredCompensationAmount,
		DesiredCompensationComments

		){
		this.DesiredShiftName = DesiredShiftName;
		this.DesiredShiftHours = DesiredShiftHours;
		this.DesiredShiftStartTime = DesiredShiftStartTime;
		this.DesiredShiftEndTime =DesiredShiftEndTime;
		this.DesiredShiftComments DesiredShiftComments;
		this.WillingToTravel = WillingToTravel;
		this.TravelPercentage = TravelPercentage;
		this.TravelConsideration = TravelConsideration;
		this.CommuteTimeMax = CommuteTimeMax;
		this.CommuteDistanceMax CommuteDistanceMax;
		this.CommuteComments = CommuteComments;
		this.RelocationComments = RelocationComments;
		this.WillingToRelocate = WillingToRelocate
		this.DoNotDistributeTo = DoNotDistributeTo;
		this.DesiredCompensationAmount = DesiredCompensationAmount;
		this.DesiredCompensationComments = DesiredCompensationComments;
	}


    	get DesiredShiftName() {}
    	set DesiredShiftName() {}
		
		get DesiredShiftHours() {}
		set DesiredShiftHours() {}

		get DesiredShiftStartTime() {}
		set DesiredShiftStartTime() {}

		get DesiredShiftEndTime() {}
		set DesiredShiftEndTime() {}

		get DesiredShiftComments() {}
		set DesiredShiftComments() {}

		get WillingToTravel() {}
		set WillingToTravel() {}

		get TravelPercentage() {}
		set TravelPercentage() {}
		
		get TravelConsiderations() {}
		set TravelConsiderations() {}
		
		get CommuteTimeMax(){}
		set CommuteTimeMax(){}
		
		get CommuteDistanceMax() {}
		set CommuteDistanceMax() {}
		
		get CommuteComments() {}
		set CommuteComments() {}
		
		get RelocationComments() {}
		set RelocationComments() {}
		
		get WillingToRelocate() {}
		set WillingToRelocate() {}

		get DoNotDistributeTo() {}
		set DoNotDistributeTo() {}
		
		get DesiredCompensationAmount() {}
		set DesiredCompensationAmount() {}

		get DesiredCompensationComments() {}
		set DesiredCompensationComments() {}



}




class HumanResource {

     constructor(
     	staffingShift,
     	schedule,
     	ResourceType,
     	 EntityContactInfo, 
     	 PostalAddress,
     	 AvailabilityDate,
     	 IdentificationDocument,
     	 IndependentContractor,
     	 payrolledEmployee,
     	 AvailabilityStartDate,
     	 AvailabilityEndDate,
     	 EffectiveDate,
     	 ValidFrom,
     	 ValidTo,
     	 HRProfile,
     	 PositionHeader,
     	 Preferences,
     	 SupplierContactInfo,
     	 HumanResourceComments

     	){
     	 this.staffingShift = staffingShift
     	 this.schedule = schedule
     	 this.ResourceType = ResourceType
     	 this.EntityContactInfo = EntityContactInfo
     	 this.PostalAddress = PostalAddress
     	 this.AvailabilityDate = AvailabilityDate
     	 this.IdentificationDocument = IdentificationDocument
     	 this.IndependentContractor = IndependentContractor
     	 this.payrolledEmployee = payrolledEmployee
     	 this.AvailabilityStartDate = AvailabilityDate
     	 this.AvailabilityEndDate = AvailabilityEndDate
     	 this.EffectiveDate = EffectiveDate
     	 this.ValidFrom = ValidFrom
     	 this.ValidTo = ValidTo
     	 this.HRProfile = HRProfile
     	 this.PositionHeader = PositionHeader
     	 this.Preferences = Preferences
     	 this.SupplierContactInfo = 
     	 this.HumanResourceComments = HumanResourceComments
     }

        get staffingShift(){
        	return this._staffingShift
        }
        set staffingShift(value){}

     	get schedule(){}
     	set schedule(){}
     	get ResourceType(){}
     	set ResourceType(){}
     	 get EntityContactInfo(){}
     	 set EntityContactInfo(){}
     	 get PostalAddress(){}
     	 set PostalAddress(){}
     	 get AvailabilityDate(){}
     	 set AvailabilityDate(){}
     	 get IdentificationDocument(){}
     	 set IdentificationDocument(){}
     	 get IndependentContractor(){}
     	 set IndependentContractor(){}
     	 get payrolledEmployee(){}
     	 set payrolledEmployee(){}
     	 get AvailabilityStartDate(){}
     	 set AvailabilityStartDate(){}
     	 get AvailabilityEndDate(){}
     	 set AvailabilityEndDate(){}
     	 get EffectiveDate(){}
     	 set EffectiveDate(){}
     	 get ValidFrom(){}
     	 set ValidFrom(){}
     	 get ValidTo(){}
     	 set ValidTo(){}
     	 get HRProfile(){}
     	 set HRProfile(){}
     	 get PositionHeader(){}
     	 set PositionHeader(){}
     	 get Preferences(){}
     	 set Preferences(){}
     	 get SupplierContactInfo(){}
     	 set SupplierContactInfo(){}
     	 get HumanResourceComments(){}
     	 set HumanResourceComments(){}




}