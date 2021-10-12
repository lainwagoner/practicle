
var stringers=[3,"Jerry","Sandy",4,"Pepper",15,"Jocastah",12];

function myFunction(content) {
    let that = this;
    this.ele = document.createElement("div");
    this.eleString = document.createElement("div");

    if (content < 10) {
        this.eleString.innerHTML += "The value is " + content + " and is below 10";
    } else if (content > 5) {
        this.eleString.innerHTML += "The value is " + content + " and is more than 5";
    } else if (content === 15) {
        this.eleString.innerHTML += "The value is " + content + " and is exactly 15";
    } else {
        this.eleString.innerHTML += "The value is " + content + " and is normal";
    }

    myFunction.prototype.onclick = function (){
this.ele.style.color = "blue";
}

    this.ele.addEventListener("click", function () {
        that.onclick();
    });

    this.ele.appendChild(this.eleString);
    document.body.appendChild(this.ele);
}
for (var i = 0; i < stringers.length; i++) {
   new myFunction(stringers[i])
}
