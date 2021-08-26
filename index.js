"use strict";

[
    {
        "name": "Introduction",
        "courses": [
            {
                "name": "Exercise: Say \"Hello, World!\" with C++",
                "href": "https://www.hackerrank.com/challenges/cpp-hello-world/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Input and Output",
                "href": "https://www.hackerrank.com/challenges/cpp-input-and-output/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Basic Data Types",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Conditional Statements",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-conditional-if-else/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: For Loop",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-for-loop/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Functions",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-functions/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Pointer",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-pointer/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Arrays Introduction",
                "href": "https://www.hackerrank.com/challenges/arrays-introduction/problem",
                "target": "exercise"
            }
        ]
    },
    {
        "name": "Classes",
        "courses": [
            {
                "name": "Exercise: StringStream",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-stringstream/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Class",
                "href": "https://www.hackerrank.com/challenges/c-tutorial-class/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Classes and Objects",
                "href": "https://www.hackerrank.com/challenges/classes-objects/problem",
                "target": "exercise"
            },
            {
                "name": "Microsoft Docs: Member Access Control",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/member-access-control-cpp",
                "target": "docs"
            },
            {
                "name": "Microsoft Docs: Constructors",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/constructors-cpp",
                "target": "docs"
            },
            {
                "name": "Exercise: Box It!",
                "href": "https://www.hackerrank.com/challenges/box-it/problem",
                "target": "exercise"
            },
            {
                "name": "Microsoft Docs: Virtual Functions",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/virtual-functions",
                "target": "docs"
            },
            {
                "name": "Exercise: Virtual Functions",
                "href": "https://www.hackerrank.com/challenges/virtual-functions/problem",
                "target": "exercise"
            }
        ]
    },
    {
        "name": "Inheritance",
        "courses": [
            {
                "name": "Exercise: Inheritance Introduction",
                "href": "https://www.hackerrank.com/challenges/inheritance-introduction/problem",
                "target": "exercise"
            },
            {
                "name": "Microsoft Docs: Single Inheritance",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/single-inheritance",
                "target": "docs"
            },
            {
                "name": "Exercise: Rectangle Area",
                "href": "https://www.hackerrank.com/challenges/rectangle-area/problem",
                "target": "exercise"
            },
            {
                "name": "Exercise: Multi-Level Inheritance",
                "href": "https://www.hackerrank.com/challenges/multi-level-inheritance-cpp/problem",
                "target": "exercise"
            }
        ]
    },
    {
        "name": "Other Concepts",
        "courses": [
            {
                "name": "Microsoft Docs: try, throw, and catch Statements",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/try-throw-and-catch-statements-cpp",
                "target": "docs"
            },
            {
                "name": "Exercise: Cpp exception handling",
                "href": "https://www.hackerrank.com/challenges/cpp-exception-handling/problem",
                "target": "exercise"
            },
            {
                "name": "Microsoft Docs: References",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/references-cpp",
                "target": "docs"
            },
            {
                "name": "Microsoft Docs: Templates",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/templates-cpp",
                "target": "docs"
            },
            {
                "name": "Exercise: C++ Class Templates",
                "href": "https://www.hackerrank.com/challenges/c-class-templates/problem",
                "target": "exercise"
            },
            {
                "name": "Microsoft Docs: Arrays",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/arrays-cpp",
                "target": "docs"
            },
            {
                "name": "Microsoft Docs: Lambda Expressions",
                "href": "https://docs.microsoft.com/en-us/cpp/cpp/lambda-expressions-in-cpp",
                "target": "docs"
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
    if (localStorage.learnCpp) {
        data = JSON.parse(localStorage.learnCpp);
    }
    if (data.length != list.length) {
        data = Array.from(Array(list.length)).map(() => false);
    }
    for (let i = list.length - 1; i >= 0; --i) {
        let el = list.item(i);
        el.addEventListener("change", () => {
            data = data.map((_, i) => list.item(i).checked);
            localStorage.learnCpp = JSON.stringify(data);
        });
        if (data[i]) {
            el.parentElement.MaterialCheckbox.check();
        }
    }
}, 0));
