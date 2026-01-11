function loggerMiddleware(req, res, next) {
    const info = (`METHOD: ${req.method}\n URL: ${req.url} \n DATE: ${Date.now()}`);
    res.json(info);
    next();
}
export default loggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map