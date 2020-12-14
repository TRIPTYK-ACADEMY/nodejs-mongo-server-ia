// module.exports = () => {
//     console.log("HEY")
// };

function isIvanAwesome() {
    return true;
}

const awesomeness = isIvanAwesome();

// public
module.exports = {
    details : () => {
        console.log("detail");
    },
    index : () => {
        console.log("index");
    },
    ivanIsAwesome : awesomeness
}