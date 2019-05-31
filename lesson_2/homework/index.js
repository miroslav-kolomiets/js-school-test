/** 
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
  function difference(arr, itemsToExclude) {

    var newArr = [];
    
    arr.forEach((elem) => itemsToExclude.includes(elem) ? null : newArr.push(elem))
    
    return newArr;
  }
  
  console.log(difference([2, 1, 5], [2, 3])); 
  // => [1, 5]
  
  /**
   * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
   */
  function groupBy(array, value) {
    
    var groupedArr = array.reduce((a, b) => {
        (a[b[value]] = a[b[value]] || []).push(b);
        return a;
    }, {});
        
    return groupedArr;
  }
  
  console.log(groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}, { gender: 'female', name: 'Jane'}], 'gender')); 
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
    
    var flattedArr = array.reduce((acc, val) => acc.concat(val), []);

    // Or we can use experimental technology:
    // var flattedArr = array.flat();
        
    return flattedArr;
  }
  
  console.log(flatten([1, [2, [3, [4]], 5]]));
  // => [1, 2, [3, [4]], 5]
  
  console.log(flatten([1, 2, 3, 4, 5]));
  // => [1, 2, 3, 4, 5]
  
  console.log(flatten([1, [2, 3], 4, 5]));
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
  
  console.log(uniq([2, 1, 2]));
  // => [2, 1]
  
  /**
   * 
   * метод должен собирать элементы массива в группы с заданным размером
   */
  function chunk(array, size) {
    
    var newArr = [];

    while (array.length) {
      newArr.push(array.splice(0, size));
    }
    
    return newArr;
  }
  
  console.log(chunk(['a', 'b', 'c', 'd'], 2));
  // => [['a', 'b'], ['c', 'd']]
   
  console.log(chunk(['a', 'b', 'c', 'd'], 3));
  // => [['a', 'b', 'c'], ['d']]
  