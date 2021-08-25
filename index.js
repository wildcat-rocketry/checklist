"use strict";

[
    {
        "name": "Introduction",
        "courses": [
            {
                "name": "Say \"Hello, World!\" with C++"
            },
            {
                "name": "Input and Output"
            },
            {
                "name": "Basic Data Types"
            },
            {
                "name": "Conditional Statements"
            },
            {
                "name": "For Loop"
            },
            {
                "name": "Functions"
            },
            {
                "name": "Pointer"
            },
            {
                "name": "Arrays Introduction"
            }
        ]
    },
    {
        "name": "Classes",
        "courses": [
            {
                "name": "StringStream"
            },
            {
                "name": "Class"
            },
            {
                "name": "Classes and Objects"
            },
            {
                "name": "Box It!"
            },
            {
                "name": "Virtual Functions"
            }
        ]
    },
    {
        "name": "Inheritance",
        "courses": [
            {
                "name": "Inheritance Introduction"
            },
            {
                "name": "Rectangle Area"
            },
            {
                "name": "Multi-Level Inheritance"
            },
            {
                "name": "Accessing Inherited Functions"
            }
        ]
    },
    {
        "name": "Debugging",
        "courses": [
            {
                "name": "Cpp exception handling"
            }
        ]
    },
    {
        "name": "Other Concepts",
        "courses": [
            {
                "name": "C++ Class Templates"
            },
            {
                "name": "Overload Operators"
            },
            {
                "name": "C++ Class Template Specialization"
            }
        ]
    }
].forEach(part => {
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
        document.write(`            ${course.name}`);
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
    if (localStorage.data) {
        data = JSON.parse(localStorage.data);
    }
    if (data.length != list.length) {
        data = Array.from(Array(list.length)).map(() => false);
    }
    for (let i = list.length - 1; i >= 0; --i) {
        let el = list.item(i);
        el.addEventListener("change", () => {
            data = data.map((_, i) => list.item(i).checked);
            localStorage.data = JSON.stringify(data);
        });
        if (data[i]) {
            el.parentElement.MaterialCheckbox.check();
        }
    }
}, 0));
