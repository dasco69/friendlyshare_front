<template>
    <div class="absolute bg-white inset rounded-lg text-black">
        <div class="p-5">
            <div>
                <slot name="title"></slot>
            </div>
            <div class="mt-5">
                <slot name="form"></slot>
            </div>
            <div class="mt-5 flex justify-between">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped>
.inset {
    top: 40%;
    left: 45%;
}
</style>