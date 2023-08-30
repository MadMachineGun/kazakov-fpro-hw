
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log("User array:", array);
// Task 1: Знайти суму та кількість позитивних елементів.
const positiveStats = array.reduce((stats, currentValue) => {
    if (currentValue > 0) {
        stats.sum += currentValue;
        stats.count++;
    }
    return stats;
}, {sum: 0, count: 0});

console.log("Task 1:\nЗнайти суму та кількість позитивних елементів.");
console.log("Sum of positive elements:", positiveStats.sum);
console.log("Number of positive elements:", positiveStats.count);

// Task 2: Знайти мінімальний елемент масиву та його порядковий номер.
const minInfo = array.reduce((min, currentValue, currentIndex) => {
    if (currentValue < min.value) {
        min.value = currentValue;
        min.index = currentIndex;
    }
    return min;
}, {value: array[0], index: 0});

console.log("Task 2:\nЗнайти мінімальний елемент масиву та його порядковий номер.");
console.log("Min value:", minInfo.value);
console.log("Index of min value:", minInfo.index);

// Task 3: Знайти максимальний елемент масиву та його порядковий номер.
const maxInfo = array.reduce((max, currentValue, currentIndex) => {
    if (currentValue > max.value) {
        max.value = currentValue;
        max.index = currentIndex;
    }
    return max;
}, {value: array[0], index: 0});

console.log("Task 3:\nЗнайти максимальний елемент масиву та його порядковий номер.");
console.log("Max value:", maxInfo.value);
console.log("Index of max value:", maxInfo.index);

// Task 4: Визначити кількість негативних елементів.
const negativeCount = array.reduce((count, currentValue) => {
    if (currentValue < 0) {
        count++;
    }
    return count;
}, 0);

console.log("Task 4:\nВизначити кількість негативних елементів.");
console.log("Number of negative elements:", negativeCount);

// Task 5: Знайти кількість непарних позитивних елементів.
const oddPositiveCount = array.reduce((count, currentValue) => {
    if (currentValue > 0 && currentValue % 2 !== 0) {
        count++;
    }
    return count;
}, 0);

console.log("Task 5:\nЗнайти кількість непарних позитивних елементів.");
console.log("Number of odd positive elements:", oddPositiveCount);

// Task 6: Знайти кількість парних позитивних елементів.
const evenPositiveCount = array.reduce((count, currentValue) => {
    if (currentValue > 0 && currentValue % 2 === 0) {
        count++;
    }
    return count;
}, 0);

console.log("Task 6:\nЗнайти кількість парних позитивних елементів.");
console.log("Number of even positive elements:", evenPositiveCount);

// Task 7: Знайти суму парних позитивних елементів.
const evenPositiveSum = array.reduce((sum, currentValue) => {
    if (currentValue > 0 && currentValue % 2 === 0) {
        sum += currentValue;
    }
    return sum;
}, 0);

console.log("Task 7:\nЗнайти суму парних позитивних елементів.");
console.log("Sum of even positive elements:", evenPositiveSum);

// Task 8: Знайти суму непарних позитивних елементів.
const oddPositiveSum = array.reduce((sum, currentValue) => {
    if (currentValue > 0 && currentValue % 2 !== 0) {
        sum += currentValue;
    }
    return sum;
}, 0);

console.log("Task 8:\nЗнайти суму непарних позитивних елементів.");
console.log("Sum of odd positive elements:", oddPositiveSum);

// Task 9: Знайти добуток позитивних елементів.
const positiveProduct = array.reduce((product, currentValue) => {
    if (currentValue > 0) {
        product *= currentValue;
    }
    return product;
}, 1);

console.log("Task 9:\nЗнайти добуток позитивних елементів.");
console.log("Product of positive elements:", positiveProduct);

// Task 10: Знайти найбільший серед елементів масиву, остальні обнулити.
const maxElement = array.reduce((max, currentValue) => {
    if (currentValue > max.value) {
        max.value = currentValue;
    }
    return max;
}, {value: array[0]});

const modifiedArray = array.map((value) => value === maxElement.value ? value : 0);

console.log("Task 10:\nЗнайти найбільший серед елементів масиву, остальні обнулити.");
console.log("Max value:", maxElement.value);
console.log("Modified array:", modifiedArray);


