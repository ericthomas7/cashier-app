import reactApi from "./reactApi";


// react requests
export const addCashFlow = async (data) => {
    const response = await reactApi.post('/cashes',{ cash: data})
    const responseData = response.data
    return responseData
}

export const loadFlowCategories = async () => {
    const response = await reactApi.get('/flow_categories')
    const responseData = response.data
    return responseData
}

export const loadCashes = async () => {
    const response = await reactApi.get('/cashes')
    const responseData = response.data
    return responseData
}

export const deleteCash = async (id) => {
    const response = await reactApi.delete(`/cashes/${id}`)
}

