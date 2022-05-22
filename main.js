//"https://teachablemachine.withgoogle.com/models/447ctxHmi/"
console.log("Console Is for developers")
console.log("Ml5 version:" + ml5.version)
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/447ctxHmi/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{

    }
}