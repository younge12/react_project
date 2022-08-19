const UploadController = {
  postUploadImage: async (req, res) => {
    res.send(req.file.location);
  },
};
export default UploadController;
