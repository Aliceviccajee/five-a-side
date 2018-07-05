
export const shuffle = (array) => { 
       for (let j, x, i = array.length; i; j = parseInt(Math.random() * i),
           x = array[--i], array[i] = array[j], array[j] = x);
       return array;
   };