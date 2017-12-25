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
    var id=data.get_id;
    //页面层
layer.open({
    type: 1,
    skin: 'layui-layer-rim', //加上边框
    area: ['600px', '340px'], //宽高
    content: id,
    title: '快递详细信息'
  });
}
var data=[
    {
        "get_id": 1,
        "order_num": 1,
        "start_address": null,
        "start_name": "12",
        "start_phone": 12,
        "start_idcard": null,
        "end_address": "12",
        "end_name": "12",
        "end_phone": 12,
        "storage_id": 12,
        "created_time": "2017-12-10",
        "get_time": null,
        "get_status": null,
        "com_id": 1
    },
    {
        "get_id": 3,
        "order_num": 123,
        "start_address": "12",
        "start_name": "12345",
        "start_phone": 123456,
        "start_idcard": "12345678",
        "end_address": "12",
        "end_name": "123",
        "end_phone": 1234,
        "storage_id": 0,
        "created_time": "2017-12-24",
        "get_time": null,
        "get_status": 0,
        "com_id": 1
    }
]


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