// function to shuffle the array. 
export const shuffle = (array => {
    let length = array.length, temp, index;

    while (length > 0) {
        index = Math.floor(Math.random() * length);

        length -= 1;

        temp = array[length];
        array[length] = array[index];
        array[index] = temp 
    }

    return array;
})