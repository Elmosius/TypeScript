import {sayHello} from "../src/say-hello";

describe('sayHello', () => {
    it('should return hello Elmo', () => {
        expect(sayHello('Elmo')).toBe('Hello Elmo');
    });
});