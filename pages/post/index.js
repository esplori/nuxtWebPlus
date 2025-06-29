import { baseUrl } from '@/utils/baseUrl.ts'

export const getListApi = `${baseUrl}/pages/getList/`
export const getDetailApi = `${baseUrl}/pages/getDetail/`
export const getRecommendPostBySameTagsApi = `${baseUrl}/pages/getRecommendBySameTags`
export const getListByCateApi = `${baseUrl}/pages/getListByCatePage`
export const getListByTagsApi = `${baseUrl}/pages/getListByTagsPage`
export const getRecomListApi = `${baseUrl}/pages/getRecomList/`
export const getCateApi = `${baseUrl}/pages/getCate`
export const getTagsApi = `${baseUrl}/pages/getTags`
export const getTopicListApi = `${baseUrl}/pages/getTopicList`
export const getSiteInfoApi = `${baseUrl}/pages/getBasicSiteInfo`
export const addCommentApi = `/portal-service/pages/addComment`
export const getCommentByPostIdApi = `/portal-service/pages/getCommentByPostId`