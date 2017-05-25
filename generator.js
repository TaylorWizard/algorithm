let quick_sort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([pivot], quick_sort(right))
}



let select_sort = (arr) => {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let min_num = arr[i] //每次进行一轮比较,先假设给定一个最小值
    for (let j = i + 1; j < len; j++) {
      if (min_num > arr[j]) {
        let temp = arr[j]
        arr[j] = min_num
        min_num = temp
      }
    }
    arr[i] = min_num
  }
  return arr
}



let bubble_sort = (arr) => {
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}


/**
 * @description 
 * 1 假设第0个元素是一个有序的数列，第1个以后的是无序的序列，
 * 2 所以从第1个元素开始将无序数列的元素插入到有序数列中
 * 3 取出无序数列中的第i个作为被插入元素
 * 4 记住有序数列的最后一个位置，并且将有序数列位置扩大一个
 * 5 比大小，找到被插入元素所在的位置(往后挪一位)
 * 6 插入
 * @param {Array} arr 
 */
let insertion_sort = (arr) => {
  if (arr.length <= 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let guard = arr[i], j = i - 1
      arr[i] = arr[j]
      for (; j >= 0 && guard < arr[j]; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = guard
    }
  }
  return arr
}

class HeapSort {
  constructor(arr) {
    this.sort(arr)
  }

  buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.maxHeapify(arr, i, arr.length)
    }
  }

  exchange(arr, src, dest) {
    let temp
    temp = arr[src]
    arr[src] = arr[dest]
    arr[dest] = temp
  }

  maxHeapify(arr, i, j) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < j && arr[largest] < arr[left]) largest = left
    if (right < j && arr[largest] < arr[right]) largest = right
    if (largest != i) {
      this.exchange(arr, largest, i)
      this.maxHeapify(arr, largest, i)
    }
  }

  sort(arr) {
    this.buildMaxHeap(arr)
    for (let i = arr.length - 1; i >= 0; i--) {
      this.exchange(arr, 0, i)
      this.maxHeapify(arr, 0, i)
    }
  }
}


new HeapSort([3, 2, 13, 10, 120, 32])


let merge_sort = (arr) => {
  let sort = (arr, first = undefined, last = undefined) => {
    first = (first === undefined) ? 0 : first
    last = (last === undefined) ? arr.length - 1 : last
    if (last - first < 1) return
  }
  return sort(arr)
}

function mergeSort(array) {
  function sort(array, first, last) {
    first = (first === undefined) ? 0 : first
    last = (last === undefined) ? array.length - 1 : last
    if (last - first < 1) {
      return;
    }
    var middle = Math.floor((first + last) / 2);

    var f = first,
      m = middle,
      i,
      temp;
    console.log(first, middle)
    sort(array, first, middle);
    sort(array, middle + 1, last);
    while (f <= m && m + 1 <= last) {
      if (array[f] >= array[m + 1]) { // 这里使用了插入排序的思想
        temp = array[m + 1];
        for (i = m; i >= f; i--) {
          array[i + 1] = array[i];
        }
        array[f] = temp;
        m++
      } else {
        f++
      }
    }

    return array;
  }
  return sort(array);
}
console.log(mergeSort([1, 4, 5, 3]))