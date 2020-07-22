const selected1 = document.querySelector(".sel1");
const optionsContainer1 = document.querySelector(".op-co1");
const searchBox1 = document.querySelector(".sebox1 input");

const optionsList1 = document.querySelectorAll(".op1");

selected1.addEventListener("click", () => {
    optionsContainer1.classList.toggle("active");

    searchBox1.value = "";
    filterList1("");

    if (optionsContainer1.classList.contains("active")) {
        searchBox1.focus();
    }
});

optionsList1.forEach(o => {
    o.addEventListener("click", () => {

        selected1.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer1.classList.remove("active");
    });
});

searchBox1.addEventListener("keyup", function(e) {
    filterList1(e.target.value);
});

const filterList1 = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList1.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};

/* */
const selected2 = document.querySelector(".sel2");
const optionsContainer2 = document.querySelector(".op-co2");
const searchBox2 = document.querySelector(".sebox2 input");

const optionsList2 = document.querySelectorAll(".op2");

selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");

    searchBox2.value = "";
    filterList2("");

    if (optionsContainer2.classList.contains("active")) {
        searchBox2.focus();
    }
});

optionsList2.forEach(o => {
    o.addEventListener("click", () => {
        selected2.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active");
    });
});

searchBox2.addEventListener("keyup", function(e) {
    filterList2(e.target.value);
});

const filterList2 = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList2.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};
/* */
const selected3 = document.querySelector(".sel3");
const optionsContainer3 = document.querySelector(".op-co3");
const searchBox3 = document.querySelector(".sebox3 input");

const optionsList3 = document.querySelectorAll(".op3");

selected3.addEventListener("click", () => {
    optionsContainer3.classList.toggle("active");

    searchBox3.value = "";
    filterList3("");

    if (optionsContainer3.classList.contains("active")) {
        searchBox3.focus();
    }
});

optionsList3.forEach(o => {
    o.addEventListener("click", () => {
        selected3.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer3.classList.remove("active");
    });
});

searchBox3.addEventListener("keyup", function(e) {
    filterList3(e.target.value);
});

const filterList3 = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList3.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    });
};