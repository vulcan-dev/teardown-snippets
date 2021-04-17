// const args = {
//     info: arguments.match(paramregex),
//     dataType: arguments.match(dataType)
// };
// if (args['info'] === null) args['info'] = "";
// const setArguments = (input) =>
//     Object.entries(input).forEach(([_, value]) => {
//         if (value == null) return
//         for (let i = 0; i < value.length; i++) {
//             if (test[i] === undefined) test[i] = {name:''}
//             //console.log(test[i]['name'])
//             if (!test[i]['name']) test[i]['name'] = "nein fak u";
//             //console.log(test[i]['name'])
//             //console.log(test[i]['type'])
//             if (test[i]['type'] === 'string') {
//                 // args['info'][i] = "'${" + args['info'][i] + "}'";
//                 args['info'][i] = "'${" + test[i]['name'] + "}'";
//             } else if (test[i]['type'] === 'table') {
//                 // args['info'][i] = '(${' + args['info'][i] + '})';
//                 args['info'][i] = "(${" + test[i]['name'] + "})";
//             } else if (test[i]['type'] === 'number' || test[i]['type'] === 'value' || test[i]['type'] === 'boolean') {
//                 // args['info'][i] = '${' + args['info'][i] + '}';
//                 args['info'][i] = "${" + test[i]['name'] + "}";
//             } else if (test[i]['type'] === '(number, optional)' || test[i]['type'] === '(boolean, optional)') {
//                 args['info'][i] = '${opt_' + test[i]['name'] + '}';
//             } else if (test[i]['type'] === '(table, optional)') {
//                 args['info'][i] = '(${opt_' + test[i]['name'] + '})'
//             } else if (test[i]['type'] === '(string, optional)' ) {
//                 args['info'][i] = "'${opt_" + test[i]['name'] + "}'";
//             } else {
//                 args['info'][i] = "";
//             }
//         }
//     }
// );
// setArguments(args);
"use strict";