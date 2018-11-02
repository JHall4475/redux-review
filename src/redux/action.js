const addNewItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

const deleteItem = (index) => {
    return {
        type: "DELETE_ITEM",
        payload: index
    }
}

export {
    addNewItem,
    deleteItem
}