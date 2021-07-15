import request from './network'

export function register(data){
  return request({
    url:'/users/register',
    method:'post',
    data
  })
}

export function verified(data){
  return request({
    url:'/users/realname',
    method:'post',
    data
  })
}

export function updateInfo(data){
  return request({
    url:'/users/update',
    method:'post',
    data
  })
}

export function applyLandlord(data,user_name){
  return request({
    url:'/users/new/landlord'+'/'+user_name,
    method:'get',
    data
  })
}

export function login(data){
  return request({
    url:'/users/login',
    method:'post',
    data
  })
}

export function getUserInfo(data,user_name){
  return request({
    url:'/users'+'/'+user_name,
    method:'get',
    data
  })
}

export function addHomestays(data){
  return request({
    url:'/homestays/add',
    method:'post',
    data
  })
}

export function getAllHomestays(data,order){
  return request({
    url:'/homestays/all'+'/'+'/'+order,
    method:'get',
    data
  })
}

export function filterHomestays(data,order){
  return request({
    url:'/homestays/filter'+'/'+order,
    method:'get',
    data
  })
}

export function getHomestays(data,user_name){
  return request({
    url:'/homestays/bylandlord'+'/'+user_name,
    method:'get',
    data
  })
}

export function changeHomestayInfo(data){
  return request({
    url:'/homestays/update',
    method:'post',
    data
  })
}

export function changeHomestayStatus(data,homestay_id,status){
  return request({
    url:'/homestays/changestatus'+'/'+homestay_id+'/'+status,
    method:'post',
    data
  })
}

export function addFavor(data,user_name,homestay_id){
  return request({
    url:'/homestays/addfavor'+'/'+user_name+'/'+homestay_id,
    method:'post',
    data
  })
}

export function delFavor(data,user_name,homestay_id){
  return request({
    url:'/homestays/delfavor'+'/'+user_name+'/'+homestay_id,
    method:'post',
    data
  })
}

export function getUserFavor(data,user_name){
  return request({
    url:'/homestays/favor'+'/'+user_name,
    method:'get',
    data
  })
}

export function sendSessions(data){
  return request({
    url:'/sessions/send',
    method:'post',
    data
  })
}

export function getRecvSessions(data,user_name,status){
  return request({
    url:'/sessions/recv'+'/'+user_name+'/'+status,
    method:'get',
    data
  })
}

export function getSendSessions(data,user_name){
  return request({
    url:'/sessions/send'+'/'+user_name,
    method:'get',
    data
  })
}

export function setSessionread(data,session_id){
  return request({
    url:'/homestays/readed'+'/'+session_id,
    method:'post',
    data
  })
}

export function addOrder(data){
  return request({
    url:'/orders/add',
    method:'post',
    data
  })
}

export function payOrder(data,order_id){
  return request({
    url:'/orders/pay'+'/'+order_id,
    method:'post',
    data
  })
}

export function getOrderById(data,order_id){
  return request({
    url:'/orders'+'/'+order_id,
    method:'get',
    data
  })
}

export function delOrderById(data,order_id){
  return request({
    url:'/orders'+'/'+order_id,
    method:'del',
    data
  })
}

export function getAllOrders(data,user_name){
  return request({
    url:'/orders/user'+'/'+user_name,
    method:'get',
    data
  })
}

export function addCommments(data){
  return request({
    url:'/comments/add',
    method:'post',
    data
  })
}

export function getAllCommments(){
  return request({
    url:'/comments/all',
    method:'get'
  })
}

export function changeCommentStatus(data,order){
  return request({
    url:'/comments/changestatus'+'/'+order_id,
    method:'post',
    data
  })
}

export function changeUserCredit(data,user_name,credit){
  return request({
    url:'/users/credit'+'/'+user_name+'/'+credit,
    method:'post',
    data
  })
}

export function changeLandloadInfo(data){
  return request({
    url:'/users/updata/landlord',
    method:'post',
    data
  })
}

