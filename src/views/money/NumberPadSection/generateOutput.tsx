// type InputString = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'0'|'.'|'删除'|'清空';
const generateOutput = (text: string, outPut = '0') => {
    switch (text) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (outPut === '0') {
                return text;
            } else {
                return outPut + text;
            }
        case '.':
            if (outPut.indexOf('.') >= 0) {
                return outPut;
            }
            return outPut + text;
        case '删除':
            console.log("ddsw--")
            if (outPut.length === 1) {
                return '';
            } else {
                return outPut.slice(0, -1);
            }
        case '清空':
            console.log("ddsw1--")
            return '';
        default:
            return '';
    }
}

export { generateOutput };