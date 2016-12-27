var later = require ('later')

module.exports = {
    setSchedule: function(scheduleText,functionToBeScheduled){
        console.log("setting schedule to "+scheduleText)
        var textSched = later.parse.text(scheduleText);
        var schedule = later.setInterval(functionToBeScheduled, textSched);
        return schedule;    
    }
}



