
function formatValue(value: string | number |boolean): string | number |boolean {
    if(typeof value === "string") return value.toUpperCase();
    else if (typeof value === "number") return value*10;
    else if(typeof value === "boolean") return (!value);
    else return 0;
}



function getLength(value: string | any[]): number{
    if(Array.isArray(value)) return value.length;
    else if(typeof value === "string") return value.length;
    else return 0;
}



class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'` ;
    }
}




function filterByRating (items: {title: string; rating: number}[]): {title: string; rating: number}[] {
    return items.filter((item) => (item.rating >= 4 && item.rating <= 5));
}




function filterActiveUsers(users: {id: number; name:string; email:string; isActive:boolean}[]): {id: number; name:string; email:string; isActive:boolean}[] {
    return users.filter((user) => user.isActive === true);
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails (book: Book ): void{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? "Yes" : "No"}`);
}




function getUniqueValues(array1 : (string | number)[], array2: (string | number)[] ): (string | number | undefined)[]{

    const newArray: (string | number | undefined)[] = [];
    let index = 0;

    function mergeAndGetUniqueArray(array : (string | number)[]): void {
        for(let i = 0; i < array.length; i++) {
           let found = false;

            for(let j = 0; j < index; j++) {
                if(array[i] === newArray[j]) {
                    found = true;
                    break;
                }
            }

            if (!found) {
            newArray[index] = array[i];
            index++;
           }
           
        }
    }
    
    mergeAndGetUniqueArray(array1);
    mergeAndGetUniqueArray(array2);

    return newArray;
}




function calculateTotalPrice(products : {name: string; price: number; quantity: number; discount?: number}[]): number {
    if(products.length === 0) return 0;

      const totalPrice = products.reduce((total, item) =>{
        const {price, quantity} = item;
        const originalPrice = quantity*price;

       let discountValue = 0;
       if(item.discount) {
           discountValue = originalPrice*item.discount*0.01;
       }
       
       return total+(originalPrice-discountValue);
      }, 0)

      return totalPrice;
}







