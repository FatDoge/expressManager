function addItem(){
    //捕获页

layer.open({
    type: 1,
    shade: false,
    area: ['95%', '95%'],
    title: false, //不显示标题
    content: $('#formOutterWrapper') //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响

  });
}
function detail(data){
    //页面层
layer.open({
    type: 1,
    skin: 'layui-layer-rim', //加上边框
    area: ['600px', '340px'], //宽高
    content: $("#info").html(),
    title: '快递详细信息'
  });
}
var data = [{
    "id": 10000,
    "username": "user-0",
    "sex": "女",
    "city": "城市-0",
    "sign": "签名-0",
    "experience": 255,
    "score": 57
}, {
    "id": 10001,
    "username": "user-1",
    "sex": "男",
    "city": "城市-1",
    "sign": "签名-1",
    "experience": 884,
    "score": 27
}, {
    "id": 10002,
    "username": "user-2",
    "sex": "女",
    "city": "城市-2",
    "sign": "签名-2",
    "experience": 650,
    "score": 31
}, {
    "id": 10003,
    "username": "user-3",
    "sex": "女",
    "city": "城市-3",
    "sign": "签名-3",
    "experience": 362,
    "score": 68
}, {
    "id": 10004,
    "username": "user-4",
    "sex": "男",
    "city": "城市-4",
    "sign": "签名-4",
    "experience": 807,
    "score": 6
}, {
    "id": 10005,
    "username": "user-5",
    "sex": "女",
    "city": "城市-5",
    "sign": "签名-5",
    "experience": 173,
    "score": 87
}, {
    "id": 10006,
    "username": "user-6",
    "sex": "女",
    "city": "城市-6",
    "sign": "签名-6",
    "experience": 982,
    "score": 34
}, {
    "id": 10007,
    "username": "user-7",
    "sex": "男",
    "city": "城市-7",
    "sign": "签名-7",
    "experience": 727,
    "score": 28
}, {
    "id": 10008,
    "username": "user-8",
    "sex": "男",
    "city": "城市-8",
    "sign": "签名-8",
    "experience": 951,
    "score": 14
}, {
    "id": 10009,
    "username": "user-9",
    "sex": "女",
    "city": "城市-9",
    "sign": "签名-9",
    "experience": 484,
    "score": 75
}, {
    "id": 10010,
    "username": "user-10",
    "sex": "女",
    "city": "城市-10",
    "sign": "签名-10",
    "experience": 1016,
    "score": 34
}, {
    "id": 10011,
    "username": "user-11",
    "sex": "女",
    "city": "城市-11",
    "sign": "签名-11",
    "experience": 492,
    "score": 6
}, {
    "id": 10012,
    "username": "user-12",
    "sex": "女",
    "city": "城市-12",
    "sign": "签名-12",
    "experience": 106,
    "score": 54
}, {
    "id": 10013,
    "username": "user-13",
    "sex": "男",
    "city": "城市-13",
    "sign": "签名-13",
    "experience": 1047,
    "score": 63
}, {
    "id": 10014,
    "username": "user-14",
    "sex": "男",
    "city": "城市-14",
    "sign": "签名-14",
    "experience": 873,
    "score": 8
}, {
    "id": 10015,
    "username": "user-15",
    "sex": "女",
    "city": "城市-15",
    "sign": "签名-15",
    "experience": 1068,
    "score": 28
}, {
    "id": 10016,
    "username": "user-16",
    "sex": "女",
    "city": "城市-16",
    "sign": "签名-16",
    "experience": 862,
    "score": 86
}, {
    "id": 10017,
    "username": "user-17",
    "sex": "女",
    "city": "城市-17",
    "sign": "签名-17",
    "experience": 1060,
    "score": 69
}, {
    "id": 10018,
    "username": "user-18",
    "sex": "女",
    "city": "城市-18",
    "sign": "签名-18",
    "experience": 866,
    "score": 74
}, {
    "id": 10019,
    "username": "user-19",
    "sex": "女",
    "city": "城市-19",
    "sign": "签名-19",
    "experience": 682,
    "score": 51
}, {
    "id": 10020,
    "username": "user-20",
    "sex": "男",
    "city": "城市-20",
    "sign": "签名-20",
    "experience": 770,
    "score": 87
}, {
    "id": 10021,
    "username": "user-21",
    "sex": "男",
    "city": "城市-21",
    "sign": "签名-21",
    "experience": 184,
    "score": 99
}, {
    "id": 10022,
    "username": "user-22",
    "sex": "男",
    "city": "城市-22",
    "sign": "签名-22",
    "experience": 739,
    "score": 18
}, {
    "id": 10023,
    "username": "user-23",
    "sex": "女",
    "city": "城市-23",
    "sign": "签名-23",
    "experience": 127,
    "score": 30
}, {
    "id": 10024,
    "username": "user-24",
    "sex": "女",
    "city": "城市-24",
    "sign": "签名-24",
    "experience": 212,
    "score": 76
}, {
    "id": 10025,
    "username": "user-25",
    "sex": "女",
    "city": "城市-25",
    "sign": "签名-25",
    "experience": 938,
    "score": 69
}, {
    "id": 10026,
    "username": "user-26",
    "sex": "男",
    "city": "城市-26",
    "sign": "签名-26",
    "experience": 978,
    "score": 65
}, {
    "id": 10027,
    "username": "user-27",
    "sex": "女",
    "city": "城市-27",
    "sign": "签名-27",
    "experience": 371,
    "score": 60
}, {
    "id": 10028,
    "username": "user-28",
    "sex": "女",
    "city": "城市-28",
    "sign": "签名-28",
    "experience": 977,
    "score": 37
}, {
    "id": 10029,
    "username": "user-29",
    "sex": "男",
    "city": "城市-29",
    "sign": "签名-29",
    "experience": 647,
    "score": 27
}];
var app=new Vue({
    el:'#app',
    methods:{
        getNickname:function(){
            var nickname=localStorage.getItem('nickname');
            if(nickname)return nickname;
            return 'admin';
        }
    }
    ,data:{
        username:'admin'
    }
});