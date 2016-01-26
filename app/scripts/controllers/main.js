'use strict';

/**
* @ngdoc function
* @name e2eIntroApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the e2eIntroApp
*/
angular.module('e2eIntroApp').controller('MainCtrl', function ($scope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  this.addTodo = function() {
    this.todos.push(this.todo);
  };
  var cpu_pvc_val = [
    {
      value: 35,
      color:"#1175AE",
      highlight: "#1175AE",
      label: "할당률"
    },
    {
      value: 65,
      color: "#EEEEEE",
      highlight: "#EEEEEE",
      label: "가용률"
    }
  ];

  var cpu_vmw_val = [
    {
      value: 58,
      color:"#1175AE",
      highlight: "#1175AE",
      label: "할당률"
    },
    {
      value: 42,
      color: "#EEEEEE",
      highlight: "#EEEEEE",
      label: "가용률"
    }
  ];

  var ram_pvc_val = [
    {
      value: 17,
      color:"#1175AE",
      highlight: "#1175AE",
      label: "할당률"
    },
    {
      value: 83,
      color: "#EEEEEE",
      highlight: "#EEEEEE",
      label: "가용률"
    }
  ];

  var ram_vmw_val = [
    {
      value: 63,
      color:"#1175AE",
      highlight: "#1175AE",
      label: "할당률"
    },
    {
      value: 37,
      color: "#EEEEEE",
      highlight: "#EEEEEE",
      label: "가용률"
    }
  ];

  // $(window).scroll(function(){
  //   var height = $(window).scrollTop();
  //   var alert_feature = ($('#alert-feature-div').offset() || { "top": NaN }).top;
  //   if (isNaN(alert_feature) === false){
  //       var cp_pvc_ctx = document.getElementById("cpu-pvc-canvas").getContext("2d");
  //       var cp_vmw_ctx = document.getElementById("cpu-vmw-canvas").getContext("2d");
  //       var ram_pvc_ctx = document.getElementById("ram-pvc-canvas").getContext("2d");
  //       var ram_vmw_ctx = document.getElementById("ram-vmw-canvas").getContext("2d");
  //       if(height >= alert_feature && height <= alert_feature + 100){
  //         window.myDoughnut = new Chart(cp_pvc_ctx).Doughnut(cpu_pvc_val, {responsive : false, percentageInnerCutout : 60});
  //         window.myDoughnut = new Chart(cp_vmw_ctx).Doughnut(cpu_vmw_val, {responsive : false, percentageInnerCutout : 60});
  //         window.myDoughnut = new Chart(ram_pvc_ctx).Doughnut(ram_pvc_val, {responsive : false, percentageInnerCutout : 60});
  //         window.myDoughnut = new Chart(ram_vmw_ctx).Doughnut(ram_vmw_val, {responsive : false, percentageInnerCutout : 60});
  //       }
  //   }
  // });

});
