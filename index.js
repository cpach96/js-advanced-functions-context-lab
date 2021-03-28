/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return(payable / 2)
}

function createEmployeeRecord(employeeData){
    let empObj = {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empObj
}

function createEmployeeRecords(employeeData){
    let employeeRecords = []

    employeeData.map(function(e){
        employeeRecords.push(createEmployeeRecord(e))
    })
    return employeeRecords
}

function createTimeInEvent(timeClock){
    let grabHour = timeClock.split(' ')[1]
    let parseHour = parseInt(grabHour)
    let formatDate = timeClock.split(' ')[0]
    
    let timeObj = {
        type: "TimeIn",
        hour: parseHour,
        date: formatDate
    }
    this.timeInEvents.push(timeObj)
    return this
}

function createTimeOutEvent(timeClock){
    let grabHour = timeClock.split(' ')[1]
    let parseHour = parseInt(grabHour)
    let formatDate = timeClock.split(' ')[0]
    
    let timeObj = {
        type: "TimeOut",
        hour: parseHour,
        date: formatDate
    }
    this.timeOutEvents.push(timeObj)
    return this
}

function hoursWorkedOnDate(employeeData){
    let clockedOutHour = 0
    let clockedInHour = 0
    for (let i = 0; i < this.timeOutEvents.length; i++){
        clockedOutHour += this.timeOutEvents[i].hour
    }
    for (let i = 0; i < this.timeInEvents.length; i++){
        clockedInHour += this.timeInEvents[i].hour
    }
    return((clockedOutHour - clockedInHour)/100)
}

function wagesEarnedOnDate(date){
    return((hoursWorkedOnDate.call(this) * this.payPerHour))
}

function findEmployeeByFirstName(names,search){
    for (let i = 0; i < names.length; i++){
        if(search === names[i].firstName){
            return names[i]
        }
    }

}

function calculatePayroll(empArray){
    let payroll = -600
    console.log(empArray)
    for (let i = 0; i < empArray.length; i++){
        console.log(payroll += wagesEarnedOnDate.apply(empArray[i]))
    }
    return payroll
}