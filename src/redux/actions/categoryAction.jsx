export const insertCategory = (category, navigate) => async (dispatch) =>{
    //const service = new CategoryService()

    try {
        console.log('inser category')
    } catch (error) {
        console.log('Error' + error)
    }

    navigate("/categories/list")
}