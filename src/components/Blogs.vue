<template>
    <div>
        <Title titlename="Blogs" />
        <div class="flex flex-wrap justify-around container">
            <div v-for="(blog, index) in blogs" :key="index" @click="openBlog(blog.link)" :class="[
                'm-3 rounded-lg border overflow-hidden bg-card-background border-border shadow-lg w-1/3 h-full flex flex-col transition-transform duration-200 ease-in-out cursor-default',
                blog.link ? 'transform hover:shadow-2xl hover:scale-105' : '']">

                <!-- blog Image -->
                <div class="w-full h-64 relative">
                    <img :src="blog.image" alt="blog Image" class="w-full h-full object-inherent">
                    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-overlay"></div>
                </div>

                <!-- blog Details -->
                <div class="p-4 flex-grow">
                    <h6 class="font-bold text-lg text-card-title">{{ blog.name }}</h6>
                    <p class="text-card-body mt-2">{{ blog.description }}</p>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import Title from './Title.vue';

export default {
    name: 'Blogs',
    components: {
        Title
    },
    methods: {
        openBlog(link) {
            if (link) {
                window.open(link, "_blank")
            } else {
                console.warn("No link provided for this blog.");
            }
        }
    },
    data() {
        return {
            blogs: [
                // {
                //     name: 'Open VLA with UR3 Robot',
                //     image: require('../assets/images/blogs/openvla/header.jpg'),
                //     description: 'Lessons learnt from Controlling a UR3 Robot with Open VLA',
                //     link: '#/blog/openvla'
                // },
                {
                    name: 'Walk these Ways - Paper Review',
                    image: require('../assets/images/blogs/wtw/header.png'),
                    description: 'Walk These Ways: Tuning Robot Control for Generalization with Multiplicity of Behavior',
                    link: 'https://youtu.be/36g-YFETCiM'
                },
                {
                    name: 'AlphaFold2 - Paper Review',
                    image: require('../assets/images/blogs/alphafold/header.webp'),
                    description: 'Highly accurate protein structure prediction with AlphaFold',
                    link: 'https://youtu.be/KiiiVMqGcKA'
                }

            ]
        };
    }
}
</script>
