import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryFilterFn'
})
export class CategoryFilterFn implements PipeTransform {
    transform(items: any[], field : string): any[] {

        if (field === '') return items;
        
        const results = [];

        for(let i = 0; i < items.length; i++) {
            if (items[i].category === field) results.push(items[i])
        }

        return results
    }
}