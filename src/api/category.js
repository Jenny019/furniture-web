import request from '@/utils/request'
import CODE from "@/utils/common"
const url = 'http://120.79.99.73:8081'

export function categoryLevelTwoListByPage() {
  return request({
    url: CODE.apiUrl() +'/category/categoryLevelTwoListByPage',//查询分类 query classification
    method: 'get'
  })
}

export function categoryLevelTwoAdd(data) {
  return request({
    url: CODE.apiUrl() +'/category/categoryLevelTwoAdd',//添加分类 add classification
    method: 'post',
    data
  })
}
export function updateCategoryLevelTwo(data) {
  return request({
    url: CODE.apiUrl() +'/category/updateCategoryLevelTwo',//编辑分类 edit classification
    method: 'post',
    data
  })
}
export function categoryLevelThreeAdd(data) {
  return request({
    url: CODE.apiUrl() +'/category/categoryLevelThreeAdd',//添加系列
    method: 'post',
    data
  })
}
export function updateCategoryLevelThree(data) {
  return request({
    url: CODE.apiUrl() +'/category/updateCategoryLevelThree',//编辑系列
    method: 'post',
    data
  })
}
export function deleteCategoryLevelTwo(data) {
  return request({
    url: CODE.apiUrl() +'/category/deleteCategoryLevelTwo',//添加分类
    method: 'post',
    params:data
  })
}
export function deleteCategoryLevelThree(data) {
  return request({
    url: CODE.apiUrl() +'/category/deleteCategoryLevelThree',//添加分类
    method: 'post',
    params:data
  })
}
