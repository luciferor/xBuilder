const _root = 'https://aapi.dsnbc.com/';
const _url = {
  /**接口集群*/
  app_login: `${_root}author`,//登录获取session_key|openid
  app_update_userinfo: `${_root}updateinfo`,//登录更新用户表信息
  app_get_article_detail: `${_root}getarticledetailsapi`,//获取文章内容
  app_get_article_list: `${_root}getarticlelistsapi`,//获取文章列表
  app_get_article_rand_list: `${_root}getarticlerandlistsapi`,//获取随机文章列表
  app_get_article_class: `${_root}getarticleclassapi`,//获取分类
  app_get_article_of_class:`${_root}getclassofarticleapi`,//获取分类下面文章列表
  app_get_swiper_api:`${_root}getswiperapi`,//获取幻灯片列表
  app_search_article_api:`${_root}searcharticleapi`,//搜索文章
  app_get_config_api:`${_root}getminiproconfigapi`,//获取配置信息
  app_binding_phone_api:`${_root}bindphoneapi`,//绑定手机号
  app_collect_article_api:`${_root}collectsarticleapi`,//收藏文章
  app_zans_article_api:`${_root}zansarticleapi`,//点赞文章
  app_get_collect_article:`${_root}getcollectsarticleapi`,//获取收藏过的文章
  app_share_data_api:`${_root}sharedataapi`,//分享关系确定
  app_get_vip_api:`${_root}getvipdataapi`,//看广告获取vip
  app_comment_article_api:`${_root}commentarticleapi`,//评论文章
  app_get_comment_api:`${_root}getcommentapi`,//获取评论
  app_get_rank_users_api:`${_root}getusersrankapi`,//获取用户排行榜
  app_subscribe_api:`${_root}subscribeminiproapi`,//订阅小程序消息
  app_medias_data_api:`${_root}getmediasapi`,//获取媒体
  app_music_data_api:`${_root}musicapi`,//搜索音乐|获取音乐播放链接
  app_qrcode_api:`${_root}qrcodeapi`,//获取小程序二维码
  app_oss_api:`${_root}ossapi`,//上传图片
  app_content_api:`${_root}getsafetextapi`,//检测文本是否合规
  app_new_update_notepad_api:`${_root}newupdatenotepadapi`,//新增或编辑日记
  app_get_notepad_list_api:`${_root}getnotepadapi`,//获取日记列表
  app_get_notepad_detail_api:`${_root}getnotepaddetailapi`,//获取日记内容
}
module.exports = {
  url:_url
}