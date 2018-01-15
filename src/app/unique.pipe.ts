import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unique'
})
export class UniquePipe implements PipeTransform {
    transform(items: any[], field : string): any[] {

        if (!items) return [];
        var results = [], haveSeen = {};
        for(let i = 0; i < items.length; i++) {
            if (haveSeen[items[i][field]] === true) continue;
            haveSeen[items[i][field]] = true;
            results.push(items[i])
        }
        return results;
    }
}