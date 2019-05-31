/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
  function difference(arr, itemsToExclude) {

    var newArr = []
    
    arr.forEach((elem) => itemsToExclude.includes(elem) ? null : newArr.push(elem))
    
    console.log(newArr);
  }
  
  difference([2, 1, 5], [2, 3]) 
  // => [1, 5]
  
  /**
   * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
   */
  function groupBy(array, value) {
    
    var groupedArr = array.reduce((a, b) => {
        (a[b[value]] = a[b[value]] || []).push(b);
        return a;
    }, {});
    
    console.log(groupedArr);
    
    return groupBy;
  }
  
  groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender'); 
  /**
   * => {
   *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
   *  female: [{ gender: 'female', name: 'Jane'}]
   * }
   */
  
  /**
   *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение 
   */
  function flatten(array) {
    
    let flattedArray = array.reduce((acc, val) => acc.concat(val), []);

    // Or we can use experimental technology:
    // let flattedArray = array.flat();
    
    console.log(flattedArray);
    
    return flattedArray;
  }
  
  flatten([1, [2, [3, [4]], 5]]);
  // => [1, 2, [3, [4]], 5]
  
  flatten([1, 2, 3, 4, 5]);
  // => [1, 2, 3, 4, 5]
  
  flatten([1, [2, 3], 4, 5]);
  // => [1, 2, 3, 4, 5]
  
  /**
   * метод должен убрать все повторяющиеся элементы из массива
   */
  function uniq(array) {
    
    var obj = {};

    for (var i = 0; i < array.length; i++) {
      var str = array[i];
      obj[str] = true;
    }
  
    return Object.keys(obj);
  }
  
  uniq([2, 1, 2]);
  // => [2, 1]
  
  /**
   * 
   * метод должен собирать элементы массива в группы с заданным размером
   */
  function chunk(array, size) {
    
    var results = [];

    while (array.length) {
      results.push(array.splice(0, size));
    }

    console.log(results);
    
    return results;
  }
  
  chunk(['a', 'b', 'c', 'd'], 2);
  // => [['a', 'b'], ['c', 'd']]
   
  chunk(['a', 'b', 'c', 'd'], 3);
  // => [['a', 'b', 'c'], ['d']]
  