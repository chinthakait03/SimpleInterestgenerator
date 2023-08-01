let calculaterbtn = document.getElementById("calculate-btn");

let result = document.getElementById("result");

let calculate = () => {
    let p = Number(document.getElementById("principal").value);


    let r = Number(document.getElementById("rate").value);

    let t = Number(document.getElementById("time").value);

    let duration = document.getElementById("duration").value;

    //console.log(p, r, t, duration);

    let simpleInterest = duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;

    //console.log(simpleInterest);
    let amount = p + simpleInterest;

    // console.log(amount);

    result.innerHTML = `<div>Principal Amount:<span>$${p.toFixed(2)
        }</span></div>
        <div>Total Interest:<span>$${simpleInterest.toFixed(2)}</span></div>
            <div>Total Amount:<span>$${amount.toFixed(2)}</span></div>`;
};

calculaterbtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);




