export const EDIT_USERINFO = "editUserinfo";
export const LOAD_EDIT_USER = "loadedituser";
export const USEREDIT_ERROR = "useredit_error"

const EditUserInfo = (data) => {
    return {
        type: EDIT_USERINFO,
        payload: data
    }
}
const LoadEditUser = () => {
    return {
        type: LOAD_EDIT_USER
    }
}
const LoadeEditUserErr = (data) => {
    return {
        type: USEREDIT_ERROR,
        payload: data
    }
}


// editing the User name and gender
export const EditUserApi = (id, userdata) => {
    return async (dispatch) => {
        try {
            dispatch(LoadEditUser())
            let responce = await fetch(`http://192.168.0.109:8000/ecommerce/updateInfo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userdata)
            })
            let data = await responce.json()

            if (data) {
                dispatch(EditUserInfo(data))
            }

        } catch (error) {
            dispatch(LoadeEditUserErr(error))
        }
    }
}


// editing the Email
export const EditUserEmail = (id, email) => {
    return async (dispatch) => {
        try {
            dispatch(LoadEditUser())
            let responce = await fetch(`http://192.168.0.109:8000/ecommerce/updateEmail/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(email)
            })
            let data = await responce.json()
            if (data) {
                dispatch(EditUserInfo(data))
            }
        } catch (error) {
            dispatch(LoadeEditUserErr(error))
        }
    }
}


// Editing phone number

export const EditUserPhone=(id,number)=>
{
    return async (dispatch)=>
    {
        dispatch(LoadEditUser())
        try {
            let responce=await fetch(`http://192.168.0.109:8000/ecommerce/updatePhone/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(number)
            })

            let data=await responce.json()
            if(data)
            {
                dispatch(EditUserInfo(data))
            }
        } catch (error) {
            dispatch(LoadeEditUserErr(error))
        }
    }
}