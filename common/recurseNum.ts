import React from "react";

function recurseNum({initialNum, initialNumState, targetNum}: {initialNum: number, initialNumState: typeof React.useState, targetNum: number}) {
    if (initialNum < targetNum) {
        initialNumState(initialNum++)
        setTimeout(recurseNum, 150)
    } else {
        // @ts-ignore
        clearTimeout(recurseNum)
    }
}

export default recurseNum;