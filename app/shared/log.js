exports.logStart = function(val){
    console.log('\n\n············································································ ' + val.d);
    console.log(val.controller+'.controller > '+val.method+'()');
    console.log('············································································ ');
    console.log('   D A T A B A S E');
    console.log('   Document:  '+val.controller+' > '+val.method+'()');
    console.log('   >>> Data Request');
    console.log('   ' + JSON.stringify(val.body));
        console.log('   ············································································\n');
};
exports.logEnd = function(val){
    d       = new Date()
    end     = d.getMilliseconds();
    val.d   =  end - val.start;

    console.log('   <<< Data Response');
    console.log('············································································ Time: '+val.d+' ms');
};
exports.buildToken = function(){
    var d   = new Date();
    return d.getFullYear() +""+ d.getMonth() +""+ d.getDate() +""+ d.getHours() +""+ d.getMinutes() +""+ d.getSeconds() +""+ d.getMilliseconds();
};