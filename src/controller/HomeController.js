
let routes = {
  doctor:{
    doctors: `${process.env.ROUTER_VERSION}/doctors/`,
    
  },
  service:{
    services: `${process.env.ROUTER_VERSION}/services/`
  }
}
const HomeController = {
  getHome: (req, res) => {
    res.status(200).json({
      message: "API WEBSHOP v1",
      routes: routes
    });
  },
};

export default HomeController;
