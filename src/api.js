DOC = [...document.getElementsByClassName("function")].map((el) => {
    const name = el.innerText;
    el = el.nextElementSibling;

    const def = el.innerText;
    el = el.nextElementSibling;

    const optregex = /, optional\)$/;
    const argregex = /^\(([^,\)]*)/;
    //const paramregex = /\w+(?=\s+\()/g;
    const paramregex = /[^Arguments]^\S+()/gm;
    const dataType = /\((.*?)\)/g;

    const mapper = arg => {
        const typea = arg.nextElementSibling;
        if (!typea || !typea.classList.contains("argtype")) return;
        return {
            arg: {
                name: arg.textContent,
                type: typea.textContent.match(argregex)[1],
                optional: optregex.test(typea.textContent),
                desc: typea.nextSibling.textContent.substr(3).trim()
            }
        };
    };

    const arguments = [...el.getElementsByClassName('argname')].map(mapper).filter(arg => arg);

    console.log(Object.values(arguments.arg['name']));

    // const arguments = el.innerText;
    // el = el.nextElementSibling;

    const rets = el.innerText;
    el = el.nextElementSibling;

    let funcInfo = el.innerText;
    el = el.nextElementSibling;

    if (funcInfo === "") funcInfo = "none";

    let info = '';
    while (!el.classList.contains('example')) {
        info = `${info}\n${el.textContent.trim()}`;
        el = el.nextElementSibling
    };

    const example = el.innerText.trim();

    innerObj = {
        scope: "lua",
        body: `${name}(${arguments.arguments['name']})`,
        prefix: name,
        description: `${arguments}\n\n${rets}\n\nFunction Information\n${funcInfo}\n\nExample\n${example}`
    };

    innerObj = {
        args: {
            name: "ok"
        }
    }

    console.log(innerObj.args['name'])

    return innerObj;
}, {}).filter(notUndefined => notUndefined !== undefined)