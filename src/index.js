module.exports = function check(str, bracketsConfig) {
    while (
        /\(\)/g.test(str) ||
        /\[\]/g.test(str) ||
        /\{\}/g.test(str) ||
        /\|\|/g.test(str) ||
        /11/g.test(str) ||
        /22/g.test(str) ||
        /33/g.test(str) ||
        /44/g.test(str) ||
        /55/g.test(str) ||
        /66/g.test(str) ||
        /77/g.test(str) ||
        /88/g.test(str) ||
        /99/g.test(str) ||
        /00/g.test(str)
    ) {
        str = str.replace(/\(\)/g, "");
        str = str.replace(/\[\]/g, "");
        str = str.replace(/\{\}/g, "");
        str = str.replace(/\|\|/g, "");
        str = str.replace(/11/g, "");
        str = str.replace(/22/g, "");
        str = str.replace(/33/g, "");
        str = str.replace(/44/g, "");
        str = str.replace(/55/g, "");
        str = str.replace(/66/g, "");
        str = str.replace(/77/g, "");
        str = str.replace(/88/g, "");
        str = str.replace(/99/g, "");
        str = str.replace(/00/g, "");
    }

    return !str.length;
};
