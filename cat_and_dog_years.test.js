const getHumanAge = require('./cat_and_dog_years');

describe('koty i psy',()=>{
    test('0 lat da 0',()=>{
        expect(getHumanAge(0,0)).toEqual([0,0]);
    });
    test('14 lat da 0',()=>{
        expect(getHumanAge(14,14)).toEqual([0,0]);
    });
    test('15 lat da 1',()=>{
        expect(getHumanAge(15,15)).toEqual([1,1]);
    });
    test('23 lat da 1',()=>{
        expect(getHumanAge(23,23)).toEqual([1,1]);
    });
    test('24 lat da 2',()=>{
        expect(getHumanAge(24,24)).toEqual([2,2]);
    });
})