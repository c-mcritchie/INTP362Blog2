module.exports = {
    port : process.env.PORT || 3000,
    mongoURI : process.env.MONGO_URI || "mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority",
}