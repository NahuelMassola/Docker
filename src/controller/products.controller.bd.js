const { productServices } = require("../service/index");
const HttpResponse = require("../utils/middleware/errores");
const generateProducts = require("../utils/productsFaker");


const HttpResp = new HttpResponse

const getProductsBd = async (req, res) => {
  try {
    const { limit, page, sort, ...query } = req.query;
    const products = await productServices.getProduct(page, limit, sort, query);
    return HttpResp.OK(res , "Succes" , products)
  } catch (error) {
    return HttpResp.Error(res , "Error" , error)
  }
};


const getProductIdBd = async (req, res) => {
  try {
    const id = req.params.pid
    const getProductId = await productServices.getProductId(id);
    return HttpResp.OK(res , "Succes" , getProductId)
  } catch (error) {
    return HttpResp.BadRequest(res , "Error" , error)
  }
}


const addProductBd = async (req, res) => {
  try {
    const product = req.body;
    const newproduct = await productServices.addProduct(product);
    return HttpResp.OK(res , "Succes" , newproduct)
  } catch (error) {
    return HttpResp.BadRequest(res , "Error" , error)
  }
}

const updateProductBd = async (req, res) => {
  try {
    const id = req.params.pid
    const product = req.body
    const UpdateProductId = await productServices.updateProduct(id, product);
    return HttpResp.OK(res , "Succes" , UpdateProductId)
  } catch (error) {
    return HttpResp.BadRequest(res , "Error" , error)
  }
}

const deleteProductBd = async (req, res) => {
  try {
    const id = req.params.pid
    const deleteproduct = await productServices.deleteProductId(id);
    return HttpResp.OK(res , "Succes" , deleteproduct)
  } catch (error) {
    return HttpResp.BadRequest(res , "Error" , error)
  }
}


const getmockingproducts = async (req,res)=>{
  try {
    const products = generateProducts()
    return HttpResp.OK(res , "Succes" , products)
  } catch (error) {
    return HttpResp.error(res , "Error" , error)
  }
}

module.exports = {
  getProductsBd,
  getProductIdBd,
  addProductBd,
  updateProductBd,
  deleteProductBd,
  getmockingproducts
}
