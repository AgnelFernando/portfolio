<template>
    <div>
        <Title titlename="Blogs" />
        <div class="flex flex-wrap justify-around container">
            <div v-for="(blog, index) in blogs" 
                :key="index" @click="openBlog(blog.link)"
                class="m-3 rounded-lg border overflow-hidden bg-card-background border-border shadow-lg w-96 flex flex-col h-full">
    
                <!-- blog Image -->
                <div class="w-full relative">
                    <img :src="blog.image" alt="blog Image" class="w-full h-full object-cover">
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
                {
                    name: 'Open VLA with UR3 Robot',
                    image: require('../assets/blog/openvla/header.jpg'),
                    description: 'Lessons learnt from Controlling a UR3 Robot with Open VLA',
                    link: '#/blog/openvla'
                }
            ]
        };
    }
}
</script>
