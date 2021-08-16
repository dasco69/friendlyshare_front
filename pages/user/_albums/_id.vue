<template>
    <div>
        {{ $route.params.id }}
        <div class="flex flex-wrap justify-center align-center gap-8">
            <img 
                v-for="file in files" 
                :key="file"  
                class="w-1/4 h-auto bg-white rounded-lg" 
                :src="`http://localhost:4000/public/albums/${$route.params.id}/${file}`" 
                alt="hola">
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'id',
        data() {
            return {
                files: null
            }
        },
        methods: {
            async fetchFiles()  {
                const id = this.$route.params.id
                this.files = await this.$store.dispatch('files/fetchAllFiles', id)
            }
        },
        mounted () {
            this.fetchFiles()
        },
    }
</script>

<style lang="scss" scoped>

</style>