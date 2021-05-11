/* Helpers.js */

export function setDocumentTitle(getString) {
    if (!getString) getString = process.env.REACT_APP_DOC_TITLE;
    document.title = getString;
}


export function ConsoleLog(msg) {
    // console.log("[CLG] ", msg);
}  