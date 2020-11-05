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
    },

    getAllarticleList() {
        return HttpRequest.getRequest({
            method: "GET",
            url: "article/allArticle",
            // data: 
        });
    },
    // this.$get("article/allArticle").then((res) => {
    //     if (res.code === 200) {
    //       this.tabelData = res.data;
    //       this.tabelData.map((item) => {
    //         item.star = parseInt(item.star);
    //         item.date = toTime(item.date);
    //       });
    //     }
    //   });
};
export { Api };