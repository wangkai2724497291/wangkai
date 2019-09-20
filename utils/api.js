import config from 'config.js'
var domain = config.getDomain;
var imgdomain = config.getImageDomain;
module.exports = {
  getDomain: function () {
    return domain
  },
  getImageDomain: function () {
    return imgdomain
  },
  //获取token
  getToken:function(){
    return domain + "/mini_user/index/login";
  },
  //获取电话号码的接口
  getWxPhone: function () {
    return domain + "/small_store/Assembly/getWxPhone";
  },
  //用户绑定微信手机[默认注册]
  wxRegister: function () {
    return domain + "/mini_user/wx_user/wx_register";
  },
  //测试
  test:function(){
    return domain + "/mini_user/index/test";
  },
  //首页轮播图
  getBanners: function() {
    return domain + "/mini_user/banner/get_banner";
  },
<<<<<<< HEAD
=======
  //补差价
  difference:function(){
    return domain + "/mini_user/order/mini_price_diff";
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  //获取短信验证码
  getSmsCode: function() {
    return domain + "/mini_user/wx_user/sms_code";
  },
  //获取图形数字验证接口
  getCode: function () {
    return domain + "/mini_user/wx_user/img_code";
  },
  //推荐注册
  register: function () {
    return domain + "/mini_user/wx_user/register";
  },
<<<<<<< HEAD
=======
  //二维码   
  code: function () {
    // return domain + "/mini_user/master/getMasterCardInfo";
    return domain + "/mini_user/master/getMasterCardInfo?uid=237&store=UN674t1LO2gOXhfH2k91PS9AFF+b8jyHUIK6n1teal2ffU/9uIKO8wClp3zu5H3a7PQcxlZxySX10Nun1YVLQCn4nLeTi76WnR+/GCMW04RdWjswO4LQhDKpmfs+BzOB";
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  //获取一级分类
  selectServiceGroup: function () {
    return domain + "/mini_user/service/select_service_group";
  },
  //获取顶级服务类对应热门服务 或者 所有子服务
  selectServiceCategory: function () {
    return domain + "/mini_user/service/select_service_category";
  },
<<<<<<< HEAD
  //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
  selectServiceProduct: function () {
=======
  selectseccategory: function () {
    return domain + "/mini_user/service/select_sec_category";
  },
  //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
  selectServiceProduct1: function () {
    return domain + "/mini_user/service/select_sec_product";
  },
   selectServiceProduct: function () {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    return domain + "/mini_user/service/select_service_product";
  },
  // 查询热门标签
  hotSearch: function() {
    return domain + "/mini_user/service/select_label"
  },
  // 获取服务类下的某产品信息获取服务类下的某产品信息[规格类型等]
  getProduct: function () {
    return domain + "/mini_user/service/select_service_product_info"
  },
  //查询某服务类对应的子服务(产品)评论
  productComment: function () {
    return domain + "/mini_user/comment/product_Comment"
  },
  // 判断用户某产品是否收藏
  isCollect: function () {
    return domain + "/mini_user/service/is_no_colection"
  },
  // 添加收藏
  addCollect: function () {
    return domain + "/mini_user/collection/add_colection"
  },
  // 删除收藏
  delectCollect: function () {
    return domain + "/mini_user/collection/delect_coleciton"
  },
  // 获取客服电话
  systel: function () {
    return domain + "/mini_user/system/systel"
  },
  // 添加浏览次数
  addSeeTimes: function () {
    return domain + "/mini_user/service/add_see_times"
  },
  // 查询用户信息
  userinfo: function () {
    return domain + "/mini_user/wx_user/select_userinfo"
  },
  // 交易流水 个人财务记录表
  traceLog: function () {
    return domain + "/mini_user/finance/select_my_finance"
  },
  // 获取用户银行卡列表
  userBankList: function () {
    return domain + "/mini_user/cash/get_user_bank_list"
  },
  // 查询个人优惠券
  getCoupon: function () {
    return domain + "/mini_user/coupon/selct_coupon"
  },
  // 查询收藏
  getCollection: function () {
    return domain + "/mini_user/collection/select_colection"
  },
  // 获取通用银行卡列表
  getBankList: function () {
    return domain + "/mini_user/cash/get_bank_list"
  },
  // 添加银行卡
  addBank: function () {
    return domain + "/mini_user/cash/add_bank_info"
  },
  // 客户端提现
  getCash: function () {
    return domain + "/mini_user/cash/add_user_cash"
  },
  // 客户端检索对应产品可以使用的地址
  addressList: function () {
    return domain + "/mini_user/address/order_address_list"
  },
  // 删除某条地址
  deleteAddr: function () {
    return domain + "/mini_user/address/delect_address"
  },
  // 新增用户地址or更新用户地址
  addAddr: function () {
    return domain + "/mini_user/address/new_address"
  },
  // 获取产品的sku
  getProductSku: function () {
    return domain + "/mini_user/service/get_product_sku"
  },
  // 用户下单
  submitOrder: function () {
    return domain + "/mini_user/order/submit_order"
  },
<<<<<<< HEAD
=======
  // 用户扫码下单
  ScanVerIfiCation: function () {
    return domain + "/mini_user/order/ScanVerIfiCation"
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  // 上传图片
  uploadFile: function () {
    return domain + "/mini_user/wx_user/file_up"
  },
  // 查询该用户所有订单或者某个状态的订单
  getOrders: function () {
    return domain + "/mini_user/order/select_order"
  },
  // 获取formid插入数据库
  getFormId: function () {
    return domain + "/mini_user/wxform/get_form_id"
  },
  // 根据订单id查询订单详情
  getOrder: function () {
    return domain + "/mini_user/order/get_order_info"
  },
  // 根据订单查询评论
  getOrderComment: function () {
    return domain + "/mini_user/comment/get_order_comment"
  },
  // 小程序微信支付获取支付密钥
  getWxpay: function () {
    return domain + "/mini_user/user_pay/standards_get_wxpay"
  },
  // 用户添加评论
  addComment: function () {
    return domain + "/mini_user/comment/add_comment"
  },
  // 添加感谢费or添加差价
  payFee: function () {
    return domain + "/mini_user/user_pay/add_else_fee"
  },
  // 取消订单
  cancelOrder: function () {
    return domain + "/mini_user/order/cancel_order"
  },
<<<<<<< HEAD
=======
  // 将订单状态已上门
  confirmIndoor: function () {
    return domain + "/mini_user/order/serviceing"
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  // 订单状态更改为已完成
  sureOrder: function () {
    return domain + "/mini_user/order/sure_order"
  },
  // 搜索产品
  searchProduct: function () {
    return domain + "/mini_user/search/search_product"
  },
  // 查询上门费
  doorFee: function () {
    return domain + "/mini_user/order/select_door_fee"
  },
  // 根据优惠券码兑换优惠券
  exchangeCoupon: function () {
    return domain + "/mini_user/coupon/get_coupon"
  },
  // 用户在报价成功后。支付时-取消支付的时候调用该接口
  cancelPay: function () {
    return domain + "/mini_user/order/cancel_pay"
  },
  // 搜索城市接口
  searchCity: function () {
    return domain + "/mini_user/address/search_city"
  },
  // 查询提现提示信息
  getWithdrawTip: function () {
    return domain + "/mini_user/cash/get_cash_config"
  },
  // 已报价师傅列表
  getMasters: function () {
    return domain + "/mini_user/order/getMasterList"
  },
  // 确认雇佣师傅
  sureOrderOffer: function () {
    return domain + "/mini_user/order/sureOrderOffer"
  },
  // 个人中心申请推广码
  generalizationCode: function () {
    return domain + "/mini_user/wx_user/generalizationCode"
  },
  // 推广明细
  getPromotionList: function () {
    return domain + "/mini_user/wx_user/getPromotionList"
<<<<<<< HEAD
  }
=======
  },
  // 领券中心列表
  getCouponList: function () {
    return domain + "/mini_user/coupon/getCouponList"
  },
  // 通过优惠券id领取优惠券
  takeCoupon: function () {
    return domain + "/mini_user/coupon/tackCoupon"
  },
  // 付费优惠券购买
  buyCoupon: function () {
    return domain + "/mini_user/coupon/buyCoupon"
  },
  // 充值并获取支付参数
  userRechargeInit: function () {
    return domain + "/mini_user/wx_user/UserRechargeInit"
  },
  // 获取优惠券总值信息
  couponNewInfo: function () {
    return domain + "/mini_user/coupon/couponNewInfo"
  },
  // 马上领取
  rightGet: function () {
    return domain + "/mini_user/coupon/rightGet"
  },
  // 购物车-添加
  addToShopcart: function () {
    return domain + "/mini_user/cart/add"
  },
  // 购物车-获取
  getShopCart: function () {
    return domain + "/mini_user/cart/getList"
  },
  // 根据购物车返回的产品id，返回对应的可选地址
  shopCartAddr: function () {
    return domain + "/mini_user/cart/getCanUseAddress"
  },
  // 获取产品的[四，五]级标签
  productLabels: function () {
    return domain + "/mini_user/service/product_labels"
  },
  // 购物车查询数量
  cartNum: function () {
    return domain + "/mini_user/cart/cartNum"
  },
  // 购物车多选订单&提交
  submitShopcart: function () {
    return domain + "/mini_user/cart/submitOrder"
  },
  // 购物车下单支付
  shopcartPay: function () {
    return domain + "/mini_user/cart/blancePay"
  },
  // 删除选中的购物车中的商品
  deleteShopcarProd: function () {
    return domain + "/mini_user/cart/delete"
  },
  // 获取购物车优惠券
  getCarCoupon: function () {
    return domain + "/mini_user/cart/getCoupon"
  },
  // 判断有没有绑定父级
  hasBind: function () {
    return domain + "/mini_user/wx_user/hasBind"
  },
  // 获取小程序端推荐码
  getRememberNo: function () {
    return domain + "/mini_user/wx_user/getRememberNo"
  },
  // 绑定父级
  bindParent: function () {
    return domain + "/mini_user/wx_user/bindParent"
  },
  // 获取推荐服务产品
  recommenderProd: function () {
    return domain + "/mini_user/service/select_remember_product"
  },
  // 重新下单-new
  reloadOrder: function () {
    return domain + "/mini_user/cart/reloadOrder"
  },
  // 修改购物车的
  changeCart: function () {
    return domain + "/mini_user/cart/changeCart"
  },
  // 首页显示一级和二级分类信息
  category: function () {
    return domain + "/mini_user/index/index_fir_sec_cate"
  },
  // 首页清洗类产品展示
  cleanout: function () {
    return domain + "/mini_user/index/index_reco_clean_pro"
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
}