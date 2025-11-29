<script setup>
import { getCurrentInstance, onMounted, reactive } from "vue";

const {proxy:{$tState,$tService}}=getCurrentInstance();

const state=reactive({
  routerNavConfig:{
    options:[
      {label:"工作台",path:"/"},
      {label:"组件Nav",path:"/componentNav"},
      {label:"TechUIColor",path:"/techUIColorsV1"},
    ],
    triggerPosition:"right",
    triggerStyle:"react",
    triggerAni:true,
    buttonWidth:200,
    modal:true,
  },
})

onMounted(() => {
  const extension=[
    {label:"extendItem",type:"switch",tipContent:"通过Extension给控制面板追加全局的Toggle",value:true,title:"追加的Toggle"},
    {label:"extendArray",type:"radio",tipContent:"通过Extension给控制面板追加全局Radio",value:"item3",title:"追加的Radio",children:[
      {label:"item1",value:"item1"},
      {label:"item2",value:"item2"},
      {label:"item3",value:"item3"},
    ]},
  ]
  $tState.controlPanel.extension=extension//拓展控制面板
  // $tState.controlPanel.exclusion=["t3D"]//排除控制面板
  // $tState.controlPanel.width=450

  
})

</script>

<template>
  <TuiProvider>
    <router-view></router-view>
    <TuiRouterNav v-bind="state.routerNavConfig"/>
  </TuiProvider>
</template>

<style lang="less">
</style>
