declare module 'flat-rent-sdk'{

 export interface Collection<T>{
   [key:string]:T;
 }

 const database:Collection<Hotel>;

  export interface Hotel {
    id: string,
    title: string,
    details: string,
    photos: string[],
    coordinates: number[],
    bookedDates: number[],
    price: number
  }

  export function cloneDate(date: number):number;
  export function addDays(date:number, days:number):number;

  export const backendPort:number;
  export const localStorageKey:string;

  export interface SearchParams{
    city?:string,
    checkInDate:string,
    checkOutDate:string,
    priceLimit?:number
  }

  export class FlatRentSdk {

    get(id:string):Hotel;
    search(parameters:SearchParams):Collection<Hotel>;
    book(flatId:string, checkInDate:number, checkOutDate:number):unknown;
    _assertDatesAreCorrect(checkInDate:number, checkOutDate:number):number;
    _resetTime(date:number):number;
    _calculateDifferenceInDays(startDate:number, endDate:number):number;
    _generateDateRange(from:number, to:number):number;
    _generateTransactionId():number;
    _areAllDatesAvailable(flat:Hotel, dateRange:number):unknown;
    _formatFlatObject(flat:Hotel, nightNumber:number):Collection<Hotel>
    _readDatabase():string;
    _writeDatabase(database:Collection<Hotel>):void;
    _syncDatabase(database:Collection<Hotel>):void;
  }
}

