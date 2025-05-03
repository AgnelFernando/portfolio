<template>
    <div class="flex flex-col min-h-screen bg-white ">
        <!-- Blog Header -->
        <header class="flex bg-cover bg-center h-96" :style="{ backgroundImage: `url(${HeaderImg})` }">
            <div class="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
                <div class="text-center px-4">
                    <h1 class="text-4xl md:text-5xl font-bold text-white px-44">Lessons from Controlling a UR3 Robot
                        with Open VLA</h1>
                    <p class="mt-4 text-lg text-gray-300">Exploring Vision-Language-Action Models for Real-World Robot
                        Manipulation</p>
                    <p class="mt-2 text-sm text-gray-400">Posted by Agnel · April 2025</p>
                </div>
            </div>
        </header>

        <!-- Post Content -->
        <main class="max-w-3xl mx-auto px-4 py-12">
            <article class="prose lg:prose-md">
                <h2>Introduction</h2>
                <p>I recently experimented with OpenVLA (Vision-Language-Action),
                    an open-source model designed to control robots using visual and
                    natural language inputs. My goal was to test its capabilities on
                    a physical UR3 robotic arm for tabletop manipulation tasks.</p>
                <p>The OpenVLA paper claims the model can generalize to most robot arms using zero-shot learning,
                    meaning no additional training is required. However, when I tried it on the UR3, it did not work out
                    of the box. The paper also proposes fine-tuning the model using LoRA (Low-Rank Adaptation), which I
                    explored further.</p>
                <p>What excites me about OpenVLA is that it’s the first open-source model in the Vision-Language-Action
                    space. Alternatives like Google’s RT-1, RT-2, and Octo remain closed-source. OpenVLA opens doors for
                    experimentation in general-purpose robot learning, including potential applications in humanoid
                    robots trained via imitation learning.
                </p>
                <h2>What is Open VLA?</h2>
                <p>
                    Open VLA is a Vision-Language-Action model built on LLaMA 2. It takes an image and a natural
                    language instruction as input, and outputs corresponding robot actions. It includes two image
                    encoders, one for RGB and another for depth or other visual input and uses a large language model
                    (LLM) core for semantic grounding.
                </p>
                <img :src="IntroImg" alt="Introduction to Open VLA" class="my-6">
                <p>
                    Open VLA has been trained on a variety of robotic tasks, including taple top manipulation,
                    pick-and-place operations, and other common manipulation behaviors. Its goal is to enable robots to
                    generalize across tasks using high-level natural instructions without extensive retraining.
                </p>

                <h2>Setup and Integration</h2>
                <p>
                    <b>Hardware</b>
                <ul class="list-inside">
                    <li>UR3 robotic arm</li>
                    <li>Robotiq Hand-E gripper</li>
                    <li>RGB camera for third-person view of the workspace</li>
                </ul>
                </p>
                <p>
                    <b>Software</b>
                <ul class="list-inside">
                    <li>RTDE library (for controlling the UR3 and recording trajectories via Python sockets)</li>
                    <li>Open VLA repository (for model architecture and finetuning)</li>
                    <li>RLDS Dataset Builder (To convert collected trajectories into the format required for training)
                    </li>
                </ul>
                </p>
                <p>The UR3 does not use ROS out of the box, so I used the RTDE Python library to communicate with its
                    RTDE server running on the robot.</p>
                <h4>Integration Challenges</h4>
                <p>While the Open VLA GitHub repo includes code for inference, executing it on a real robot was left as
                    a placeholder. This makes sense because each robot platform uses a unique control interface. I feel
                    this is a big issue still today, integration in robotics remains fragmented. Even with tools like
                    ROS, many commercial robots (like the UR3) rely on proprietary APIs.</p>

                <h2>How It Works (in My Workflow)</h2>
                <b>Data Collection</b>
                <p>Open VLA was trained on the Open X-Embodiment dataset, which was collected using a mix of simulation
                    and teleoperation (e.g., VR headsets or scaled-down robotic arms). The authors suggest that 10–20
                    episodes are enough to fine-tune the model for a new robot.</p>
                <p>So, instead of setting up teleoperation, I used a manual approach, collecting data from real robot
                    executions. It was more time-consuming than I expected.</p>
                <p>Here’s my process:</p>
                <ol class="list-inside">
                    <li>I created motion programs using the UR3 Teach Pendant.</li>
                    <li>Logged trajectories using <a target="_blank"
                            href="https://github.com/AgnelFernando/ur3-vla/blob/main/record_robot_actions.py">record_robot_action.py</a>
                        (saving waypoints and gripper value in CSV).</li>
                    <li>I synchronized these with third-person camera frames to form observation-action pairs. For this,
                        I used <a target="_blank"
                            href="https://github.com/AgnelFernando/ur3-vla/blob/main/create_episode.py">create_episode.py</a>
                    </li>
                    <li>Finally, I used the <a target="_blank"
                            href="https://github.com/kpertsch/rlds_dataset_builder">RLDS Dataset
                            Builder</a> to convert the dataset into the RLDS format expected by Open VLA.</li>
                </ol>
                <b>Inference Pipeline</b>
                <p>During inference, I used <a target="_blank"
                        href="https://github.com/AgnelFernando/ur3-vla/blob/main/vla_inference.py">vla_inference.py</a>,
                    which takes:</p>
                <ul class="list-inside">
                    <li>A natural language instruction (e.g., “Pick up the red cube”)</li>
                    <li>A real-time image from the RGB camera</li>
                </ul>
                <p>The fine-tuned model outputs:</p>
                <ul class="list-inside">
                    <li>Predicted deltas in position (Δx, Δy, Δz) and orientation (Δrx, Δry, Δrz)</li>
                    <li>Gripper delta value</li>
                </ul>
                <p>I computed the target pose by applying the predicted deltas to the current robot pose, then sent the
                    updated pose and gripper value to the UR3 using the RTDE interface.</p>
                <b>How VLA Interprets Instructions</b>
                <p>The model grounds the instruction semantically using the LLM, uses the image to localize objects, and
                    jointly decodes both through a transformer model to predict low-level robot actions by effectively
                    mapping words and pixels to motion.</p>


                <h2>What I Learned</h2>
                <b>Model Limitations</b>
                <ul class="list-inside">
                    <li><i>Zero-shot doesn't work universally</i>: Since the UR3 wasn't part of the training dataset,
                        the model
                        didn’t generalize well without fine-tuning.</li>
                    <li><i>Data collection is harder than expected</i>: Without teleoperation, it takes a lot of time.
                        Tools
                        like VR controllers or scaled arms (~$100) could make this easier.</li>
                    <li><i>No support for multi-arm systems</i>: The current model architecture assumes a single-arm
                        setup;
                        extending it would require architectural changes.</li>
                </ul>
                <b>Practical Takeaways</b>
                <ul class="list-inside">
                    <li><i>Fine-tuning works but it’s non-trivial</i>: It took substantial effort to collect even 10–20
                        useful episodes.</li>
                    <li><i>There's a standardization gap</i>: Robotics still lacks a universal API for integrating
                        foundation models like VLA across hardware.</li>
                    <li><i>Embodiment matters</i>: Even small differences in robot design or workspace layout can change
                        how policies behave, meaning generalized models need embodiment-aware grounding.</li>
                </ul>
                <h2>Conclusion</h2>
                <p>By using Open VLA with the UR3 gave me an idea of VLA model in action. It's wonderful to see how far
                    we've come from manually scripting joint movements to typing natural language commands and letting a
                    model handle the rest.</p>
                <p>At the same time, this project revealed key gaps in the current landscape: challenges in data
                    collection, generalization limits of foundation models, and the lack of standardized robot APIs.</p>
                <p>Still, this feels like just the beginning. As more open-source models like Open VLA emerge, and as
                    the robotics community moves toward hardware-agnostic interfaces, we may soon reach a point where
                    teaching a robot to do something is as simple as showing and telling.</p>
            </article>

            <!-- Back to blog list -->
            <div class="mt-12">
                <router-link to="/" class="text-accent hover:underline">&larr; Back to Home</router-link>
            </div>
        </main>
    </div>
</template>Conclusion

<script>
import HeaderImg from '@/assets/images/blogs/openvla/header.jpg';
import IntroImg from '@/assets/images/blogs/openvla/introduction.jpg';
export default {
    name: "OpenVla",
    data() {
        return {
            HeaderImg,
            IntroImg
        };
    }
};
</script>