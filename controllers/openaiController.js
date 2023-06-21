// openai lib will return a promise
const generateImage = async (req, res) => {
    res.status(200).json({
        success: true,
    });
}  

module.exports = { generateImage };
