import base_data= require('common/base_data');
import client_data= require('common/client_data');
import query_base= require('common/query_base');
import bas_apply_list_model= require('dashboard/bas_apply_list_model');
import bas_apply_model= require('dashboard/bas_apply_model');
import bas_list_query= require('dashboard/bas_list_query');
import bas_model= require('dashboard/bas_model');
import bas_recommend_model= require('dashboard/bas_recommend_model');
import forum_model= require('dashboard/forum_model');
import jump_model= require('dashboard/jump_model');
import notice_model= require('dashboard/notice_model');
import post_link_model= require('dashboard/post_link_model');
import post_list_query= require('dashboard/post_list_query');
import post_model= require('dashboard/post_model');
import report_deal_model= require('dashboard/report_deal_model');
import report_list_query= require('dashboard/report_list_query');
import report_model= require('dashboard/report_model');
import top_picture_model= require('dashboard/top_picture_model');
import picture_model= require('moemash/picture_model');
import picture_review_model= require('moemash/picture_review_model');
import user_pic_query= require('moemash/user_pic_query');
import Login_model= require('passport/Login_model');
import bind_model= require('passport/bind_model');
import edit_password_model= require('passport/edit_password_model');
import forget_model= require('passport/forget_model');
import register_model= require('passport/register_model');
import user_model= require('passport/user_model');
import time_model= require('shiji/time_model');

export var models = {
    BaseData: base_data.Common.BaseData,
    ClientData: client_data.Common.ClientData,
    QueryBase: query_base.Common.QueryBase,
    BasApplyListModel: bas_apply_list_model.Dashboard.BasApplyListModel,
    BasApplyModel: bas_apply_model.Dashboard.BasApplyModel,
    BasListQuery: bas_list_query.Dashboard.BasListQuery,
    BasModel: bas_model.Dashboard.BasModel,
    BasRecommendModel: bas_recommend_model.Dashboard.BasRecommendModel,
    ForumModel: forum_model.Dashboard.ForumModel,
    JumpModel: jump_model.Dashboard.JumpModel,
    NoticeModel: notice_model.Dashboard.NoticeModel,
    PostLinkModel: post_link_model.Dashboard.PostLinkModel,
    PostListQuery: post_list_query.Dashboard.PostListQuery,
    PostModel: post_model.Dashboard.PostModel,
    ReportDealModel: report_deal_model.Dashboard.ReportDealModel,
    ReportListQuery: report_list_query.Dashboard.ReportListQuery,
    ReportModel: report_model.Dashboard.ReportModel,
    TopPictureModel: top_picture_model.Dashboard.TopPictureModel,
    PictureModel: picture_model.Moemash.PictureModel,
    PictureReviewModel: picture_review_model.Moemash.PictureReviewModel,
    UserPicQuery: user_pic_query.Moemash.UserPicQuery,
    LoginModel: Login_model.Passport.LoginModel,
    BindModel: bind_model.Passport.BindModel,
    EditPasswordModel: edit_password_model.Passport.EditPasswordModel,
    ForgetModel: forget_model.Passport.ForgetModel,
    RegisterModel: register_model.Passport.RegisterModel,
    UserModel: user_model.Passport.UserModel,
    TimeModel: time_model.Shiji.TimeModel,
};