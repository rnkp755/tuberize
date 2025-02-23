const asyncHandler = (reqHandler) => async (req, res, next) => {
    Promise.resolve(await reqHandler(req, res, next)).catch((error) => {
        console.error(error);
        next(error);
    });
};

export { asyncHandler };
