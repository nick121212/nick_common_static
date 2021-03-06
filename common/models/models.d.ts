/**
 * Created by NICK on 15/10/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


declare module Common {
    interface BaseData {
        updateAt:string;
        createAt:string;
        copyData(data:any);
    }

    interface ClientData<T> {
        total:number;
        datas:Array<T>;
    }

    interface QueryBase {
        page:number;
        pageCount:number;
        order:string;
    }
}
declare module Moemash {
    interface PictureModel extends Common.BaseData {
        picId:number;
        imageKey:string;
        pkCount:number;
        score:number;
        totalScore:number;
        fightDays:number;
        rank:number;
        streak:number;
        creator:Passport.UserModel;
    }
    interface PictureReviewModel extends Common.BaseData {
        accessPics:Array<Moemash.PictureModel>;
        deletePics:Array<Moemash.PictureModel>;
    }
    interface UserPicQuery extends Common.QueryBase {
        type:number;
    }
}
declare module Passport {
    interface LoginModel extends Common.BaseData {
        username:string;
        password:string;
        expireIn:boolean;
    }
    interface RegisterModel extends Common.BaseData {
        username:string;
        password:string;
        passwordAgain:string;
        smsToken:string;
    }
    interface UserModel extends Common.BaseData {
        username:string;
        nickname:string;
        avatarUrl:string;
        mobile:string;
        email:string;
        userToken:string;
    }
    interface ForgetModel extends RegisterModel {
        user_token:string;
    }
    interface EditPasswordModel {
        oldPassword:string;
        password:string;
        passwordAgain:string;
    }
    interface BindModel extends UserModel {
        smsToken:string;
    }
}


declare module Dashboard {

    interface BasListQuery extends Common.QueryBase {
        baId:number;
        title:string;
    }

    interface BasModel {
        //同好会id
        baId:number;
        //同好会title
        title:string;
        //简介
        intro:string;
        //会标
        avatarUrl:string;
        //背景
        backgroundUrl:string;
        //主题色
        theme:string;
        //状态 1:通过 2:不通过
        status:number;
        //是否被用户删除
        isDeleted:boolean;
        //创建时间
        createAt:string;
        //更新时间
        updateAt:string;
        //审核通过人信息
        admin:Passport.UserModel;
        //创建者信息
        creator:Passport.UserModel;
        //吧主信息
        bazhus:Array<Passport.UserModel>;
        limit:number;
    }

    interface BasRecommendModel extends Common.BaseData {
        recommendId:number;
        basData:Dashboard.BasModel;
        status:number;
    }

    interface PostListQuery extends Common.QueryBase {
        postId:number;
        baId:number;
        userToken:string;
    }
    /*
     * 帖子链接数据
     * */
    interface PostLinkModel {
        linkId:number;
        postId:number;
        contentType:number;
        title:string;
        url:string;
        toPostId:number;
        toBaId:number;
        toUserToken:string;
    }

    /*
     * 帖子数据
     * */
    interface PostModel extends Common.BaseData {
        postId:number;
        title:string;
        content:string;
        pictures:string[];
        platform:string;
        isDeleted:boolean;
        clientVersion:string;
        clientChannel:string;
        location:string;
        deviceTitle:string;
        status:number;
        ip:string;
        postLinks:Array<Dashboard.PostLinkModel>;
        url:string;
        creator:Passport.UserModel;
        admin:Passport.UserModel;
        editor:Passport.UserModel;
        basData:Dashboard.BasModel;
    }

    /*
     * 举报数据
     * */
    interface ReportModel extends Common.BaseData {
        reportId:number;
        reportType:string;
        postType:number;
        reportContent:string;
        nickname:string;
        status:boolean;
        replyData:Dashboard.PostModel;
        postData:Dashboard.PostModel;
        BasData:Dashboard.BasModel;
        admin:Passport.UserModel;
    }

    interface ReportDealModel extends Common.BaseData {
        reportData:Dashboard.ReportModel;
        nickname:string;
        status:number;
    }
    interface JumpModel extends Common.BaseData {
        key:string;
        label:string;
        weixinIosUrl:string;
        weixinIosCount:number;
        weixinAndroidUrl:string;
        weixinAndroidCount:number;
        appStoreUrl:string;
        appStoreCount:number;
        apkUrl:string;
        apkCount:number;
        defaultUrl:string;
        defaultCount:number;
    }
    interface TopPictureModel extends Common.BaseData {
        picId:number;
        imageKey:string;
        contentType:number;
        intro:string;
        title:string;
        url:string;
        toPostId:number;
        toBaId:number;
        toUserToken:string;
        position:number;
        status:number;
        creator:Passport.UserModel;
    }
    interface ForumModel extends Common.BaseData {
        forumId:number;
        title:string;
        intro:string;
        pictures:Array<string>;
        url:string;
        status:number;
        creator:Passport.UserModel;
        editor:Passport.UserModel;
    }

    interface NoticeModel extends Common.BaseData {
        noticeId:number;
        content:string;
        creator:Passport.UserModel;
        editor:Passport.UserModel;
        theme:string;
        tag:string;
        url:string;
    }

    interface BasApplyListModel extends Common.BaseData {
        applyId:number;
        status:number;
        intro:string;
        message:string;
        isSendNotice:boolean;
        basData:Dashboard.BasModel;
    }

    interface BasApplyModel extends Common.BaseData {
        applyId:number;
        status:number;
        nickname:string;
        message:string;
        isSendNotice:boolean;
    }
}

declare module Shiji {
    interface TimeModel {
        time:string;
        imageKey:string;
    }
}