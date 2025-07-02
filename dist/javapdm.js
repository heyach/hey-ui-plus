
window.javaPdm = {
  // 版本
  VERSION: '',
  DOMAIN_NAME: {
    PDM: 'PDM'
  },
  // 上传文件大小限制
  VUE_APP_FILE_SIZE: 100,
  // BOM结构筛选器key
  FILTER_KEY: 'bomFilterCondition',
  // 开启用户在文件夹中选择视图的记忆功能:用户在点击文件夹时会保留上次的视图选择
  USER_FOLDER_VIEW_MEMORY: true,
  // 高级搜索编码名称拼接符
  ADVANCED_SEARCH_CONCATENATOR: ',',
  // 启用使用编码名称拼接符来进行高级搜索
  OPEN_ADVANCED_SEARCH_CONCATENATOR: false,
  // 拼接的字段
  ADVANCED_SEARCH_CONCATENATOR_FiELD: ['name', 'number'],
  //产品标签名称
  PRODUCT_NAME: 'IntePLM v11',
  //厂家介绍
  SYS_SUPPLY: {
    NAME: 'TYSoft',
    URL: 'http://www.hustcad.com/'
  },
  cadUrl: '/rest/userService/v1/user/tokenExpiration',
  cadLoginUrl: '/rest/userService/v1/user/userLogin',
  //获取在线用户刷新间隔周期(秒)
  ONLINEUSERCOUNTINTERVALPERIOD: 600,
  // 更改请求是否显示受影响分析模块
  CHANGEREQUESTSHOWINFLUENCEANALYSIS: true,
  // 支持二开替换的工作台数量计算白名单
  projectNumOptions: {
    ['PRJT_Assigned']: ['待接收', '执行中'], // 我执行的
    ['PRJT_Owned']: ['待审核', '已退回', '待下达'] // 我负责的
  },
  // 权限码map
  PERMISSIONBITMAP: {
    '完全控制(全部)': -1,
    读取: 1,
    下载: 1024,
    修改: 2,
    修改内容: 2048,
    修改标识: 65536,
    修改安全标签: 131072,
    通过移动创建: 8192,
    创建: 4,
    设置状态: 32768,
    修订: 128,
    新建视图版本: 256,
    更改域: 4096,
    更改上下文: 16384,
    更改权限: 512,
    删除: 32,
    管理: 64
  },
  // 预览tiff图文件大小
  PREVIEW_TIFF_MAX_SIZE: 1024,
  // 是否谷歌56版本
  IS_OPEN_CHROME_56: false,
  // 是否启用大文件流式下载
  support_streamSaver_DownLoad: false,
  // 是否预加载零部件详情可视化
  IS_DEFAULT_LOAD_PARTS: false,
  // 相似度搜索零部件轻量化预览文件是否开启indexDB缓存
  SIMILAR_PART_CACHE_FILE: true,
  // 是否创建新的（v3）的表单模板  true:新;false:旧
  IS_CREATE_NEW_FORM_TEMPLATE: true,
  // plm3.0项目部署路径
  // modify by qinsx 2025-3-18  nginx配置优化，common绝对路径改成了/plmVue3/common
  PLM_VUE3_PATH: '/plmVue3/common/',
  // 多值搜索框字符串最大长度限制
  MULTIPLE_INPUT_STR_LENGTH: 400,
  // TS是否输出前端调用服务端日志
  IS_OUTPUTS_CALL_SERVER_INTERFACE_LOG: true,
  // TS检入时单次上传文件数量
  TS_CHECK_IN_SINGLE_UPLOAD_FILE_COUNT: 10,
  // 元器件库单次导入文件数量
  SINGLE_IMPORT_FILE_COUNT: 10,
  // 是否打开分配独立物料入口
  AllocatedIndependentMaterials: true,
  // 工艺批量编辑配置
  craftBatchEditConfig: {
    defaultNum: 1,
    maxNum: 100,
    excelMaxNum: 200
  },
  // otype对应超链接
  OTYPE_HYPERLINK: {
    'ty.inteplm.doc.CTyDoc': '/homePage/docData', //文档
    'ty.inteplm.part.CTyPart': '/homePage/partData', //零部件
    'ty.inteplm.cad.CTyCADDoc': '/homePage/docData', //CAD
    'ty.inteplm.mpm.CTyMPMProcessPlan': '/homePage/containerGeneralViewModel', //工艺路线
    'ty.inteplm.mpm.CTyMPMOperation': '/homePage/containerGeneralViewModel', //工艺阶段、工序...
    'ty.inteplm.mpm.CTyMPMPlant': '/homePage/manufactureResourceData', //工厂
    'ty.inteplm.mpm.CTyMPMWorkCenter': '/homePage/manufactureResourceData', //工作中心
    'ty.inteplm.mpm.CTyMPMTooling': '/homePage/manufactureResourceData', //工装
    'ty.inteplm.mpm.CTyMPMProcessMaterial': '/homePage/manufactureResourceData', //工艺物料
    'ty.inteplm.mpm.CTyMPMSkill': '/homePage/manufactureResourceData', //工艺技能
    'ty.inteplm.change.CTyChangeNotice': '/changeOrder/changeOrderDetail', //变更单
    'ty.inteplm.form.CTyFormData': '/homePage/formDataDetail', //表单
    'ty.inteplm.model.CTyModel': '/homePage/modelManageDetail', //模型
    'ty.inteplm.baseline.CTyBaseLine': '/homePage/baseLineDetail', //基线
    'ty.inteplm.folder.CTyHyperlink': '/homePage/hyperlinkDetail', //c超链接
    'ty.inteplm.FeatureSet.CTyFeatureSet': '/homePage/featureSetDetail', //特征集合
    'ty.inteplm.ipd.CTyDefect': '/homePage/issueDetail', //问题报告
    'ty.inteplm.colorpart.CTyColorScheme': '/homePage/colorScheme', //颜色方案
    'ty.inteplm.risk.CTyRisk': '/homePage/riskDetail', //风险
    'ty.inteplm.ProductFamily.CTyVariantSpec': '/homePage/variantDetail', //变型
    'ty.inteplm.change.CTyChangeRequest': '/homePage/changeRequestDetail', //变更请求
    'ty.inteplm.package.CTyWorkPackage': '/homePage/dataPacket', //数据包
    'ty.inteplm.package.CTyDeliveryRecord': '/homePage/deliverDetail', //交付单
    'ty.inteplm.formula.CTyFormulaSet': '/homePage/formulaDetail', //公式集
    'ty.inteplm.system.CTyDashboard': '/homePage/dashBoard', //仪表盘
    'ty.inteplm.requirement.CTyRequirement': '/home/demandDetail', //需求
    'ty.inteplm.requirement.CTyCustomer': '/homePage/ipd/demand/customer'
  },
  // 拖拽列延迟保存(默认单位是秒)
  DRAG_COLUMN_DELAY_SAVE_TIME: 20,
  //默认超时时间6000*60*24，
  DEAFULT_REQUEST_TIMEOUT: 86400000,
  headerTooltip: [
    'thumbnailFile',
    'icon',
    'localWorkspaceStatus',
    'featureState',
    'graphical',
    'typeIcon',
    'changestatus',
    'changeState',
    'flowState',
    'partCadLinkType'
  ],
  openContinuCreat: true, //新建零部件 是否开启连续创建
  rootBaseURL: '',
  CHECKED_PROJECT_VIEW_PERMISSION: false,
  // webts路由前缀
  WEBTS_MENU_ROUTER_PREFIX: 'plmVue3/ts-web/#/',
  // 是否启用webts前缀
  IS_ENABLE_WEBTS_PREFIX: true,
  // 工作区超时时间
  workspaceTime: 100000,
  /**
   * @description 工作交接的分类配置,目前只支持12种类型,被检出的(mycheckout)流程任务(processTask)；执行的工作任务(executeWorkTask)；负责的工作任务(responsibleWorkTask)；产品库(productLib)；存储库(storageLib)；群组(group)；委派(delegate)；零部件(part)；文档(doc)；cad文档(caddoc)；工艺(mpm),其中example1:不带分组，example2:带分组。
   * @Author weig
   * @Date 2025-04-21 15:28:36
   * @example1 [{ label: '被检出的', value: 'mycheckout' 
     },{
      label: '流程任务',
      value: 'processTask'
    },{
      label: '执行的工作任务',
      value: 'executeWorkTask'
    },{
      label: '负责的工作任务',
      value: 'responsibleWorkTask'
    },{
      label: '产品库',
      value: 'productLib'
    },{
      label: '存储库',
      value: 'storageLib'
    },{
      label: '群组',
      value: 'group'
    },{
      label: '委派',
      value: 'delegate'
    },{
      label: '零部件',
      value: 'part'
    },{
      label: '文档',
      value: 'doc'
    },{
      label: 'cad文档',
      value: 'caddoc'
    },{
      label: '工艺',
      value: 'mpm'
    }
  ]
  * @example2 [{
      label: 'PDM',
      value: 'PDM',
      children:[{ label: '被检出的', value: 'mycheckout' 
      },{
        label: '流程任务',
        value: 'processTask'
      }]
    },{
      label: '执行的工作任务',
      value: 'executeWorkTask'
    },{
      label: '负责的工作任务',
      value: 'responsibleWorkTask'
    },{
      label: '产品库',
      value: 'productLib'
    },{
      label: '存储库',
      value: 'storageLib'
    },{
      label: '群组',
      value: 'group'
    },{
      label: '委派',
      value: 'delegate'
    },{
      label: '零部件',
      value: 'part'
    },{
      label: '文档',
      value: 'doc'
    },{
      label: 'cad文档',
      value: 'caddoc'
    },{
      label: '工艺',
      value: 'mpm'
    }
  ]
   */
  WORK_TRANSFER_TYPE: [
    { label: '被检出的', value: 'mycheckout' },
    {
      label: '流程任务',
      value: 'processTask'
    },
    {
      label: '执行的工作任务',
      value: 'executeWorkTask'
    },
    {
      label: '负责的工作任务',
      value: 'responsibleWorkTask'
    },
    {
      label: '产品库',
      value: 'productLib'
    },
    {
      label: '存储库',
      value: 'storageLib'
    },
    {
      label: '群组',
      value: 'group'
    },
    {
      label: '委派',
      value: 'delegate'
    },
    {
      label: '零部件',
      value: 'part'
    },
    {
      label: '文档',
      value: 'doc'
    },
    {
      label: 'cad文档',
      value: 'caddoc'
    },
    {
      label: '工艺',
      value: 'mpm'
    },
    {
      label: 'BOM行',
      value: 'bom'
    }
  ],
  COMMENT_DEFAULT_QUERY_NUM: 10,
  COMMENT_REPLY_DEFAULT_QUERY_NUM: 5,

  // modify by huly 2025/5/26 vue2 迁移 vue3 开启表单布局的otype
  openFormLayoutOtypeList: [
    'ty.inteplm.dts.CTyIssue', // 问题
    'ty.inteplm.requirement.CTyChapter',
    'ty.inteplm.requirement.CTyRequirement', //需求
    'ty.inteplm.requirement.CTySpecification', // 需求规格
    'ty.inteplm.mpn.CTyManufacture', //制造商
    'ty.inteplm.risk.CTyNewRisk', //风险
    'ty.inteplm.ipd.CTyDefect', // 缺陷
    'ty.inteplm.ipd.CTyCheckItem', // 要素
    'ty.inteplm.ipd.CTyCheckList', // 要素包
    'ty.inteplm.iterativemng.CTyRoadMap', // 路标
    'ty.inteplm.ipd.CTyConfigurationItem', // 配置项
    'ty.inteplm.productplan.CTyCharter', //立项
    'ty.inteplm.ProductFamily.CTyProductModel', //产品
    'ty.inteplm.project.CTyProject', //项目
    'ty.inteplm.part.CTyPartMultiAlternate', // 替代规则
    'ty.inteplm.ipd.CTyTechnologyReview', // TR
    'ty.inteplm.ipd.CTyPlanTask', // 任务
    'ty.inteplm.ipd.CTyPlanNode', // 节点
    'ty.inteplm.crm.CTyBusinessOpportunity', // 商机
    'ty.inteplm.crm.CTyContract', // 合同
    'ty.inteplm.crm.CTyLiaison', // 联系人
    'ty.inteplm.requirement.CTyCustomer', // 客户
    'ty.inteplm.crm.CTyCompetitor', // 竞争对手
    'ty.inteplm.crm.CTyAgent', // 代理商
    'ty.inteplm.crm.CTyClaimExpense', // 费用
    'ty.inteplm.crm.CTyRequisitionForm', // 申请单
    'ty.inteplm.crm.CTyProduct', // 产品
    'ty.inteplm.crm.CTyAction', // 更进
    'ty.inteplm.crm.CTyAddress', // 地址
    'ty.inteplm.ipd.CTyProjectChange', // 项目变更
    'ty.inteplm.crm.CTyCashBackPlan', // 回款计划
    'ty.inteplm.crm.CTyCashBackItem', // 回款记录
    'ty.inteplm.crm.CTySplitSheet', // 分割单
    'ty.inteplm.crm.CTyInvoice', // 开票信息
    'ty.inteplm.ipd.CTyProjectChange', // 项目变更，
    'ty.inteplm.ProductFamily.CTyProductModelGroup' //产品组
  ],
  IS_OPEN_PAGE_LAYOUT: true, // 是否放开属性布局
  IS_OPEN_FORM_LAYOUT: true, // 是否放开表单布局
  IS_COMMENT_CREATE_DEFECT: true, // 评论中允许新建缺陷
  'COMMON_LOCAL_PATH': '//localhost:8082/',
  'FILE-PREVIEW_LOCAL_PATH': '//localhost:8095/',
  IS_USE_NEW_FILE_PREVIEW: true, // 是否启用新的文件预览组件，总开关
  USE_NEW_FILE_PREVIEW_PAGE: {
    discribeDocment: true, // 工艺计划版本对象的文档页签，工艺描述文档，工艺参考文档
    fileUploadList: true, // 附件列表组件
    fileUploadCard: true, // 附件卡片组件
    bomRight: true, // 工艺
    webtsOpenWorkSpace: true, // webts工作区列表预览
  }
};
