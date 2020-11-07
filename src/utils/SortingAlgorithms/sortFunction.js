const {BubbleSort} = require('./BubbleSort');
const {InsertionSort} = require('./InsertionSort');
const {SelectionSort} = require('./SelectionSort');
const {QuickSort} = require('./QuickSort');
const {MergeSort} = require('./MergeSort');

function sortFunction(algoName){
    switch(algoName){
        case "Bubble Sort": return BubbleSort;
        case "Insertion Sort": return InsertionSort;
        case "Selection Sort": return SelectionSort;
		case "Quick Sort": return QuickSort;
		case "Merge Sort": return MergeSort;
        default: return undefined;
    }
}

export default sortFunction;
