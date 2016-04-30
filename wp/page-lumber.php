<?php
/**
 * The template for displaying Catalog
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
<div class="out">
  <?php get_template_part( 'partials/mdf' ); ?>


  
  <?php get_template_part( 'partials/footer-links' ); ?>
</div>
<!-- end OUT -->

<?php get_footer(); ?>