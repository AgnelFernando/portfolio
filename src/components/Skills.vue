<template>
  <div>
      <Title titlename="SKILLS"/>
      <div class="tabs flex justify-center mb-16">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index"
            :class="['px-4 py-2', selectedTab === tab ? 'bg-button-base text-button-text' : 'bg-tag-background text-tag-text']"
            @click="selectedTab = tab"
          >
            {{ tab }}
          </button>
        </div>

      <div class="container flex flex-wrap gap-10">
          <div v-for="(skill, index) in filteredSkills" :key="index">
              <div class="flex flex-row items-center bg-icon-color p-6 w-24 h-24 lg:w-32 lg:h-32 mx-6 mb-2 rounded-lg">
                  <img :src="skill.image" />
              </div>
              <div class="text-center text-tag-text">{{skill.name}}</div>
          </div>
      </div>
  </div>
</template>
<script>
import Title from './Title.vue';

export default {
  name: "Skills",
  components: {Title},
  data() {
      return {
          selectedTab: 'AI/ML',
          tabs: ['All', 'AI/ML', 'Robotics', 'App Dev', 'DevOps & Cloud'],
          skills: [
              { name: 'Python', category: "AI/ML", image: require("../assets/images/skills/python.png") },
              { name: 'Pytorch', category: "AI/ML", image: require("../assets/images/skills/pytorch.svg") },
              { name: 'Tensorflow', category: "AI/ML", image: require("../assets/images/skills/tensorflow.png") },
              { name: 'DVC', category: "AI/ML", image: require("../assets/images/skills/dvc.png") },
              { name: 'MLflow', category: "AI/ML", image: require("../assets/images/skills/mlflow.png") },
              { name: 'Weights & Biases', category: "AI/ML", image: require("../assets/images/skills/wandb.png") },
              { name: 'Great Expectations', category: "AI/ML", image: require("../assets/images/skills/ge.png") },
              { name: 'AWS Sagemaker', category: "AI/ML", image: require("../assets/images/skills/sagemaker.png") },
              { name: 'Jupyter', category: "AI/ML", image: require("../assets/images/skills/jupyter.png") },
              { name: 'NumPy', category: "AI/ML", image: require("../assets/images/skills/numpy.png") },
              { name: 'Pandas', category: "AI/ML", image: require("../assets/images/skills/pandas.png") },
              { name: 'Matplotlib', category: "AI/ML", image: require("../assets/images/skills/matplotlib.png") },
              { name: 'Seaborn', category: "AI/ML", image: require("../assets/images/skills/seaborn.webp") },
              { name: 'SciPy', category: "AI/ML", image: require("../assets/images/skills/scipy.png") },
              { name: 'Scikit-learn', category: "AI/ML", image: require("../assets/images/skills/scikit_learn.png") },
              { name: 'TorchVision', category: "AI/ML", image: require("../assets/images/skills/torchvision.png") },
              { name: 'OpenCV', category: "AI/ML", image: require("../assets/images/skills/opencv.png") },
              { name: 'Computer Vision', category: "AI/ML", image: require("../assets/images/skills/computer_vision.svg") },
              { name: 'Object Detection', category: "AI/ML", image: require("../assets/images/skills/object_detection.svg") },
              { name: 'Generative Models', category: "AI/ML", image: require("../assets/images/skills/generative-models.svg") },
              { name: 'Deep RL', category: "AI/ML", image: require("../assets/images/skills/rl.svg") },
              { name: 'NLP', category: "AI/ML", image: require("../assets/images/skills/nlp.svg") },


              { name: 'ROS', category: "Robotics", image: require("../assets/images/skills/ros.png") },
              { name: 'Gazebo', category: "Robotics", image: require("../assets/images/skills/gazebo.png") },
              { name: 'Unity', category: "Robotics", image: require("../assets/images/skills/unity.png") },
              { name: 'UR3', category: "Robotics", image: require("../assets/images/skills/ur3.webp") },
              { name: 'JetBot', category: "Robotics", image: require("../assets/images/skills/jetbot.jpg") },
              { name: 'Unitree', category: "Robotics", image: require("../assets/images/skills/unitree.png") },
              
              { name: 'Java', category: "App Dev", image: require("../assets/images/skills/java.svg")},
              { name: "JavaScript", category: "App Dev", image: require("../assets/images/skills/javascript.png")},
              { name: "HTML", category: "App Dev", image: require("../assets/images/skills/html.png")},
              { name: "CSS", category: "App Dev", image: require("../assets/images/skills/css.png")},
              { name: "Spring Boot", category: "App Dev", image: require("../assets/images/skills/springboot.png")},
              { name: "Microservice", category: "App Dev", image: require("../assets/images/skills/microservice.svg")},
              { name: "Hibernate", category: "App Dev", image: require("../assets/images/skills/hibernate.png")},
              { name: "Vue JS", category: "App Dev", image: require("../assets/images/skills/vue.png")},
              { name: "Angular", category: "App Dev", image: require("../assets/images/skills/angular.png")},
              { name: "MySQL", category: "App Dev", image: require("../assets/images/skills/mysql.png")},
              { name: "Dynamo DB", category: "App Dev", image: require("../assets/images/skills/dynamodb.png")},
              { name: "Kotlin", category: "App Dev", image: require("../assets/images/skills/kotlin.png")},
              { name: "Android", category: "App Dev", image: require("../assets/images/skills/android.png")},              

              { name: "Docker", category: "DevOps & Cloud", image: require("../assets/images/skills/docker.png")},
              { name: "AWS", category: "DevOps & Cloud", image: require("../assets/images/skills/aws.png")},
              { name: "Azure", category: "DevOps & Cloud", image: require("../assets/images/skills/azure.svg")},
              { name: "Linux", category: "Others", image: require("../assets/images/skills/linux.png")},
              { name: "Ubunutu", category: "Others", image: require("../assets/images/skills/ubuntu.png")},
              
          ],
      }
  },
  computed: {
  filteredSkills() {
    if (this.selectedTab === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedTab);
  },
}
};
</script>