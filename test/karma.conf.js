// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [ '../src/empty.js', '../test/empty.spec.js' ],
        browsers: [ 'PhantomJS' ],
        frameworks: [ 'jasmine' ],
        reporters: [ 'spec' ]
    });
};