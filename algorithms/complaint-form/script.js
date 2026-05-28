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
const solutionsRadioBtns = document.querySelectorAll("#solutions-group input[type='radio']");
const otherSolution = document.getElementById("other-solution");

const solutionDescriptionContainer = document.getElementById("solution-description-container");
const solutionDescription = document.getElementById("solution-description");

const btnContainer = document.getElementById("btn-container");
const submitBtn = document.getElementById("submit-btn");

function validateForm() {
    return {
        "full-name": !!fullName.value.trim(),
        "email": !!email.value.match(/@/),
        "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
        "product-code": /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCode.value.trim()),
        "quantity": !!quantity.value.trim() >= 1,
        "complaints-group": Array.from(complaintCheckBox).some(box => box.checked),
        "complaint-description": 
            !otherComplaint.checked ||
            complaintDescription.value.trim().length >= 20,
        "solutions-group": Array.from(solutionsRadioBtns).some(r => r.checked),
        "solution-description": 
            !otherSolution.checked ||
            solutionDescription.value.trim().length >= 20,
    };
}

function isValid() {
    const formState = validateForm();
    return Object.values(formState).every(truth => truth === true)
}

submitBtn.addEventListener("click", (e) => {
    if (!!isValid()) e.preventDefault(e);    
});

fullName.addEventListener("change", () => {
    fullName.value.trim() 
    ? fullName.style.borderColor = "green"
    : fullName.style.borderColor = "red"
});

email.addEventListener("change", () => {
    email.value.trim() 
    ? email.style.borderColor = "green"
    : email.style.borderColor = "red"
});

orderNo.addEventListener("change", () => {
    /^2024\d{6}$/.test(orderNo.value.trim()) 
    ? orderNo.style.borderColor = "green"
    : orderNo.style.borderColor = "red"
});

productCode.addEventListener("change", () => {
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCode.value.trim()) 
    ? productCode.style.borderColor = "green"
    : productCode.style.borderColor = "red"
});

quantity.addEventListener("change", () => {
    quantity.value.trim() > 0
    ? quantity.style.borderColor = "green"
    : quantity.style.borderColor = "red"
});

complaintCheckBox.forEach(box => {
    box.addEventListener("change", () => {
        const oneChecked = Array.from(complaintCheckBox).some(cb => cb.checked);
        complaintsGroup.style.borderColor = oneChecked ? "green" : "red";
    });
});

solutionsRadioBtns.forEach(btn => {
    btn.addEventListener("change", () => {
        const oneChecked = Array.from(solutionsRadioBtns).some(cr => cr.checked);
        solutionsGroup.style.borderColor = oneChecked ? "green" : "red";
    });
});

complaintDescription.addEventListener("change", () => {
    otherComplaint.checked && complaintDescription.value.trim().length >= 20
    ? complaintDescription.style.borderColor = "green"
    : complaintDescription.style.borderColor = "red"
});

solutionDescription.addEventListener("change", () => {
    otherSolution.checked && solutionDescription.value.trim().length >= 20
    ? solutionDescription.style.borderColor = "green"
    : solutionDescription.style.borderColor = "red"
});