// // Task_1
// const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let sum = 0;
// let positiveCount = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         sum += array[i];
//         positiveCount++;
//     }
// }
// console.log("Task 1:\nДан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]\nЗнайти суму та кількість позитивних елементів.");
// console.log("Sum of positive elements:", sum);
// console.log("Number of positive elements:", positiveCount);
//
// // Task_2:
// const minArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let minValue = minArr[0];
// let minIndex = 0;
//
// for (let i = 1; i < array.length; i++) {
//     if (array[i] < minValue) {
//         minValue = array[i];
//         minIndex = i;
//     }
// }
// console.log("Task 2:\nЗнайти мінімальний елемент масиву та його порядковий номер.");
// console.log("User array:" , minArr);
// console.log("Min value:", minValue);
// console.log("Index of min value:", minIndex);
//
// // Task_3:
// const maxArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let maxValue = maxArr[0];
// let maxIndex = 0;
//
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > maxValue) {
//         maxValue = array[i];
//         maxIndex = i;
//     }
// }
// console.log("Task 3:\nЗнайти максимальний елемент масиву та його порядковий номер.");
// console.log("User array:" , maxArr);
// console.log("Max value:", maxValue);
// console.log("Index of max value:", maxIndex);
//
// // Task_4:
// const negArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let negativeCount = 0;
// for (let i = 1; i < array.length; i++){
//     if (array[i] < 0){
//         negativeCount++;
//     }
// }
// console.log("Task 4:\nВизначити кількість негативних елементів.");
// console.log("User array:" , negArr);
// console.log("Numbers of negative value:", negativeCount);
//
// // Task_5:
// const oddArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let oddPosCount = 0;
// for (let i = 1; i < array.length; i++){
//     if (array[i] > 0 && array[i] % 2 !==0){
//         oddPosCount++;
//     }
// }
// console.log("Task 5:\nЗнайти кількість непарних позитивних елементів.");
// console.log("User array:" , oddArr);
// console.log("Numbers of odd positive value:", oddPosCount);
//
// // Task_6:
// const pairArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let pairPosCount = 0;
// for (let i = 1; i < array.length; i++){
//     if (array[i] > 0 && array[i] % 2 === 0){
//         pairPosCount++;
//     }
// }
// console.log("Task 5:\nЗнайти кількість парних позитивних елементів.");
// console.log("User array:" , pairArr);
// console.log("Numbers of pair positive value:", pairPosCount);
//
// // Task_7:
// const sumPair = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let evenPosSum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0 && array[i] % 2 === 0) {
//         evenPosSum += array[i];
//         evenPosSum++;
//     }
// }
// console.log("Task 7:\nЗнайти суму парних позитивних елементів.");
// console.log("User array:" , sumPair);
// console.log("Sum of pair positive elements:", evenPosSum);
//
// // Task_8:
// const sumOdd = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let evenOddSum = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0 && array[i] % 2 !==0) {
//         evenOddSum += array[i];
//         evenOddSum++;
//     }
// }
// console.log("Task 8:\nЗнайти суму непарних позитивних елементів.");
// console.log("User array:" , sumOdd);
// console.log("Sum of odd positive elements:", evenOddSum);
//
// // Task_9:
// const arrayProduct = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let positiveProduct = 1;
//
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         positiveProduct *= array[i];
//     }
// }
// console.log("Task 9:\nЗнайти добуток позитивних елементів.");
// console.log("User array:" , arrayProduct);
// console.log("Product of positive elements:", positiveProduct);
//
// // Task_10:
// const maxElement = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let maxEl = maxElement[0];
// let maxInd = 0;
//
// for (let i = 1; i < maxElement.length; i++) {
//     if (maxElement[i] > maxEl) {
//         maxEl = maxElement[i];
//         maxInd = i;
//     }
// }
//
// for (let i = 0; i < maxElement.length; i++) {
//     if (i !== maxInd) {
//         maxElement[i] = 0;
//     }
// }
//
// console.log("Task 10:\nЗнайти найбільший серед елементів масиву, остальні обнулити.");
// console.log("Max value:", maxEl);
// console.log("Modified array:", maxElement);
//
// const maxElement = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let maxInd = maxElement.reduce((maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);
//
// maxElement.forEach((element, index) => {
//     if (index !== maxInd) {
//         maxElement[index] = 0;
//     }
// });
//
// console.log("Task 10:\nЗнайти найбільший серед елементів масиву, остальні обнулити.");
// console.log("Max value:", maxElement[maxInd]);
// console.log("Modified array:", maxElement);


// // Use_forEach_method
// // Task_1:
// const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let sum = 0;
// let positiveCount = 0;
//
// array.forEach((element) => {
//     if (element > 0) {
//         sum += element;
//         positiveCount++;
//     }
// });
//
// console.log("Task 1:\nДан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]\nЗнайти суму та кількість позитивних елементів.");
// console.log("Sum of positive elements:", sum);
// console.log("Number of positive elements:", positiveCount);
//
// // Task_2:
// const minArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let minValue = minArr[0];
// let minIndex = 0;
//
// minArr.forEach((element, index) => {
//     if (element < minValue) {
//         minValue = element;
//         minIndex = index;
//     }
// });
//
// console.log("Task 2:\nЗнайти мінімальний елемент масиву та його порядковий номер.");
// console.log("User array:", minArr);
// console.log("Min value:", minValue);
// console.log("Index of min value:", minIndex);
//
// // Task_3:
// const maxArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let maxValue = maxArr[0];
// let maxIndex = 0;
//
// maxArr.forEach((element, index) => {
//     if (element > maxValue) {
//         maxValue = element;
//         maxIndex = index;
//     }
// });
//
// console.log("Task 3:\nЗнайти максимальний елемент масиву та його порядковий номер.");
// console.log("User array:", maxArr);
// console.log("Max value:", maxValue);
// console.log("Index of max value:", maxIndex);
//
// // Task_4:
// const negArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let negativeCount = 0;
//
// negArr.forEach((element) => {
//     if (element < 0) {
//         negativeCount++;
//     }
// });
//
// console.log("Task 4:\nВизначити кількість негативних елементів.");
// console.log("User array:", negArr);
// console.log("Numbers of negative value:", negativeCount);
//
// // Task_5:
// const oddArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let oddPosCount = 0;
//
// oddArr.forEach((element) => {
//     if (element > 0 && element % 2 !== 0) {
//         oddPosCount++;
//     }
// });
//
// console.log("Task 5:\nЗнайти кількість непарних позитивних елементів.");
// console.log("User array:", oddArr);
// console.log("Numbers of odd positive value:", oddPosCount);
//
// // Task_6:
// const pairArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let pairPosCount = 0;
//
// pairArr.forEach((element) => {
//     if (element > 0 && element % 2 === 0) {
//         pairPosCount++;
//     }
// });
//
// console.log("Task 6:\nЗнайти кількість парних позитивних елементів.");
// console.log("User array:", pairArr);
// console.log("Numbers of pair positive value:", pairPosCount);
//
// // Task_7:
// const sumPair = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let evenPosSum = 0;
//
// sumPair.forEach((element) => {
//     if (element > 0 && element % 2 === 0) {
//         evenPosSum += element;
//     }
// });
//
// console.log("Task 7:\nЗнайти суму парних позитивних елементів.");
// console.log("User array:", sumPair);
// console.log("Sum of pair positive elements:", evenPosSum);
//
// // Task_8:
// const sumOdd = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let oddPosSum = 0;
//
// sumOdd.forEach((element) => {
//     if (element > 0 && element % 2 !== 0) {
//         oddPosSum += element;
//     }
// });
//
// console.log("Task 8:\nЗнайти суму непарних позитивних елементів.");
// console.log("User array:", sumOdd);
// console.log("Sum of odd positive elements:", oddPosSum);
//
// // Task_9:
// const arrayProduct = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let positiveProduct = 1;
//
// arrayProduct.forEach((element) => {
//     if (element > 0) {
//         positiveProduct *= element;
//     }
// });
//
// console.log("Task 9:\nЗнайти добуток позитивних елементів.");
// console.log("User array:", arrayProduct);
// console.log("Product of positive elements:", positiveProduct);
//
// // Task_10:
// const maxElementArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
// let maxElement = maxElementArr[0];
// let maxElementIndex = 0;
//
// maxElementArr.forEach((element, index) => {
//     if (element > maxElement) {
//         maxElement = element;
//         maxElementIndex = index;
//     }
// });
//
// const modifiedArray = maxElementArr.map((element, index) => (index !== maxElementIndex) ? 0 : maxElement);
//
// console.log("Task 10:\nЗнайти найбільший серед елементів масиву, остальні обнулити.");
// console.log("Max value:", maxElement);
// console.log("Modified array:", modifiedArray);

