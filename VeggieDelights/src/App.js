/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Master from './components/Master';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import Error from './components/Error';
import Blog_grid from './components/Blog_grid';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Register_f from './components/authentication/Register_f';
import Login from './components/authentication/Login';
import ManageData from './components/ManageData';
import MyCart from './components/MyCart';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import ManageProduct from './components/ManageProduct';
import ManageCategory from './components/ManageCategory';
import ForgetPassword from './components/authentication/ForgetPassword';
import FlipLogin from './components/authentication/FlipLogin';
import SearchProducts from './components/products/SearchProducts';
import MasterUser from './components/MasterUser';
import UpdateCategory from './components/UpdateCategory';
import VendorRegister from './components/authentication/VendorRegister';
import HawkerDash from './components/HawkerDash';
import UpdateProduct from './components/UpdateProduct';
import ViewProductList from './components/ViewProductList';
import ViewVendor from './components/ViewVendor';
import ViewUser from './components/ViewUser';
import Category  from './components/Category';
import ProductByCat from './components/ProductByCat';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import OrderDetails from './components/OrderDetails';
import VendorOrder from './components/VendorOrder';
import AdminOrder from './components/AdminOrder';
import ViewEnquiry from './components/ViewEnquiry';
import ProductByVendor from './components/ProductByVendor';
import ViewVendorList from './components/ViewVendorList';
import ProductDetails from './components/ProductDetails';
import ViewProfile from './components/ViewProfile';
import UpdateProfile from './components/UpdateProfile';
import Home1 from './components/Home1';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/home1' element={<Home1 />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
          <Route path='/blog_grid' element={<Blog_grid/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/testimonial' element={<Testimonial/>}></Route>
          <Route path='/register_f' element={<Register_f/>}></Route>
          <Route path='/register_h' element={<VendorRegister/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/category' element={<Category/>}/>
          <Route path='/forget' element={<ForgetPassword/>}></Route>
          {/* <Route path='/fliplogin' element={<FlipLogin/>}></Route> */}
          {/* <Route path='/search' element={<SearchProducts/>}></Route> */}
          <Route path='/product/:id' element={<ProductByCat/>}/>
          <Route path='/productByvendor/:id' element={<ProductByVendor/>}/>
          <Route path='/vendorlist' element={<ViewVendorList/>}/>
          <Route path='/productDetails/:id' element={<ProductDetails/>}/>

        </Route>
        <Route path='/user' element={<MasterUser/>}>
        {/* <Route path='/user/managedata' element={<ManageData/>}></Route> */}
          {/* <Route path='/user/mycart' element={<MyCart/>}></Route> */}
          <Route path='/user/dashboard' element={<Dashboard/>}></Route>
          <Route path='/user/addproduct' element={<AddProduct/>}></Route>
          <Route path='/user/addcategory' element={<AddCategory/>}></Route>
          <Route path='/user/manageproduct' element={<ManageProduct/>}></Route>
          <Route path='/user/managecategory' element={<ManageCategory/>}></Route>
          <Route path='/user/editCategory/:id' element={<UpdateCategory/>}/>
          <Route path='/user/hawker_dash' element={<HawkerDash/>}/>
          <Route path='/user/editProduct/:id' element={<UpdateProduct/>}/>
          <Route path='/user/product' element={<ViewProductList/>}/>
          <Route path='/user/vendor' element={<ViewVendor/>}/>
          <Route path='/user/users' element={<ViewUser/>}/>
          <Route path='/user/cart' element={<Cart/>}/>
          <Route path='/user/history' element={<OrderHistory/>}/>
          <Route path='/user/viewDetails/:id' element={<OrderDetails/>}/>
          <Route path='/user/orderlist' element={<VendorOrder/>}/>
          <Route path='/user/adminorder' element={<AdminOrder/>}/>
          <Route path='/user/enquiry' element={<ViewEnquiry/>}/>
          <Route path='/user/profile' element={<ViewProfile/>}/>
          <Route path='/user/updateProfile' element={<UpdateProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
