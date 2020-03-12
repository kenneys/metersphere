import Vue from "vue";
import VueRouter from 'vue-router'
import RouterSidebar from "./RouterSidebar";
import Setting from "../../settings/Setting";
import User from "../../settings/system/User";
import EditPerformanceTestPlan from "../../performance/testPlan/EditPerformanceTestPlan";
import PerformanceTestPlan from "../../performance/testPlan/PerformanceTestPlan";
import Organization from "../../settings/system/Organization";
import OrganizationMember from "../../settings/organization/OrganizationMember";
import Member from "../../settings/workspace/WorkspaceMember";
import TestResourcePool from "../../settings/system/TestResourcePool";
import MsProject from "../../project/MsProject";
import OrganizationWorkspace from "../../settings/organization/OrganizationWorkspace";
import PersonSetting from "../../settings/personal/PersonSetting";
import SystemWorkspace from "../../settings/system/SystemWorkspace";
import PerformanceChart from "../../performance/report/components/PerformanceChart";
import PerformanceTestReport from "../../performance/report/PerformanceTestReport";
import FunctionalTestReport from "../../functional/report/FunctionalTestReport";
import FunctionalTest from "../../functional/FunctionalTest";
import PerformanceTest from "../../performance/PerformanceTest";
import EditFunctionalTestPlan from "../../functional/testPlan/EditFunctionalTestPlan";
import PerformanceTestHome from "../../performance/home/PerformanceTestHome";
import FunctionalTestPlan from "../../functional/testPlan/FunctionalTestPlan";
import FunctionalTestHome from "../../functional/home/FunctionalTestHome";
import PerformanceReportView from "../../performance/report/PerformanceReportView";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: "/", redirect: '/setting/personsetting'},
    {
      path: "/sidebar",
      components: {
        sidebar: RouterSidebar
      }
    },
    {
      path: "/setting",
      components: {
        content: Setting
      },
      children: [
        {
          path: 'user',
          component: User,
        },
        {
          path: 'organization',
          component: Organization,
        },
        {
          path: 'organizationmember',
          component: OrganizationMember,
        },
        {
          path: 'organizationworkspace',
          component: OrganizationWorkspace,
        },
        {
          path: 'personsetting',
          component: PersonSetting
        },
        {
          path: 'member',
          component: Member
        },
        {
          path: 'systemworkspace',
          component: SystemWorkspace
        },
        {
          path: 'testresourcepool',
          component: TestResourcePool
        }
      ]
    },
    {
      path: "/functional",
      name: "functional",
      redirect: "/functional/home",
      components: {
        content: FunctionalTest
      },
      children: [
        {
          path: 'home',
          name: 'fucHome',
          component: FunctionalTestHome,
        },
        {
          path: 'plan/create',
          name: "createFucTest",
          component: EditFunctionalTestPlan,
        },
        {
          path: "plan/edit/:testId",
          name: "editFucTest",
          component: EditFunctionalTestPlan,
          props: {
            content: (route) => {
              return {
                ...route.params
              }
            }
          }
        },
        {
          path: "plan/:projectId",
          name: "fucPlan",
          component: FunctionalTestPlan
        },
        {
          path: "project/:type",
          name: "fucProject",
          component: MsProject
        },
        {
          path: "report/:type",
          name: "fucReport",
          component: FunctionalTestReport
        }
      ]
    },
    {
      path: "/performance",
      name: "performance",
      redirect: "/performance/home",
      components: {
        content: PerformanceTest
      },
      children: [
        {
          path: 'home',
          name: 'perHome',
          component: PerformanceTestHome,
        },
        {
          path: 'plan/create',
          name: "createPerTest",
          component: EditPerformanceTestPlan,
        },
        {
          path: "plan/edit/:testId",
          name: "editPerTest",
          component: EditPerformanceTestPlan,
          props: {
            content: (route) => {
              return {
                ...route.params
              }
            }
          }
        },
        {
          path: "plan/:projectId",
          name: "perPlan",
          component: PerformanceTestPlan
        },
        {
          path: "project/:type",
          name: "perProject",
          component: MsProject
        },
        {
          path: "report/:type",
          name: "perReport",
          component: PerformanceTestReport
        },
        {
          path: "chart",
          name: "perChart",
          component: PerformanceChart
        },
        {
          path: "report/view/:reportId",
          name: "perReportView",
          component: PerformanceReportView
        }
      ]
    }
  ]
});

export default router