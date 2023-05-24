//jshint esversion:6

//podes usar tanto exports quanto module.exports

exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    
    return today.toLocaleDateString('pt-BR', options);
}

module.exports.getDay = function() {
    const today = new Date();

    const options = {
        weekday: 'long'
    };

    return today.toLocaleDateString('pt-BR', options);
}


