from enum import Enum


class staffingOrgType(Enum):
    Customer = 1
    StaffingSupp = 2
    Intermediary = 3
    Administrator = 4




class BankAccount:
    def __init__(self,bankCode,bankeWindow,bankAccountNumber,bankKey,bankAccountType,bankAccountHolder):
        self.__bankCode = bankCode
        self.__bankeWindow = bankeWindow
        self.__bankAccountNumber = bankAccountNumber
        self.__bankKey = bankKey
        self.__bankAccountType = bankAccountType
        self.__bankAccountHolder = bankAccountHolder


    @property
    def bankCode(self):
        return self.__bankCode
    @property
    def bankWindow(self):
        return self.__bankeWindow
    @property
    def bankeAccountNumber(self):
        return self.__bankAccountNumber
    @property
    def bankKey(self):
        return self.__bankKey
    @property
    def bankAccountType(self):
        return self.__bankAccountType
    @property
    def bankAccountHolder(self):
        return self.__bankAccountHolder




    def __repr__(self):
        return f'Bank Code: {self.__bankCode} Bank Account Type : {self.__bankAccountType} Bank Account Holder: {self.__bankAccountHolder} Bank Account Number: {self.__bankAccountNumber}'

    def __str__(self):
        return f'Bank Code: {self.__bankCode} Bank Account Type : {self.__bankAccountType} Bank Account Holder: {self.__bankAccountHolder} Bank Account Number: {self.__bankAccountNumber}'


    def __eq__(self,otherAcct):
        if isinstance(otherAcct,BankAccount):
            return self.__bankAccountNumber == otherAcct.__bankAccountNumber

    def __hash__(self):
        return hash(self.__bankCode)


    def __bool__(self):
        if self.__bankAccountNumber is None:
            return False
        return True


    def __del__(self):
        print("BankAccount object has been deleted")



class Organization:

    def __init__(self,orgID,orgName,orgUnit,OrgUnitName,OrgUnitID):
        self.__orgID = orgID
        self.__orgName = orgName
        self.__orgUnit = orgUnit
        self.__orgUnitName = OrgUnitName
        self.__orgUnitID = OrgUnitID


    @property
    def orgID(self):
        return self.__orgID

    @property
    def orgName(self):
        return self.__orgName

    @property
    def orgUnit(self):
        return self.__orgUnit

    @property
    def OrgUnitName(self):
        return self.__orgUnitName

    @property
    def OrgUnitID(self):
        return self.__orgUnitID


class PaymentInfo(Organization):
    """docstring for  PaymentInfo."""

    def __init__(self, orgID,payMode,payTimeAllow,payEvent,payDay):
        super().__init__(orgID)
        self._payMode = payMode
        self._payTimeAllow = payTimeAllow
        self._payEvent = payEvent
        self._payDay = payDay



class StaffingSupplier(Organization,PaymentInfo,BankAccount):
    """Provides a staffing resource"""
    def __init__(self,orgID,orgName,orgUnit,OrgUnitName,OrgUnitID):
        super().__init__(orgID,orgName,orgUnit,OrgUnitName,OrgUnitID)

class StaffingCustomer(Organization):
    """This is the entity that has a servicing need, and is
     looking to use a person sent from the staffing supplier.
"""
    def __init__(self,orgID,orgName,orgUnit,OrgUnitName,OrgUnitID):
        super().__init__(orgID,orgName,orgUnit,OrgUnitName,OrgUnitID)

class Person:
    pass


class HumanResource(Person):
    """
    he staffing resource employed or retained by the staffing supplier,
    who is sent to work at a staffing customer site.

    """
    pass

class StaffingOrder:
    """
    information describing a staffing customers servicing need, e.g.
    position description, start and end dates, estimated bill rate. 
    """
    pass

class StaffingAssignment:
    """
    information confirming the actual work agreed upon to be done, e.g.
    the agreed upon staffing resource to perform the work, and the agreed upon bill rate.
    """
    pass


class StaffingOrganization:
    """
    information describing a staffing company, customer, or intermediary,
    e.g. government corporate identifier, billing or branch addresses and contacts,
    specific facility addresses, remit to data, and work environments.
    """
    pass


class StaffingAction:
    """
    request and response schema, e.g. interview request and response. 
    """
    pass
