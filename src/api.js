DOC = [...document.getElementsByClassName("function")].map((el) => {
    const name = el.innerText; el = el.nextElementSibling;
    const def = el.innerText; el = el.nextElementSibling;
    const optregex = /, optional\)$/;
    const argregex = /^\(([^,\)]*)/;
    const paramregex = /\w+(?=\s+\()/g;

    const mapper = arg => {
        const typea = arg.nextElementSibling;
        if (!typea || !typea.classList.contains("argtype")) return;
        return { name: arg.textContent, type: typea.textContent.match(argregex)[1], optional: optregex.test(typea.textContent), desc: typea.nextSibling.textContent.substr(3).trim(), param: typea.textContent.match(paramregex)[1] };
    };
    
    const arguments = el.innerText; el = el.nextElementSibling;
    const rets = el.innerText; el = el.nextElementSibling;
    let funcInfo = el.innerText; el = el.nextElementSibling;
    if (funcInfo === "") funcInfo = "none";

    let info = '';
    while (!el.classList.contains('example')) {info = `${info}\n${el.textContent.trim()}`; el = el.nextElementSibling};
    const example = el.innerText.trim();

    let args = arguments.match(paramregex);
    if (args === null) args = "$0";

    innerObj = {
            scope: "lua",
            body: `${name}(${args})`,
            prefix: name,
            description: `${arguments}\n\n${rets}\n\nFunction Information\n${funcInfo}\n\nExample\n${example}` //arguments+"\n"+rets+"\nInformation\n"+funcInfo+"\n\nExample\n"+example,
    };

    return innerObj;
}, {})