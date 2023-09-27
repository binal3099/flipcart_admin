const initialstate = {
    products: [],
    product: null,
    loading: false,
    login: false,
    login_msg: '',
    signup_msg: ''

}

export const Product_reducer = (state = initialstate, action) => {

    switch (action.type) {

        case "Loading":
            return {
                ...state,
                loading: true
            }

        case "AllData":
            return {
                ...state,
                products: action.payload,
                product: null
            }
        case "Single_product":
            return {
                ...state,
                loading: false,
                product: action.payload
            }

        case "sign_up":

            return {
                ...state,
                signup: true,
                signup_msg: "Signup successfullly"
            }

        case "log_in":

            return {
                ...state,
                login: true,
                login_msg: "Login successfullly",
                user: action.payload
            }

        default:
            return state
    }

}