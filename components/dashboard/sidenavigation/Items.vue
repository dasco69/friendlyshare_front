<template>
  <div>
    <sidenav-items-section name="Apps">
      <sidenav-item title="All Apps" to="/">
        <all-apps-icon />
      </sidenav-item>
      <sidenav-item title="Updates" to="/user/updates">
        <updates-icon />
      </sidenav-item>
    </sidenav-items-section>

    <sidenav-items-section name="Categories">
      <sidenav-item title="Albums" to="/user/albums">
        <photography-icon />
      </sidenav-item>
      <sidenav-item title="Chat" to="/user/chat">
        <graphic-design-icon />
      </sidenav-item>
      <sidenav-item title="Videos" to="/user/videos">
        <videos-icon />
      </sidenav-item>
    </sidenav-items-section>

    <sidenav-items-section name="Guides">
      <sidenav-item title="Documentation" to="/user/documentation">
        <documentation-icon />
      </sidenav-item>
    </sidenav-items-section>
  </div>
</template>

<script>
import SidenavItem from './Item.vue';
import SidenavItemsSection from './Section.vue';

/* ICONS */
import GraphicDesignIcon from './icons/GraphicDesign.vue'
import VideosIcon from './icons/Videos.vue';
import UpdatesIcon from './icons/Updates.vue'
import DocumentationIcon from './icons/Documentation.vue'
import PhotographyIcon from './icons/Photography.vue'
import AllAppsIcon from './icons/AllApps.vue'
export default {
  name: 'SidenavItems',
  components: {
    VideosIcon,
    SidenavItem,
    SidenavItemsSection,
    UpdatesIcon,
    GraphicDesignIcon,
    DocumentationIcon,
    PhotographyIcon,
    AllAppsIcon
  },
};
</script>
