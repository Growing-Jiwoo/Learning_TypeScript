function narrowExample (x: number|string){
    if(typeof x === 'string'){
        return console.log(x + '1')
    }
    else{
        return console.log(x + 1)
    }
}

narrowExample(123)

function narrowExample_2 (x: number|string){
    let array :number[] = [];
    array[0] = x as number;
    return array
}
narrowExample_2(123)

let array = [1,'2',3]
function narrowExample_3(x : number|string){
    array.push(x)
    return array
}

narrowExample_3(5)

function cleaningFunction_1(clean_array: (number|string)[]){
    let clean_array_result :number[] = [];
    clean_array.forEach((element) => {
        if (typeof(element) === 'string'){
            clean_array_result.push(parseInt(element))
        }
        else{
            clean_array_result.push(element)
        }
    });
    return console.log(clean_array_result)
}

function cleaningFunction_2(clean_array: (number|string)[]){
    clean_array.forEach((element,index) => {
        if (typeof(element) === 'string'){
            clean_array.splice(index,index,parseInt(element))
        }
    });
    return console.log(clean_array)
}

cleaningFunction_1(array)
cleaningFunction_2(array)

let teacher_1 = { subject : 'math' }
let teacher_2 = { subject : ['science', 'english'] }
let teacher_3 = { subject : ['science', 'art', 'korean'] }

function teacherSubject(array: {subject : string|string[]}){

    if(typeof(array.subject) === 'string'){
        return console.log(array.subject)
    }
    else if(typeof(array) === 'object'){
        return console.log(array[array.subject.length-1])
    }
    else{
        
    }
    
}

teacherSubject({ subject : 'math' })
teacherSubject({ subject : ['science', 'english'] })
teacherSubject({ subject : ['science', 'art', 'korean'] })