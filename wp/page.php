<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage Rezult
 * @since Rezult 1.0
 */
 
get_header(); ?>
<!-- BEGIN OUT -->
<div class="out">
  <div class="v-line-container">

    <?php get_template_part( 'partials/header-small' ); ?>

    <!-- begin L -->
    <div class="l">
      <div class="l-content ">
        <?php while ( have_posts() ) : the_post(); ?>
          <h1 class="h1 uppercase title-margin"><?php the_title(); ?></h1>
          <div class="text l-col-620">
            <?php the_content(); ?>
          </div>
        <?php endwhile; // end of the loop. ?>
      </div>
    </div>
    <!-- END L -->

  </div>
</div>
<!-- end OUT -->

   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>