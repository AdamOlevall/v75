import { firstToLast, lastToFirst} from './helpers';

describe('helpers', () => {
    test('firstToLast should sort dates from earliest to most recent', () => {
        const data = [
            {
                startTime: "2020-09-26T16:20:00",
            },
            {
                startTime: "2020-09-25T16:20:00",
            },
            {
                startTime: "2020-09-30T16:20:00",
            },
            {
                startTime: "2020-09-22T16:20:00",
            },
            {
                startTime: "2020-09-19T16:20:00",
            },
        ];
        const expectedResult = [
            {
                startTime: "2020-09-19T16:20:00",
            },
            {
                startTime: "2020-09-22T16:20:00",
            },
            {
                startTime: "2020-09-25T16:20:00",
            },
            {
                startTime: "2020-09-26T16:20:00",
            },
            {
                startTime: "2020-09-30T16:20:00",
            },    
        ];
      expect(data.sort(firstToLast)).toStrictEqual(expectedResult);
    });

    test('lastToFirst should sort dates from most recent to the earliest', () => {
        const data = [
            {
                startTime: "2020-09-26T16:20:00",
            },
            {
                startTime: "2020-09-25T16:20:00",
            },
            {
                startTime: "2020-09-30T16:20:00",
            },
            {
                startTime: "2020-09-22T16:20:00",
            },
            {
                startTime: "2020-09-19T16:20:00",
            },
        ];
        const expectedResult = [
            {
                startTime: "2020-09-30T16:20:00",
            },
            {
                startTime: "2020-09-26T16:20:00",
            },
            {
                startTime: "2020-09-25T16:20:00",
            },
            {
                startTime: "2020-09-22T16:20:00",
            },
            {
                startTime:"2020-09-19T16:20:00",
            },    
        ];
      expect(data.sort(lastToFirst)).toStrictEqual(expectedResult);
    });
  });