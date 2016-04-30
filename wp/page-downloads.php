<?php
/**
 * Template Name: Downloads page
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

  <section class="section l">
    <div class="l-center">
      <?php while ( have_posts() ) : the_post(); ?>
      <h1 class="h1 uppercase align-center title-margin">
        <? the_title(); ?>
      </h1>
      <div class="h4">
        <? the_content();?>
      </div>
    </div>
    <?php endwhile; // end of the loop. ?>
  <?
  if(is_page('downloads-lumber')){
    $cat = 'lumber';
  }
  else{
    $cat = 'mdf';
  }
  ?>
    <div class="tiles-group">
    <?
    query_posts(array('showposts' => -1,
      'post_type' => 'download',
      'downloadtype' => $cat,
      'orderby'=>'menu_order',
      'order'=>'ASC'));
    while (have_posts()) { the_post(); 
      
    ?>
    <a href="<? the_field('file');?>" class="tile tile_simple">
      <div class="tile__inner">
        <strong class="tile__title"><? the_field('title');?></strong>
        <span class="tile__subtitle">скачать каталог</span>
        <span class="tile__badge">PDF</span>
        <span class="tile__info"><? the_field('date');?></span>
      </div>
    </a>

    <? } ?>
      

      

      <div class="tile tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-4.jpg')"></div>

      <!-- <div class="tile  tile_2x2 tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-1.jpg')"></div> -->

      

      <!-- <div class="tile  tile_2x1 tile_simple tile_static" style="background-image: url('<?php bloginfo('template_directory'); ?>/img/tile-3.jpg')"></div> -->
    </div>
  </section>

</div>
   
    


<?php get_template_part( 'partials/footer-links' ); ?> 
<?php get_footer(); ?>