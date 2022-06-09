// code your solution here
//saturdayFun
function saturdayFun(activity='roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}
const response = saturdayFun()
console.log(response)

//MondayWork
function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
}
const response2 = saturdayFun()
console.log(response2)

//wrapAdjective
function wrapAdjective(asterisk='*'){
    return function (adjective){
        return `You are ${asterisk}${adjective}${asterisk}!`
    }

}
const wrapper=recover()
console.log(wrapper)

