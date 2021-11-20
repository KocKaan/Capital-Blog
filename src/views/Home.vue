<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a Post. Register for Account</h2>
        <router-link class="router-button" to="#">
          Register for Capital Blogs
          <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCards, Arrow },
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card 1",
          blogCoverPhoto: "stock-1",
          blogDate: "August 1, 2021",
        },
        {
          blogTitle: "Blog Card 2",
          blogCoverPhoto: "stock-2",
          blogDate: "August 2, 2021",
        },
        {
          blogTitle: "Blog Card 3",
          blogCoverPhoto: "stock-3",
          blogDate: "August 3, 2021",
        },
        {
          blogTitle: "Blog Card 4",
          blogCoverPhoto: "stock-4",
          blogDate: "August 4, 2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 33;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
  }
}
</style>
