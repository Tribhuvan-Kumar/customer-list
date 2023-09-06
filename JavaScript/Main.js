const modal = document.getElementById("modal");
const modalRender = document.getElementById("auto-render-here");
let Contacts = [];
if (localStorage.getItem("contacts")) {
    Contacts = JSON.parse(localStorage.getItem("contacts"));
    renderNewHtml();
}


function renderNewHtml() {
    for (let index = 0; index < Contacts.length; index++) {
        let elm = Contacts[index];

        const element = Contacts[index];

        let newEle = document.createElement('tr');

        let firstNameItem = document.createElement('td');
        firstNameItem.textContent = `${elm.firstName}`;
        newEle.appendChild(firstNameItem);

        let lastNameItem = document.createElement('td');
        lastNameItem.textContent = `${elm.lastName}`;
        newEle.appendChild(lastNameItem);

        let streetItem = document.createElement('td');
        streetItem.textContent = `${elm.street}`;
        newEle.appendChild(streetItem);

        let addressItem = document.createElement('td');
        addressItem.textContent = `${elm.address}`;
        newEle.appendChild(addressItem);

        let cityItem = document.createElement('td');
        cityItem.textContent = `${elm.city}`;
        newEle.appendChild(cityItem);

        let stateItem = document.createElement('td');
        stateItem.textContent = `${elm.state}`;
        newEle.appendChild(stateItem);

        let emailItem = document.createElement('td');
        emailItem.textContent = `${elm.email}`;
        newEle.appendChild(emailItem);

        let phoneNumberItem = document.createElement('td');
        phoneNumberItem.textContent = `${elm.phoneNumber}`;
        newEle.appendChild(phoneNumberItem);

        let iconEditDel = document.createElement('td');
        iconEditDel.classList.add("actions");

        let editBtnModal = document.createElement('button');
        editBtnModal.classList.add("edit");
        editBtnModal.innerHTML = '<i class="fa-solid fa-pen edit-btn-modal"></i>';
        editBtnModal.addEventListener(('click'), () => update(index));

        let delBtnModal = document.createElement('button');
        delBtnModal.classList.add("delete");
        delBtnModal.innerHTML = '<i class="fa-solid fa-circle-minus delete-btn-modal"></i>';
        delBtnModal.addEventListener(("click"), () => del(index));

        iconEditDel.appendChild(editBtnModal);
        iconEditDel.appendChild(delBtnModal);


        newEle.appendChild(iconEditDel);
        modalRender.appendChild(newEle);


    }
}

function del(targetIndex) {
    Contacts = Contacts.filter((elm, index) => {
        if (targetIndex == index) return false;
        return true;
    })
    saveContactInLocalStorage();
    modalRender.innerHTML = "";
    renderNewHtml();
}


function update(targetIndex) {

    let obj = Contacts[targetIndex];

    openModal("Update");
    
    let firstName = document.getElementById("modalCustomerFirstName");
    let lastName = document.getElementById("modalCustomerLastName");
    let street = document.getElementById("modalCustomerStreet");
    let address = document.getElementById("modalCustomerAddress");
    let city = document.getElementById("modalCustomerCity");
    let state = document.getElementById("modalCustomerState");
    let email = document.getElementById("modalCustomerEmail");
    let phoneNumber = document.getElementById("modalCustomerPhoneNumber");


    firstName.value = obj.firstName;
    lastName.value = obj.lastName;
    street.value = obj.street;
    address.value = obj.address;
    city.value = obj.city;
    state.value = obj.state;
    email.value = obj.email;
    phoneNumber.value = obj.phoneNumber;
    document.getElementById("modalSubmit").onclick=()=>{upadteHelper(targetIndex)}
}

function upadteHelper(targetIndex){
    const contactNewObj=callEverthing();
    if(contactNewObj== undefined) return;

    Contacts[targetIndex]=contactNewObj;
    saveContactInLocalStorage();
    clearModalForm();
    document.getElementById("modalSubmit").onclick=updateOrAdd;
    closeModal();
    renderNewHtml();
    
}


function openModal(updateOrAdd) {
    modal.style.display = "block";
    document.getElementById("modalSubmit").innerText=updateOrAdd;
}

function closeModal() {
    modal.style.display = "none";
    clearModalForm();
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        closeModal();
    }
})

function updateOrAdd(){
    if(document.getElementById('modalSubmit').innerText=="Add"){
        Add();
    }
}

function Add() {
    const contactNewObj=callEverthing();
    if(contactNewObj== undefined) return;
    Contacts.push(contactNewObj);
    saveContactInLocalStorage();
    clearModalForm();
    closeModal();
    renderNewHtml();

}

function saveContactInLocalStorage() {
    localStorage.setItem("contacts", JSON.stringify(Contacts));
}

function clearModalForm() {
    document.getElementById("modalCustomerFirstName").value = "";
    document.getElementById("modalCustomerLastName").value = "";
    document.getElementById("modalCustomerStreet").value = "";
    document.getElementById("modalCustomerAddress").value = "";
    document.getElementById("modalCustomerCity").value = "";
    document.getElementById("modalCustomerState").value = "";
    document.getElementById("modalCustomerEmail").value = "";
    document.getElementById("modalCustomerPhoneNumber").value = "";
}

function callEverthing() {
    let firstName = document.getElementById("modalCustomerFirstName").value;
    let lastName = document.getElementById("modalCustomerLastName").value;
    let street = document.getElementById("modalCustomerStreet").value;
    let address = document.getElementById("modalCustomerAddress").value;
    let city = document.getElementById("modalCustomerCity").value;
    let state = document.getElementById("modalCustomerState").value;
    let email = document.getElementById("modalCustomerEmail").value;
    let phoneNumber = document.getElementById("modalCustomerPhoneNumber").value;




    if (firstName === "" || lastName === "" || street === "" || address === "" || city === "" || state === "" || email === "" || phoneNumber === "") {
        alert("please complete the form!");
        return undefined;
    }


    const contactNewObj = {
        firstName: firstName,
        lastName: lastName,
        street: street,
        address: address,
        city: city,
        state: state,
        email: email,
        phoneNumber: phoneNumber
    }
    modalRender.innerHTML="";
    return contactNewObj;
    
}


function logOutClear() {
    window.location.replace("index.html");
}