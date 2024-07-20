window.onscroll = () =>{
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
        
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, .1000);
}

window.onload = fadeOut();

document.addEventListener("DOMContentLoaded", function() {
    var models = {
        "Vegetables": ["Onion", "Tomatos", "Potatos", "Capsicum", "Ginger"],
        "Fruits": ["Apples", "Banana", "Blueberry", "Longan", "Pear", "Pineapple"],
        "Seeds": ["flax seeds", "poppy seeds", "sunflower seeds", "sunflower seeds"],
        "Oils": ["butter", "lard", "coconut oil" ,"ghee", "fatty meats", " palm oil"],
    };

    var select1 = document.getElementById("select1");
    var select2 = document.getElementById("select2");

    select1.addEventListener("change", function() {
        var selectedBrand = select1.value;
        var options = models[selectedBrand] || [];

        select2.innerHTML = `<option value="0">items</option>`;
        options.forEach(function(model) {
            var option = document.createElement("option");
            option.value = model.toLowerCase();
            option.text = model;
            select2.add(option);
        });

        // Refresh custom select2
        refreshCustomSelect(select2Container, select2);
    });

    function refreshCustomSelect(container, select) {
        var oldSelected = container.querySelector(".select-selected");
        var oldItems = container.querySelector(".select-items");
        if (oldSelected) oldSelected.remove();
        if (oldItems) oldItems.remove();

        createCustomSelect(container, select);
    }

    function createCustomSelect(container, select) {
        var selElmnt, a, b, c, i, j, ll;
        selElmnt = select;
        ll = selElmnt.length;

        

        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        container.appendChild(b);
        
    }

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i);
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);

    // Initialize custom selects
    createCustomSelect(document.getElementById("select1-container"), select1);
    createCustomSelect(document.getElementById("select2-container"), select2);
});

var $cont = document.querySelector(".cont");
var $elsArr = [].slice.call(document.querySelectorAll(".el"));
var $closeBtnsArr = [].slice.call(document.querySelectorAll(".el__close-btn"));

setTimeout(function () {
  $cont.classList.remove("s--inactive");
}, 200);

$elsArr.forEach(function ($el) {
  $el.addEventListener("click", function () {
    if (this.classList.contains("s--active")) return;
    $cont.classList.add("s--el-active");
    this.classList.add("s--active");
  });
});

$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $cont.classList.remove("s--el-active");
    document.querySelector(".el.s--active").classList.remove("s--active");
  });
});