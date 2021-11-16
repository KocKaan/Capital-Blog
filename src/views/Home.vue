<template>
  <div class="home"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "welcome!",
        blogPost:
          "Weekly blog articles with all things programminig including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is filler title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is filler title 2!",
          blogHTML: "THis is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
