
const variablesError = {
    ERROR_GENERICO : 0 ,
    ERROR_PRODUCT : 3
}

const mdwError = (error , res , req , next) => {
    switch (error.code) {
        case variablesError.ERROR_GENERICO:
            res.status(401).json({
                Error: error.code ,
                msg: error.message,
                TypeError: error.typeError
            })
            break;

        }
}

module.exports = mdwError