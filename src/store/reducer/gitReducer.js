import { GitAction } from "../action/gitAction";

const INITIAL_STATE = {
  loading: false,
  logonUser: [],
  currentUser: [],
  registrationReturn: [],
  sidebars: [],

  // Shop
  shopUpdated: [],
  // Address
  allAddress: [],

  // Merchant
  merchant: [],
  merchantOrders: [],

  // Product
  addResult: [],
  products: [],
  productsListing: [],
  productsByID: [],
  returnUpdateProduct: [],
  productMgmtResult: [],
  endorsedProduct: [],
  exists: [],
  addProductVariationResult: [],
  variationResult: [],
  variations: [],
  productSpecsDetail: [],
  SpecsDetail: [],
  deleteproductSpecsDetail: [],
  productMediaResult: [],
  categories: [],
  productCategories: [],

  // Order
  order: [],
  transactions: [],
  transactionStatus: [],
  tracking: [],


  // Review
  reviews: [],
  reviewReturn: [],

  //General
  countries: [],
  logistic: []
};

export function counterReducer(state = INITIAL_STATE, action) {
  ///////////////////////////////////////////////////  user account credentials ///////////////////////////////////////////////////
  switch (action.type) {
    case GitAction.Login:
      return Object.assign({}, state, { loading: true });
    case GitAction.LoginSuccess:
      return Object.assign({}, state, {
        loading: false,
        logonUser: action.payload
      });

    case GitAction.Logout:
      return Object.assign({}, state, { loading: true });
    case GitAction.UserLoggedOut:
      return Object.assign({}, state, {
        loading: false,
        logonUser: action.payload
      });

    case GitAction.RegisterUser:
      return Object.assign({}, state, { loading: true });
    case GitAction.UserRegistered:
      return Object.assign({}, state, {
        loading: false,
        registrationReturn: action.payload
      });
    case GitAction.ResetRegistrationReturn:
      return Object.assign({}, state, { registrationReturn: [] });

    case GitAction.GetUserProfile:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotUserProfile:
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.payload
      });
    case GitAction.ResetUserProfile:
      return Object.assign({}, state, { currentUser: [] });

    case GitAction.UpdateUserStatus:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedUserStatus:
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.payload,
      });

    case GitAction.ClearCurrentUser:
      return Object.assign({}, state, { loading: true, currentUser: [] });
    ///////////////////////////////////////////////////  sidebar configuration ///////////////////////////////////////////////////

    case GitAction.FetchSidebar:
      return Object.assign({}, state, { loading: true });
    case GitAction.SidebarFetched:
      return Object.assign({}, state, {
        loading: false,
        sidebars: action.payload
      });
    case GitAction.ResetSidebar:
      return Object.assign({}, state, { sidebars: [] });

    ///////////////////////////////////////////////////  Shop  ///////////////////////////////////////////////////

    case GitAction.UpdateShopDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedShopDetail:
      return Object.assign({}, state, {
        loading: false,
        shopUpdated: action.payload,
      });

    case GitAction.UpdateProfileImage:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProfileImage:
      return Object.assign({}, state, {
        loading: false,
        currentUser: action.payload,
      });

    ///////////////////////////////////////////////////  Address  ///////////////////////////////////////////////////

    case GitAction.GetAllAddress:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotAllAddress:
      return Object.assign({}, state, {
        loading: false,
        allAddress: action.payload,
      });

    ///////////////////////////////////////////////////  Order  ///////////////////////////////////////////////////

    case GitAction.AddOrder:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedOrder:
      return Object.assign({}, state, {
        loading: false,
        order: action.payload,
      });

    case GitAction.ClearOrder:
      return Object.assign({}, state, { order: [], });

    case GitAction.OrderUserDetailsUpdate:
      return Object.assign({}, state, { loading: true });
    case GitAction.OrderUserDetailsUpdated:
      return Object.assign({}, state, {
        loading: false,
        order: action.payload,
      });

    case GitAction.GetTransactions:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotTransactions:
      return Object.assign({}, state, {
        loading: false,
        transactions: action.payload,
      });

    case GitAction.GetTransactionStatus:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotTransactionStatus:
      return Object.assign({}, state, {
        loading: false,
        transactionStatus: action.payload,
      });

    case GitAction.updateTrackingNumber:
      return Object.assign({}, state, { loading: true });
    case GitAction.updatedTrackingNumber:
      return Object.assign({}, state, {
        loading: false,
        tracking: action.payload,
      });

    case GitAction.resetTracking:
      return Object.assign({}, state, { tracking: [] });



    ///////////////////////////////////////////////////  Merchant  ///////////////////////////////////////////////////

    case GitAction.GetMerchants:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotMerchants:
      return Object.assign({}, state, {
        loading: false,
        merchant: action.payload,
      });

    case GitAction.GetMerchantOrders:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotMerchantOrders:
      return Object.assign({}, state, {
        loading: false,
        merchantOrders: action.payload,
      });


    ///////////////////////////////////////////////////  Product  ///////////////////////////////////////////////////

    case GitAction.AddProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedProduct:
      return Object.assign({}, state, {
        loading: false,
        addResult: action.payload,
      });

    case GitAction.UpdateProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProduct:
      return Object.assign({}, state, {
        returnUpdateProduct: action.payload,
        loading: false
      });
    case GitAction.ResetUpdateProduct:
      return Object.assign({}, state, { returnUpdateProduct: [] });

    case GitAction.DeleteProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.DeletedProduct:
      return Object.assign({}, state, {
        loading: false,
        productMgmtResult: action.payload,
      });

    case GitAction.GetProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProduct:
      return Object.assign({}, state, {
        loading: false,
        products: action.payload,
      });
    case GitAction.ResetProductDetails:
      return Object.assign({}, state, { productsByID: [] });
    case GitAction.ResetProductManagementValue:
      return Object.assign({}, state, { productMgmtResult: [] });


    case GitAction.GetProductListing:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductListing:
      return Object.assign({}, state, {
        loading: false,
        productsListing: action.payload,
      });

    case GitAction.EndorseProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.ProductEndorsed:
      return Object.assign({}, state, {
        loading: false,
        endorsedProduct: action.payload,
      });
    case GitAction.ResetProductEndorse:
      return Object.assign({}, state, { endorsedProduct: [] });

    case GitAction.CheckProduct:
      return Object.assign({}, state, { loading: true });
    case GitAction.ProductChecked:
      return Object.assign({}, state, {
        loading: false,
        exists: action.payload,
      });

    case GitAction.GetProductDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductDetail:
      return Object.assign({}, state, {
        loading: false,
        productsByID: action.payload,
      });

    ///////////////////////////////////////////////////  Product Variation  ///////////////////////////////////////////////////

    case GitAction.AddProductVariation:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedProductVariation:
      return Object.assign({}, state, {
        loading: false,
      });

    case GitAction.UpdateProductVariation:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProductVariation:
      return Object.assign({}, state, {
        loading: false,
      });

    case GitAction.DeleteProductVariation:
      return Object.assign({}, state, { loading: true });
    case GitAction.DeletedProductVariation:
      return Object.assign({}, state, {
        loading: false,
      });

    case GitAction.GetProductVariationByCategoryID:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductVariationByCategoryID:
      return Object.assign({}, state, {
        loading: false,
        variations: action.payload,
      });

    ///////////////////////////////////////////////////  Product Variation Details  ///////////////////////////////////////////////////

    case GitAction.AddProductVariationDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedProductVariationDetail:
      return Object.assign({}, state, {
        loading: false,
        addProductVariationResult: action.payload,
      });
    case GitAction.ResetProductVariationDetailResult:
      return Object.assign({}, state, {
        loading: false,
        addProductVariationResult: []
      });

    case GitAction.UpdateProductVariationDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProductVariationDetail:
      return Object.assign({}, state, {
        loading: false,
        variationResult: action.payload,
      });
    case GitAction.ResetUpdateProductVariationDetailResult:
      return Object.assign({}, state, {
        loading: false,
        variationResult: []
      });

    case GitAction.DeleteProductVariationDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.DeletedProductVariationDetail:
      return Object.assign({}, state, {
        loading: false,
        variationResult: action.payload,
      });

    ///////////////////////////////////////////////////  Product Stock  ///////////////////////////////////////////////////

    case GitAction.UpdateProductVariationStock:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProductVariationStock:
      return Object.assign({}, state, {
        loading: false,
        variationStock: action.payload,
        productsByID: action.payloadProduct
      });

    ///////////////////////////////////////////////////  Product Specification  ///////////////////////////////////////////////////

    case GitAction.AddProductSpecsDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedProductSpecsDetail:
      return Object.assign({}, state, {
        loading: false,
        productSpecsDetail: action.payload,
      });
    case GitAction.ResetProductSpecsDetailResult:
      return Object.assign({}, state, {
        loading: false,
        productSpecsDetail: [],
      });

    case GitAction.UpdateProductSpecsDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProductSpecsDetail:
      return Object.assign({}, state, {
        loading: false,
        SpecsDetail: action.payload,
      });
    case GitAction.ResetUpdateProductSpecsDetailResult:
      return Object.assign({}, state, {
        loading: false,
        SpecsDetail: [],
      });

    case GitAction.DeleteProductSpecsDetail:
      return Object.assign({}, state, { loading: true });
    case GitAction.DeletedProductSpecsDetail:
      return Object.assign({}, state, {
        loading: false,
        deleteproductSpecsDetail: action.payload,
      });


    ///////////////////////////////////////////////////  Product Media  ///////////////////////////////////////////////////

    case GitAction.AddProductMedia:
      return Object.assign({}, state, { loading: true });
    case GitAction.ProductMediaAdded:
      return Object.assign({}, state, {
        loading: false,
        productMediaResult: action.payload,
      });

    case GitAction.deleteProductMedia:
      return Object.assign({}, state, { loading: true });
    case GitAction.deletedProductMedia:
      return Object.assign({}, state, {
        loading: false,
        productMediaResult: action.payload,
      });


    case GitAction.ResetProductMediaReturnVal:
      return Object.assign({}, state, {
        loading: false,
        productMediaResult: []
      });

    ///////////////////////////////////////////////////  Product Category  ///////////////////////////////////////////////////

    case GitAction.AddProductCategory:
      return Object.assign({}, state, { loading: true });
    case GitAction.AddedProductCategory:
      return Object.assign({}, state, {
        loading: false,
        categories: action.payload,
      });

    case GitAction.UpdateProductCategory:
      return Object.assign({}, state, { loading: true });
    case GitAction.UpdatedProductCategory:
      return Object.assign({}, state, {
        loading: false,
        categories: action.payload,
      });

    case GitAction.DeleteProductCategory:
      return Object.assign({}, state, { loading: true });
    case GitAction.DeletedProductCategory:
      return Object.assign({}, state, {
        loading: false,
        categories: action.payload,
      });

    case GitAction.GetProductCategory:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductCategory:
      return Object.assign({}, state, {
        loading: false,
        categories: action.payload,
      });

    case GitAction.GetProductCategoryListing:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductCategoryListing:
      return Object.assign({}, state, {
        loading: false,
        productCategories: action.payload,
      });


    ///////////////////////////////////////////////////  Product Review  ///////////////////////////////////////////////////

    case GitAction.GetProductReviewByProductID:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotProductReviewByProductID:
      return Object.assign({}, state, {
        loading: false,
        reviews: action.payload,
      });


    case GitAction.addProductReview:
      return Object.assign({}, state, { loading: true });
    case GitAction.addedProductReview:
      return Object.assign({}, state, {
        loading: false,
        reviews: action.payload,
        reviewReturn: action.payload2
      });

    ///////////////////////////////////////////////////  General  ///////////////////////////////////////////////////

    case GitAction.GetCountry:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotCountry:
      return Object.assign({}, state, {
        loading: false,
        countries: action.payload,
      });

    case GitAction.GetCourierService:
      return Object.assign({}, state, { loading: true });
    case GitAction.GotCourierService:
      return Object.assign({}, state, {
        loading: false,
        logistic: action.payload,
      });

    /////////////////////////////////////////////////// Default ///////////////////////////////////////////////////
    default:
      return state;
  }
}
