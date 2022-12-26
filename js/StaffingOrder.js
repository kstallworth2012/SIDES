


//my constructor function 
// function ReferenceInformation(OrderId,MasterOrderId,PositionId,IntermediaryId,
// 								hrId,assignmentId,docId,staffSuppId,
// 								staffingCustomerId,staffingOrg,TimeCardID,
// 								invoiceId,billToId,StaffOrgId){
// 	OrderId,
// 	MasterOrderId,
// 	PositionId,
// 	IntermediaryId,
// 	hrId,
// 	assignmentId,
// 	docId,
// 	staffSuppId,
// 	staffingCustomerId,
// 	staffingOrg,
// 	TimeCardID,
// 	invoiceId,
// 	billToId,
// 	StaffOrgId,

// }


class StaffingOrder{
	constructor(OrderId,reasonForChange,positionQuantity,positionQuantityOpen,
		daysPerWeek,candidateRequirements,StaffingPosition,OfferRequirements,OrderComments){
		this.OrderId = OrderId;
		this.reasonForChange = reasonForChange;
		this.positionQuantity = positionQuantity;
		this.positionQuantityOpen = positionQuantityOpen;
		this.daysPerWeek = daysPerWeek; 
		this.candidateRequirements = candidateRequirements; 
		this.StaffingPosition = StaffingPosition; 
		this.OfferRequirements = OfferRequirements; 
		this.OrderComments = OrderComments;
	}
}