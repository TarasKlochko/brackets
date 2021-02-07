module.exports = function check(str, bracketsConfig) {
    let exprConfig = bracketsConfig
        .reduce((sum, arr) => sum.concat(arr), [])
        .reduce(
            (sum, el, index, arr) =>
                sum +
                (isNaN(el) ? "\\" : "") +
                (index % 2 && index !== arr.length - 1 && typeof el !== "number"
                    ? el + "|"
                    : el),
            ""
        );

    let expr = new RegExp(exprConfig, "g");

    while (expr.test(str)) {
        str = str.replace(expr, "");
    }
    return !str.length;
};
