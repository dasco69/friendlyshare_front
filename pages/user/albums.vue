<template>
  <div>
    <div class="w-full">
      <button-albums width="w-5" @click.native="activeModal" />
    </div>
    albums
    <div  class="sm:flex flex-wrap justify-center items-center text-center gap-8">
      <div v-for="item in albums" :key="item" class="w-auto sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-transparent mt-6 duration-200 lg:transform-gpu lg:hover:scale-105  border border-white shadow-lg lg:hover:shadow-xl  rounded-lg dark:bg-gray-800">
        <NuxtLink :to="`${$route.path}/${item}`">
          <card class="cursor-pointer" :title="item"/>
        </NuxtLink>
      </div>
    </div>
    <modal-create-album :active="$store.state.toggle.active" @modalHidden="desactiveModal" @sendNameAlbum="sendNameAlbum"/>
  </div>
</template>

<script>
import ButtonAlbums from '../../components/dashboard/UI/ButtonAlbums.vue'
import Card from '../../components/dashboard/UI/Card.vue'
import ModalCreateAlbum from '../../components/dashboard/UI/ModalCreateAlbum.vue'

export default {
  components: {Card, ButtonAlbums, ModalCreateAlbum},
  data() {
    return {
      albums: null
    }
  },
  methods: {
    async fetchAlbums() {
      this.albums = await this.$store.dispatch("albums/fetchAllFolders")
    },
    activeModal() {
      this.$store.commit('toggle/toggle')
    },
    desactiveModal() {
      this.$store.commit('toggle/toggle')
    },
    sendNameAlbum() {
      console.log('name of album')
      setTimeout(() => {
        this.$store.commit('toggle/toggle')
      }, 200);
    }
  },
  mounted () {
    this.fetchAlbums()
  },
}
</script>
