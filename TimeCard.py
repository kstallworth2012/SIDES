



class TimeCard:

    def __init__(self,id,reportedRes,reportedTime,pStartDate,pEndStarDate,SubmitterInfo,ApprovalInfo):
        self._id = id
        self._reportRes = reportRes #reported resource
        self._reportedTime = reportedTime
        self._pStartDate = pStartDate
        self._pEndStarDate = pEndStarDate
        self._SubmitterInfo = SubmitterInfo
        self._ApprovalInfo = ApprovalInfo

        @property
        def id(self):
            """the id for the timecard class """
            return self._id

        @id.setter
        def id(self,new_id):
            self._id = new_id

        @id.deleter
        def weight(self):
            del self._id


        @property
        def reportRes(self):
            """a doc string for reportres """
            return self._reportRes


        @property
        def reportedTime(self):
            return self._reportedTime

        def pStartDate():
            doc = "The period start  property."
            def fget(self):
                return self._pStartDate
            def fset(self, value):
                self._pStartDate = value
            def fdel(self):
                del self._pStartDate
            return locals()
         = property(**(fget,fset,fdel))

         @property
         def pEndDate(self):
             return self._pEndStarDate = pEndStarDate


        @property
        def SubmitterInfo(self):
            return self._SubmitterInfo
        @property
        def ApprovalInfo(self):
            return self._ApprovalInfo


        def __eq__(self,otherTimeCard):
            if isinstance(otherTimeCard,TimeCard):
                return self._reportedTime == otherTimeCard._reportedTime


        def __str__(self):
            return f"TimeCard ID:{self._id} Time Reported: {self._reportedTime}"

        def __repr__(self):
            return f"TimeCard ID:{self._id} Time Reported: {self._reportedTime}"


        def __hash__(self):
            return hash(self._id)

        def __bool__(self):
            if self._reportedTime is None:
                return False
            return True

        def __del__(self):
            print("TimeCard object has been deleted")


class TimeInterval:
    pass

class TimeEvent:
    pass

class Expense;
    pass


class Allowance:
    pass
