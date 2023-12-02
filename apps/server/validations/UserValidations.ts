import joi from 'joi'

export const userSignupValidation = (data: {data: object}) => {
    const userSchema = joi.object({
        username: joi.string().required(),
        email: joi.string().email({minDomainSegments: 2 , tlds: { allow: ['com','uk','net']}}).required(),
        password: joi.string().pattern(/^[a-zA-Z0-9]{8,15}$/).required()
    }) 
    
    return userSchema.validate(data)
}

export const userLoginValidation = (data: {data: object}) => {
    const userschema = joi.object({
        password: joi.string().pattern(/^[a-zA-Z0-9]{8,15}$/).required(),
        email: joi.string().email({minDomainSegments: 2, tlds: { allow: ['com','net','uk']}})
    })

    return userschema.validate(data)
}