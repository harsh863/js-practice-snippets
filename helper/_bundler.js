const { _run } = require("./_run");
const { _bulkRunner, _bulkAlternator,  _bulkAlternatorPlus } = require("./_bulk");

class Bundler {
    constructor() {}

    anagrams() {
        const { areAnagrams1, areAnagrams2 } = require("../anagram");
        const dataset = [
            ["rail safety", "Fairy tales"],
            ["rail safety", "Fairy tales", false],
            ["rail safety", "fairy tales"],
            ["rail safety", "fairy tales!"],
            [240, 420],
            [420, -420],
            [240, -420],
        ];
        _run(dataset, false, areAnagrams1, areAnagrams2);
    }

    arrayProduct() {
        const { arrayProductExceptSelf } = require("../arrayProduct");
        const dataset = [
            [ [1,2,3,4] ],
            [ [-1,1,0,-3,3] ]
        ];
        _run(dataset, true, arrayProductExceptSelf);
    }

    capitalize() {
        const { capitalize1, capitalize2 } = require("../capitalize");
        const dataset = [
            ["Jone is a skilled coder. he loves to create web templates. "],
            ["the quick green alligator."],
        ];
        _run(dataset, true, capitalize1, capitalize2);
    }

    chunk() {
        const { chunk1, chunk2 } = require("../chunk");
        const dataset = [
            [ [1, 3, 4, 6], 2 ],
            [ [1, 3, 4, 6, 2], 2 ],
            [ [1, 3, 4, 6, 2, 4, 7, 9], 3 ],
            [ [1, 3, 4, 6, 2], 4 ],
            [ [1, 3, 4, 6, 2], 10 ],
        ];
        _run(dataset, true, chunk1, chunk2);
    }

    fibonacci() {
        const { fibonacci1, fibonacci2, fibonacci3 } = require("../fibonacci");
        const dataset = [
            [0], [1], [2], [5], [19], [30], [40], [50], [60], [70],
            [80], [90], [100], [110], [120], [130], [140], [999]
        ];
        _run(dataset, true, fibonacci3, fibonacci2, fibonacci1);
    }

    fizzbuzz() {
        const { fizzbuzz } = require("../fizzbuzz");
        const dataset = [ [15], [1], [5], [3, 2] ];
        _run(dataset, true, fizzbuzz);
    }

    groupAnagram() {
        const { groupAnagram } = require("../groupAnagram");
        const dataset = [
            [ ["eat","tea","tan","ate","nat","bat"] ],
            [ [""] ],
            [ ["a"] ],
            [ ["eAt","teA","tan","ate","nat","bat"], true ]
        ];
        _run(dataset, true, groupAnagram);
    }

    matrix() {
        const { matrix } = require("../matrix");
        const dataset = [ [1], [2], [3], [30] ];
        _run(dataset, true, matrix);
    }

    maxCharsOrDigits() {
        const { maxCharsOrDigits } = require("../maxCharsOrDigits");
        const dataset = [
            ['HELLO THERE'],
            [9897999248]
        ];
        _run(dataset, true, maxCharsOrDigits);
    }

    merge() {
        const { merge } = require("../merge");
        const dataset = [
            [ [4, 40, 50], [-9, 1] ],
            [ [-2, 90, 200], [] ],
            [ [-1, 0, 1], [-2, -1, 0] ]
        ]
        _run(dataset, true, merge);
    }

    palindrome() {
        const { isPalindrome1, isPalindrome2, isPalindrome3 } = require("../palindrome")
        const dataset = [
            ['ABbA'],
            ['ABbA', false],
            ['RACECAR'],
            ['tattarrattat'],
            [1001]
        ];
        _run(dataset, false, isPalindrome1, isPalindrome2, isPalindrome3);
    }

    parenthesesMatcher() {
        const { isValidParentheses } = require("../parenthesesMatcher");
        const dataset = [
            [ "()" ],
            [ "(1)+[2]+{3}" ],
            [ "(]" ],
            [ "([Hello)]" ],
            [ "{[]}" ],
            [ "(1 * 2) + (30 / 10) * 19" ],
        ];
        _run(dataset, true, isValidParentheses);
    }

    pyramidPattern() {
        const { pyramidPattern } = require("../pyramidPattern");
        const dataset = [ [1], [2], [3], [10] ];
        _run(dataset, true, pyramidPattern);
    }

    reverse() {
        const { reverse1, reverse2, reverse3, reverse4 } = require("../reverse");
        const dataset = [
            ['H20'],
            ['MUMBAI INDIANS 5x'],
            ["It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die."],
            ["They wandered into a strange Tiki bar on the edge of the small beach town."],
            ["It was always dangerous to drive with him since he insisted the safety cones were a slalom course."],
            [0],
            [-0],
            [-123],
            [1234.523],
        ];

        _run(dataset, false, reverse1, reverse2, reverse3, reverse4);
    }

