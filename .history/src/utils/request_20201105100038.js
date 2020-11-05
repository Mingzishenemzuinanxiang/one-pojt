import { HttpRequest } from "../utils/http";
let Api = {
    // 关注医生
    followDoctor(datas) {
        return HttpRequest.getRequest({
            method: "POST",
            url: "API地址",
            data: datas
        });
    },
    // 获取评价标签
    getElvaluateTag(datas) {
        return HttpRequest.getRequest({
            method: "GET",
            url: "API地址",
            data: datas
        });
    }
};
export { Api };