// Vue.createApp({
//   data: function () {
//     return {
//         nameUser: "Stranger",
//         className: "VueJS 01"
//     };
//   },
// }).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      nameUser: "Stranger",
      className: "VueJS 01",
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      ImgName: "Lisa",
      ImgUrl:
        "https://vcdn1-giaitri.vnecdn.net/2020/11/03/lisa-6-1604394415.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=2uX86_Jm0qtPjfD7wkRD3w",
      linkInfo:
        "https://vnexpress.net/lisa-vung-danh-hieu-sao-dep-nhat-chau-a-4186468.html",
    };
  },
}).mount("#binding-attribute");
