<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesMode"
      >Stored Resource</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: { AddResource, StoredResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'official-guggle',
          title: 'Guggle',
          description: 'Learn to google...',
          link: 'https://goggle.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addNewResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResourcesMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resourceIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>
