const mainForm = document.getElementById("form");

const personalInfo = document.getElementById("personal-info");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");

const productInfo = document.getElementById("product-info");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintCheckBox = document.querySelectorAll("#complaints-group input[type='checkbox']");

const complaintDescriptionContainer = document.getElementById("complaint-description-container");
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroup = document.getElementById("solutions-group");
const solutionsRadioBtn = document.querySelectorAll("#solutions-group input[type='radio']");
const otherSolution = document.getElementById("other-solution");

const solutionDescriptionContainer = document.getElementById("solution-description-container");
const solutionDescription = document.getElementById("solution-description");

const btnContainer = document.getElementById("btn-container");
const submitBtn = document.getElementById("submit-btn");

function validateForm() {

     return {
        "full-name": !!fullName.value,
        "email": !!email.value.match(/@/),
        "order-no": !!orderNo.value,
        "product-code": !!productCode.value,
        "quantity": !!quantity.value,
        "complaints-group": Array.from(complaintCheckBox).some(box => box.checked),
        "complaint-description": 
            !otherComplaint.checked ||
            complaintDescription.value.trim().length >= 20,
        "solutions-group": Array.from(solutionsRadioBtn).some(r => r.checked),
        "other-solution": 
            !otherSolution.checked ||
            solutionDescription.value.trim().length >= 20,
    }
    
}

function isValid() {
    const formState = validateForm();
    return Object.values(formState).every(truth => truth === true)
}

submitBtn.addEventListener("click", (e) => {
    if (!!isValid()) e.preventDefault(e);    
});

fullName.addEventListener("input", () => {
    fullName.value.trim() 
    ? fullName.style.borderColor = "green"
    : fullName.style.borderColor = "red"
});