    rightTrianglePattern() {
        const { rightTrianglePattern1, rightTrianglePattern2 } = require("../rightTrianglePattern");
        const dataset = [ [1], [2], [3], [10] ];
        _run(dataset, false, rightTrianglePattern1, rightTrianglePattern2);
    }

    sort() {
        const { bubbleSort1, bubbleSort2, selectionSort1, selectionSort2, mergeSort1, mergeSort2 } = require("../sort");
        const dataset = [
            [ [1, 2, 3, 4, 5] ],
            [ [4, 3, 2, 1, 0] ],
            [ [-5, -4, -3, -2, -1] ],
            [ [-1, -2, -3, -4, -5] ],
            [ [12, 75, 23, -50, 453, 2] ]
        ]
        _run(dataset, false, bubbleSort1, bubbleSort2, selectionSort1, selectionSort2, mergeSort1, mergeSort2);
    }

    vowels() {
        const { getVowelsCount1, getVowelsCount2 } = require("../vowels");
        const dataset = [
            ["How are you?"],
            ["It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die."],
            ["They wandered into a strange Tiki bar on the edge of the small beach town."],
            ["It was always dangerous to drive with him since he insisted the safety cones were a slalom course."]
        ];
        _run(dataset, false, getVowelsCount1, getVowelsCount2);
    }

    linkedList() {
        const { LinkedList } = require("../linkedList");
        const linkedList = new LinkedList();
        _bulkRunner([
            { dataset: [ ['a'], ['b'], ['c'] ], func: linkedList.insertFirst },
            { dataset: [ ['A'], ['B'], ['C'] ], func: linkedList.insertLast },
            { dataset: [ [1, 0], [2, 2], [3, 20] ], func: linkedList.insertAt },
            { dataset: [ ["ONE", 0], ["TWO", 2], ["THREE", 20] ], func: linkedList.updateAt },
        ]);
        _bulkAlternator(5, true, linkedList.display, linkedList.removeLast, linkedList.removeFirst, linkedList.reverse);
    }

    queue() {
        const { Queue, QueueFromStack  } = require("../queue");
        const queue1 = new QueueFromStack();
        const queue2 = new Queue();
        const queue3 = new Queue();

        _bulkRunner([
            { dataset: [ [1], [123], [13], [14], [16], [197], [10232] ], func: queue1.enqueue },
            { dataset: [ ['Hello'], ['Hi'], ['Hey'], ['Hola'] ], func: queue2.enqueue }
        ]);
        _bulkAlternator(4, true, queue1.display, queue1.dequeue);
        _bulkAlternator(2, true, queue2.display, queue2.dequeue);
        _bulkAlternator(1, true, queue3.display, queue3.weave.bind(this, queue1, queue2));
    }

    stack() {
        const { Stack } = require("../stack");
        const stack = new Stack();
        _bulkRunner([ { dataset: [ [123], [1], [3], [12], [1701], [9735], [10232] ], func: stack.push } ]);
        _bulkAlternator(8, true, stack.display, stack.pop);
    }

    tree() {
        const { Tree, Node } = require("../tree");
        const tree = new Tree();
        _bulkRunner([
            {
                dataset: [
                    [ new Node(1, [1.1, 1.2]) ] ,
                    [ 2, [ '2.1', [ '2.2', ['2.2.1', '2.2.2'] ] ] ],
                    [ 3, [ '3.1', new Node('3.2', ['3.2.1', '3.2.2']) ] ]
                ],
                func: tree.add
            }
        ]);
        _bulkAlternatorPlus(
            3,
            true,
            { dataset: tree.getTree, func: console.log },
            { dataset: tree.levelWidth, func: console.log },
            { dataset: [ [2], [3], [1.2] ], func: tree.remove }
        );
    }

    binarySearchTree() {
        const { BinarySearchTree } = require("../binarySearchTree");
        const binarySearchTree = new BinarySearchTree();
        _bulkRunner([
            {
                dataset: [
                    [50], [30], [20], [40], [45], [42], [47], [70], [60], [80]
                ],
                func: binarySearchTree.insert
            }
        ]);
        _bulkAlternatorPlus(
            4,
            true,
            { dataset: [ ['pre'] ], func: binarySearchTree.display },
            { dataset: binarySearchTree.getNumberOfNodes, func: console.log.bind(this, 'Nodes count :-') },
            { dataset: [ [70], [], [45], [30] ], func: binarySearchTree.delete }
        );
    }
}
