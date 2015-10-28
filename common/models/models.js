define(["require", "exports", 'common/base_data', 'common/client_data', 'common/query_base', 'dashboard/bas_apply_list_model', 'dashboard/bas_apply_model', 'dashboard/bas_list_query', 'dashboard/bas_model', 'dashboard/bas_recommend_model', 'dashboard/forum_model', 'dashboard/jump_model', 'dashboard/notice_model', 'dashboard/post_link_model', 'dashboard/post_list_query', 'dashboard/post_model', 'dashboard/report_deal_model', 'dashboard/report_list_query', 'dashboard/report_model', 'dashboard/top_picture_model', 'moemash/picture_model', 'moemash/picture_review_model', 'moemash/user_pic_query', 'passport/Login_model', 'passport/bind_model', 'passport/edit_password_model', 'passport/forget_model', 'passport/register_model', 'passport/user_model', 'shiji/time_model'], function (require, exports, base_data, client_data, query_base, bas_apply_list_model, bas_apply_model, bas_list_query, bas_model, bas_recommend_model, forum_model, jump_model, notice_model, post_link_model, post_list_query, post_model, report_deal_model, report_list_query, report_model, top_picture_model, picture_model, picture_review_model, user_pic_query, Login_model, bind_model, edit_password_model, forget_model, register_model, user_model, time_model) {
    exports.models = {
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
        TimeModel: time_model.Shiji.TimeModel
    };
});
//# sourceMappingURL=models.js.map