(function(root) {
    'use strict';

    describe('Primary access', function() {
        it('empty available in global scope', function() {
            expect(typeof root.empty).toBe('function');
        });
    });
    describe('empty', function() {
        var el;
        beforeEach(function() {
            el = document.createElement('p');
        });
        afterEach(function() {
            el = null;
        });
        it('cleans node with simple text content', function() {
            el.innerHTML = 'something';
            empty(el);
            expect(el.innerHTML).toBe('');
        });
        it('cleans node with simple HTML content', function() {
            el.innerHTML = '<a href="#else">else</a>';
            empty(el);
            expect(el.innerHTML).toBe('');
        });
        it('cleans node with HTML and text content', function() {
            el.innerHTML = 'something <a href="#else">else</a>';
            empty(el);
            expect(el.innerHTML).toBe('');
        });
        it('cleans node with multiple HTML content', function() {
            el.innerHTML = '<a href="#else">else</a><a href="#else">else</a>' +
                '<a href="#else">else</a><a href="#else">else</a>' +
                '<a href="#else">else</a><a href="#else">else</a>';
            empty(el);
            expect(el.innerHTML).toBe('');
        });
        it('does not throws error when called with no node-like object', function() {
            var e;
            try {
                empty({});
            } catch (error) {
                e = error;
            }
            empty({});
            // did not throw error
            expect(e).toBe(undefined);
        });
    });
})(this);
