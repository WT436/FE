const countries2 = [{
        idtp: 1,
        nameTp: 'Hà Nội'
    },
    {
        idtp: 2,
        nameTp: 'Hà Giang'
    },
    {
        idtp: 4,
        nameTp: 'Cao Bằng'
    },
    {
        idtp: 6,
        nameTp: 'Bắc Kạn'
    },
    {
        idtp: 8,
        nameTp: 'Tuyên Quang'
    },
    {
        idtp: 10,
        nameTp: 'Lào Cai'
    },
    {
        idtp: 11,
        nameTp: 'Điện Biên'
    },
    {
        idtp: 12,
        nameTp: 'Lai Châu'
    },
    {
        idtp: 14,
        nameTp: 'Sơn La'
    },
    {
        idtp: 15,
        nameTp: 'Yên Bái'
    },
    {
        idtp: 17,
        nameTp: 'Hoà Bình'
    },
    {
        idtp: 19,
        nameTp: 'Thái Nguyên'
    },
    {
        idtp: 20,
        nameTp: 'Lạng Sơn'
    },
    {
        idtp: 22,
        nameTp: 'Quảng Ninh'
    },
    {
        idtp: 24,
        nameTp: 'Bắc Giang'
    },
    {
        idtp: 25,
        nameTp: 'Phú Thọ'
    },
    {
        idtp: 26,
        nameTp: 'Vĩnh Phúc'
    },
    {
        idtp: 27,
        nameTp: 'Bắc Ninh'
    },
    {
        idtp: 30,
        nameTp: 'Hải Dương'
    },
    {
        idtp: 31,
        nameTp: 'Hải Phòng'
    },
    {
        idtp: 33,
        nameTp: 'Hưng Yên'
    },
    {
        idtp: 34,
        nameTp: 'Thái Bình'
    },
    {
        idtp: 35,
        nameTp: 'Hà Nam'
    },
    {
        idtp: 36,
        nameTp: 'Nam Định'
    },
    {
        idtp: 37,
        nameTp: 'Ninh Bình'
    },
    {
        idtp: 38,
        nameTp: 'Thanh Hóa'
    },
    {
        idtp: 40,
        nameTp: 'Nghệ An'
    },
    {
        idtp: 42,
        nameTp: 'Hà Tĩnh'
    },
    {
        idtp: 44,
        nameTp: 'Quảng Bình'
    },
    {
        idtp: 45,
        nameTp: 'Quảng Trị'
    },
    {
        idtp: 46,
        nameTp: 'Thừa Thiên Huế'
    },
    {
        idtp: 48,
        nameTp: 'Đà Nẵng'
    },
    {
        idtp: 49,
        nameTp: 'Quảng Nam'
    },
    {
        idtp: 51,
        nameTp: 'Quảng Ngãi'
    },
    {
        idtp: 52,
        nameTp: 'Bình Định'
    },
    {
        idtp: 54,
        nameTp: 'Phú Yên'
    },
    {
        idtp: 56,
        nameTp: 'Khánh Hòa'
    },
    {
        idtp: 58,
        nameTp: 'Ninh Thuận'
    },
    {
        idtp: 60,
        nameTp: 'Bình Thuận'
    },
    {
        idtp: 62,
        nameTp: 'Kon Tum'
    },
    {
        idtp: 64,
        nameTp: 'Gia Lai'
    },
    {
        idtp: 66,
        nameTp: 'Đắk Lắk'
    },
    {
        idtp: 67,
        nameTp: 'Đắk Nông'
    },
    {
        idtp: 68,
        nameTp: 'Lâm Đồng'
    },
    {
        idtp: 70,
        nameTp: 'Bình Phước'
    },
    {
        idtp: 72,
        nameTp: 'Tây Ninh'
    },
    {
        idtp: 74,
        nameTp: 'Bình Dương'
    },
    {
        idtp: 75,
        nameTp: 'Đồng Nai'
    },
    {
        idtp: 77,
        nameTp: 'Bà Rịa - Vũng Tàu'
    },
    {
        idtp: 79,
        nameTp: 'Hồ Chí Minh'
    },
    {
        idtp: 80,
        nameTp: 'Long An'
    },
    {
        idtp: 82,
        nameTp: 'Tiền Giang'
    },
    {
        idtp: 83,
        nameTp: 'Bến Tre'
    },
    {
        idtp: 84,
        nameTp: 'Trà Vinh'
    },
    {
        idtp: 86,
        nameTp: 'Vĩnh Long'
    },
    {
        idtp: 87,
        nameTp: 'Đồng Tháp'
    },
    {
        idtp: 89,
        nameTp: 'An Giang'
    },
    {
        idtp: 91,
        nameTp: 'Kiên Giang'
    },
    {
        idtp: 92,
        nameTp: 'Cần Thơ'
    },
    {
        idtp: 93,
        nameTp: 'Hậu Giang'
    },
    {
        idtp: 94,
        nameTp: 'Sóc Trăng'
    },
    {
        idtp: 95,
        nameTp: 'Bạc Liêu'
    },
    {
        idtp: 96,
        nameTp: 'Cà Mau'
    }
];
const searchInput2 = document.querySelector('#Search2');
const ShowList2 = document.querySelector('#data2');
searchInput2.addEventListener('keyup', function() {
    const num = searchInput2.value.lastIndexOf(',');
    const input2 = searchInput2.value.substring(num + 1);
    ShowList2.innerHTML = '';
    const suggestions2 = countries2.filter(function(country2) {
        return country2.nameTp.toLowerCase().startsWith(input2.toLowerCase());
    });
    if (input2 === '') {
        countries2.forEach(m => {
            const div2 = document.createElement('li');
            div2.innerHTML = div2.innerHTML;
            div2.addEventListener("click", getName2);
            ShowList2.appendChild(div2);
        });
    } else {
        suggestions2.forEach(function(suggested2) {
            const div2 = document.createElement('li');
            div2.innerHTML = suggested2.nameTp;
            div2.addEventListener("click", getName2);
            ShowList2.appendChild(div2);
        });
    }
})

function getName2() {
    const num = searchInput2.value.lastIndexOf(',');
    searchInput2.value = searchInput2.value.substring(0, num);
    searchInput2.value = searchInput2.value + "," + this.innerHTML;
    searchInput2.innerHTML = searchInput2.value + "," + this.innerHTML;
}

function myFunction() {
    var x = document.getElementById("Snack");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 5000);
};
const countries = [{
    name: 'Nam'
}, {
    name: 'Nữ'
}, {
    name: 'Khác'
}, {
    name: 'Bí Mật'
}, ];
const searchInput = document.querySelector('#Search1');
const ShowList = document.querySelector('#data1');
searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    ShowList.innerHTML = '';
    const suggestions = countries.filter(function(country) {
        return country.name.toLowerCase().startsWith(input.toLowerCase());
    });

    if (input === '') {
        countries.forEach(m => {
            const div = document.createElement('li');
            div.value = m.name;
            div.addEventListener("click", getName);
            ShowList.appendChild(div);
        });
    } else {
        suggestions.forEach(function(suggested) {
            const div = document.createElement('li');
            div.innerHTML = suggested.name;
            div.addEventListener("click", getName);
            ShowList.appendChild(div);
        });
    }
})

function getName() {
    searchInput.innerHTML = this.innerHTML;
    searchInput.value = this.innerHTML;
}
document.getElementById("mainmememe0").addEventListener('keyup', function() {
    document.getElementById("Meomeomeo").value = 'http://shopshapphire.net/app/v1/nha-cung-cap/' + this
        .value.split(" ").join("-");
});