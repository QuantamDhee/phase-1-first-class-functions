function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function one(){

    }
    return one
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}