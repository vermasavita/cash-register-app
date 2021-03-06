const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const clickButton = document.querySelector("#click-button");
const message = document.querySelector("#error-message");
const noOfNotes =document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const validateBillAndCashAmount = () => {
    hiddeMessage()

    if (Number(billAmount.value) > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturn = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturn);
        } else {
            showMessage("don't be smart, otherwise you have to wash the plates");
        }

    } else {
        showMessage("invalid bill amount");
    }

};

const calculateChange = (amountToBeReturn) => {
    for (let i = 0; i < availableNotes.length;i++ ){
        //const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        //amountToBeReturn = amountToBeReturn % availableNotes[i];
        amountToBeReturn = amountToBeReturn % availableNotes[i];
        //noOfNotes[i].innerText = numberOfNotes;
        noOfNotes[i].innerText = numberOfNotes;
    }

}

const hiddeMessage =() =>{
    message.style.display = "none";
}

const showMessage = (msg) => {
    message.style.display = "block";
    message.innerText = msg;
}

clickButton.addEventListener("click", validateBillAndCashAmount)
