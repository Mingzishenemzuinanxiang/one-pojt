import { HttpRequest } from "../utils/http";
let Doctor = {
    // 关注医生
    followDoctor: function(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "API地址",
            data: datas
        });
    },
    // 获取评价标签
    getElvaluateTag: function(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "API地址",
            data: datas
        });
    }
};
export { Doctor };