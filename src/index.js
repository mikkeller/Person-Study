require('./styles.scss'); //sass 연결

const $ = require('jquery');
const DOM = {
    body: '#Body'
};

$(DOM.body).append('<p>TEST</p>');
$(DOM.body).css('background-color', '#ffd200');