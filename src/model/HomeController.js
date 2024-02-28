const HomeController = {
  getHome: (req, res) => {
    res.status(200).json({
      message: "API WEBSHOP v1",
    });
  },
};

export default HomeController;
