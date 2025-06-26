<template>
    <div>
        <Title titlename="Projects" />
        <div class="flex flex-wrap justify-around container">
            <div v-for="(project, index) in projects" :key="index" @click="openProject(project.link)" :class="[
                'm-3 rounded-lg border overflow-hidden bg-card-background border-border shadow-lg w-96 flex flex-col h-full transition-transform duration-200 ease-in-out cursor-default',
                project.link ? 'transform hover:shadow-2xl hover:scale-105' : '']">

                <!-- Project Image -->
                <div class="w-full relative" :class="project.name.toLowerCase().replace(/\s+/g, '-')">
                    <img :src="project.image" alt="Project Image" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-overlay"></div>
                </div>

                <!-- Project Details -->
                <div class="p-4 flex-grow">
                    <h6 class="font-bold text-lg text-card-title cursor-pointer">{{ project.name }}</h6>
                    <p class="text-card-body mt-2 cursor-pointer">{{ project.description }}</p>

                    <!-- Technologies -->
                    <div class="flex flex-wrap mt-4 gap-2">
                        <span v-for="(tech, ti) in project.technologies" :key="ti"
                            class="px-2 py-1 text-sm font-medium text-tag-text bg-tag-background rounded-md">
                            {{ tech }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import Title from './Title.vue';

export default {
    name: 'Projects',
    components: {
        Title
    },
    methods: {
        openProject(link) {
            if (link) {
                window.open(link, "_blank"); // Opens in a new tab
            } else {
                console.warn("No link provided for this project.");
            }
        }
    },
    data() {
        return {
            projects: [
                {
                    name: 'UR3 VLA',
                    link: 'https://github.com/AgnelFernando/ur3-vla',
                    image: require('../assets/images/projects/ur3vla.gif'),
                    description: 'Fine-tuned an Open-VLA (Vision Language Action) model to operate a UR3 robot arm.',
                    technologies: ['Pytorch', 'Python', 'Imitation Learning', 'Deep Learning', 'VLA']
                },
                {
                    name: 'Mindscape',
                    link: undefined,
                    image: require('../assets/images/projects/neurobrush.gif'),
                    description: 'A brain-controlled art system that uses Emotiv BCI to command a UR3 robotic arm for drawing and painting. It blends neuroscience, robotics, and creativity—enabling users to create art using just their thoughts.',
                    technologies: ['BCI', 'Websocket', 'UR3', 'Python']
                },
                {
                    name: 'Cerberus',
                    link: undefined,
                    image: require('../assets/images/projects/cerberus.gif'),
                    description: 'A robot dog equipped with camera, sensors, and intelligence to autonomously patrol and detect unusual activities.',
                    technologies: ['Nav2', 'Ros2', 'SLAM', 'YOLOv8', 'Python']
                },
                {
                    name: 'Breakout',
                    link: 'https://github.com/agnelfernando/DRL-games',
                    image: require('../assets/images/projects/breakout.gif'),
                    description: 'Play the Atari Breakout game using a Deep Q-Network (DQN)',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning', 'DQN']
                },
                {
                    name: 'Highway',
                    link: 'https://drive.google.com/drive/folders/1lAv6WS1goKB9HQl82YZREe036h_d1RVM?usp=sharing',
                    image: require('../assets/images/projects/highway.gif'),
                    description: 'Train an agent to navigate optimally in a highway environment using DQN, PPO, and A2C to achieve optimal performance.',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning', 'PPO', 'A2C', 'DQN']
                },
                {
                    name: 'Mountain Climping',
                    link: 'https://github.com/agnelfernando/DRL-games',
                    image: require('../assets/images/projects/mountain_car.gif'),
                    description: 'Play the Mountain Climbing game using Hindsight Experience Replay (HER) and Deep Q-Network (DQN)',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning', 'DQN', 'HER']
                },
                {
                    name: 'Trajectory Following',
                    link: 'https://github.com/agnelfernando/TrajectoryFollowing',
                    image: require('../assets/images/projects/tf.png'),
                    description: 'Trajectory Following Robot use deep reinforcement learning',
                    technologies: ['Pytorch', 'Python', 'Reinforcement Learning', 'Deep Learning', 'ROS',
                        'Gazebo']
                },
                {
                    name: 'Seed Image Classification',
                    link: 'https://github.com/agnelfernando/FGVC',
                    image: require('../assets/images/projects/seeds.png'),
                    description: 'Fine-Grained Image Classification for Seed Images',
                    technologies: ['Pytorch', 'Python', 'Computer Vision']
                },
                {
                    name: 'Dash Video Converter',
                    link: 'https://github.com/AgnelFernando/dash-video-converter',
                    image: require('../assets/images/projects/dash.png'),
                    description: 'A Python-based server application that automates the conversion of input videos into MPEG-DASH format using FFmpeg and Shaka Packager',
                    technologies: ['Docker', 'Python', 'FFMPG', 'AWS']
                },
                {
                    name: 'Goal Master',
                    link: 'https://github.com/AgnelFernando/goal-master',
                    image: require('../assets/images/projects/goalmaster.gif'),
                    description: 'A Kotlin-based Android app for setting, managing, and tracking personal or professional goals with customizable tasks and daily planning',
                    technologies: ['Kotlin', 'Android', 'Room DB', 'MVVM']
                },
                {
                    name: 'Student Dropout Prediction',
                    link: 'https://github.com/agnelfernando/StudentDropoutML',
                    image: require('../assets/images/projects/dropout.jpeg'),
                    description: 'The machine learning model will predict whether a student will drop out of the course based on the given data.',
                    technologies: ['Scikit-learn', 'Python', 'Jupyter']
                },
                {
                    name: 'CycleGan',
                    link: 'https://github.com/agnelfernando/CycleGan',
                    image: require('../assets/images/projects/cycleGan.png'),
                    description: 'Implementation of CycleGan in Pytorch',
                    technologies: ['Pytorch', 'Python', 'Computer Vision', 'Generative Model']
                }
                // Add more projects as needed
            ]
        };
    }
}
</script>
<style scoped>
.goal-master {
    display: flex;
    align-items: center;
    justify-content: center;
}

.goal-master img {
    max-width: 100%;
    max-height: 180px;
    object-fit: contain;
    border-radius: 0.5rem;
}
</style>
