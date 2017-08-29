




module.exports=[
   {
        path:"home",
        breadcrumbName:"首页",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb (null,require("./Home").default);
            })
        },childRoutes:[
            {
                path:":id/edit",
                breadcrumbName:"编辑",
                getComponents:(a,cb)=>{
                    require.ensure([],require=>{
                       cb(null,require("./Home/edit").default);
                    });
                }
            },{
                path:"add",
                breadcrumbName:"新建",
                getComponents:(a,cb)=>{
                    require.ensure([],require=>{
                        cb(null,require("./Home/edit").default);
                    });
                }
            },{
                path:":id/detail",
                breadcrumbName:"详情",
                getComponents:(a,cb)=>{
                    require.ensure([],require=>{
                        cb(null,require("./Home/edit").default);
                    });
                }
            }
        ]
    },{
        path:"dashboard",
        breadcrumbName:"任务管理",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb(null,require("./Dashboard").default);
            });
        }
    },{
        path:"form",
        breadcrumbName:"表单控件",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb(null,require("./Form").default);
            });
        }
    },{
        path:"display",
        breadcrumbName:"数据显示",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb(null,require("./Display").default);
            });
        }
    },{
        path:"feedback",
        breadcrumbName:"反馈",
        getComponents:(a,cb)=>{
            require.ensure([],require=>{
                cb(null,require("./Feedback").default);
            });
        }
    },
]