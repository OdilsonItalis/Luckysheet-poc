const List = async () => {
    return "all cell data"
};

const saveCellData = async (data) => {
    console.log("---------------->>>>", data);
    return "Save data success!";
}

module.exports = {
    List,
    saveCellData,
}
