"use strict";

checklistItems.forEach(part => {
    document.write("<table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable\">");
    document.write("    <thead>");
    document.write("        <tr>");
    document.write(`            <th class=\"mdl-data-table__cell--non-numeric\">${part.name}</th>`);
    document.write("        </tr>");
    document.write("    </thead>");
    document.write("    <tbody>");
    part.courses.forEach(course => {
        document.write("    <tr>");
        document.write("        <td class=\"mdl-data-table__cell--non-numeric\">");
        document.write(`    <a href=\"${course.href}\" target="${course.target}">`);
        document.write(`            ${course.name}`);
        document.write("    </a>");
        document.write("        </td>");
        document.write("    </tr>");
    });
    document.write("    </tbody>");
    document.write("</table>");
});

addEventListener("load", () => setTimeout(() => {
    let list = document.getElementsByClassName("mdl-checkbox__input");
    console.log(list);
    let data = [];
    if (localStorage[checklistName]) {
        data = JSON.parse(localStorage[checklistName]);
    }
    if (data.length != list.length) {
        data = Array.from(Array(list.length)).map(() => false);
    }
    for (let i = list.length - 1; i >= 0; --i) {
        let el = list.item(i);
        el.addEventListener("change", () => {
            data = data.map((_, i) => list.item(i).checked);
            localStorage[checklistName] = JSON.stringify(data);
        });
        if (data[i]) {
            el.parentElement.MaterialCheckbox.check();
        }
    }
}, 0));
