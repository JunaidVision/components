import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeago',
  standalone: true
})
export class DateTimeAgoPipe implements PipeTransform {
  transform(value: any): string {

    if (!value) {
      return ""
    }

    let currDate = Date.now();
    try {
      let createdate = new Date(value);

      let msPerMinute = 60 * 1000;
      let msPerHour = msPerMinute * 60;
      let msPerDay = msPerHour * 24;
      // let msPerWeek = msPerDay * 7;
      let msPerMonth = msPerDay * 30;
      let msPerYear = msPerDay * 365;

      let dif = currDate - createdate.getTime();

      let _retDateWord = "";
      let _retCalVal = null;

      if (dif < msPerMinute) {
        _retCalVal  =  Math.round(dif / 1000);
        _retDateWord = (_retCalVal > 1) ?( _retCalVal + ' seconds ago'): _retCalVal + ' second ago'
        
      } else if (dif < msPerHour) {
        _retCalVal = Math.round(dif / msPerMinute);
        _retDateWord = (_retCalVal > 1) ? (_retCalVal + ' minutes ago') : _retCalVal + ' minute ago'

      } else if (dif < msPerDay) {
         _retCalVal = Math.round(dif / msPerHour);
        _retDateWord = (_retCalVal > 1) ? (_retCalVal + ' hours ago') : _retCalVal + ' hour ago'
      }
      //  else if (dif < msPerWeek) {
      //   return Math.round(dif / msPerDay) + ' days ago (last week)';
      // } 
      else if (dif < msPerMonth) {
        _retCalVal = Math.round(dif / msPerDay);
        _retDateWord = (_retCalVal > 1) ? (_retCalVal + ' days ago') : _retCalVal + ' day ago'
      } else if (dif < msPerYear) {
          _retCalVal = Math.round(dif / msPerMonth);
        _retDateWord = (_retCalVal > 1) ? (_retCalVal + ' months ago') : _retCalVal + ' month ago'
      } else {
         _retCalVal = Math.round(dif / msPerYear);
        _retDateWord = (_retCalVal > 1) ? (_retCalVal + ' years ago') : _retCalVal + ' year ago'
      }

      return  _retDateWord

    }

    catch (error) {
      return ""
    }

  }
}
