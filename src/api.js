DOC = [...document.getElementsByClassName("function")].map((el) => {
    const name = el.innerText; el = el.nextElementSibling;
    const def = el.innerText; el = el.nextElementSibling;
    const optregex = /, optional\)$/;
    const argregex = /^\(([^,\)]*)/;

    const mapper = arg => {
        const typea = arg.nextElementSibling;
        if (!typea || !typea.classList.contains("argtype")) return;
        return { name: arg.textContent, type: typea.textContent.match(argregex)[1], optional: optregex.test(typea.textContent), desc: typea.nextSibling.textContent.substr(3).trim() };
    };

    const arguments = el.innerText; el = el.nextElementSibling;
    const rets = el.innerText; el = el.nextElementSibling;
    let info = '';
    while (!el.classList.contains('example')) {info = `${info}\n${el.textContent.trim()}`; el = el.nextElementSibling};
    const example = el.innerText.trim();

    innerObj = {
            scope: "lua",
            body: name+"()",
            prefix: name,
            description: arguments+"\n"+rets+"\n\nExample\n"+example
    };

    return innerObj;
}, {})