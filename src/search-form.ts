import { renderBlock } from './lib.js'
import {SearchFormData} from './interfaces.js';

const searchHotel = (data)=> {
  console.log(data);
}

document.getElementById('search-form-block').addEventListener('submit', (e)=>{
  e.preventDefault();
  const searchData: SearchFormData = {
    searchCity: e.target[1].value,
    dateIn: e.target[2].value,
    dateOut: e.target[3].value,
    maxPrice: e.target[4].value,
  }
  searchHotel(searchData);
})

export function renderSearchFormBlock () {

  const formatDate = (offsetMonth:number, offsetDays:number ):string => {
    const date = new Date();
    const yyyy:number = date.getFullYear()

    let dd:unknown = date.getDate()+offsetDays;
    if(offsetDays === 32) dd = 31
    if(dd < 10) dd = '0' + dd;

    let mm:unknown = date.getMonth()+offsetMonth;
    if(mm < 10) mm = '0' + mm

    return `${yyyy}-${mm}-${dd}`
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-fieldset" >
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
<!--            <input type="hidden" disabled value="59.9386,30.3141" />-->
          </div>
<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="home" checked /> Home</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
                <input id="check-in-date" type="date" value="${formatDate(0, 1)}" min="${formatDate(0,0)}" max="${formatDate(1,32)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
                <input id="check-out-date" type="date" value="${formatDate(0,3)}" min="${formatDate(0,0)}" max="${formatDate(1,32)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
