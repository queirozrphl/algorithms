let randomArray = Array.from({length: 10}, () => {return Math.ceil(Math.random()*100)} );

/*
Most basic sort algorithm, goes for each element and try to discovery the min value
from that list "unsorted". It doesnot adapt to data, and have a square complexity.

O(n2) comparisons (not scalable)
O(n) swapes (lot of read and write)

*/

console.log(randomArray);

const selectionSort = (randomArray) => {

    for(let i = 0; i < randomArray.length; i++){
        let min = i;
        for (let j = i + 1; j < randomArray.length; j++){
            if(randomArray[j] < randomArray[min]) min = j;                
        }
        let temporary = randomArray[i];
        randomArray[i] = randomArray[min];
        randomArray[min] = temporary;
    }
    return randomArray;
}

console.log(selectionSort(randomArray))