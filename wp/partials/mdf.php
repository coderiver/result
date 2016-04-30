<!-- BEGIN catalog -->
<section class="section l section_spaced">
  <div class="section-header">
    <?php while ( have_posts() ) : the_post(); ?>
    <h1 class="h1 uppercase"><? the_title();?></h1>
    <?php endwhile; // end of the loop. ?>
  </div>

  

  <div class="clearfix">

    <?
    // echo $post->ID;
    // $queryObject = new WP_Query( 'post_type=collection&posts_per_page=-1&order=ASC&orderby=menu_order' );
// The Loop!
    $queryObject = new WP_Query(array(
    'post_type'      => 'page',
    'post_parent'       => $post->ID,                               
    'order'             => 'ASC',
    'orderby'           => 'menu_order',
    'posts_per_page'    => -1

));
if ($queryObject->have_posts()) {

  
  while ($queryObject->have_posts()) {
    $queryObject->the_post();
    $image = get_field('catalogfoto');
    $image = $image[sizes][medium_large];
    ?>
    <a href="<? echo get_permalink();?>" class="tile tile_small tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
      <div class="tile__inner">
        <strong class="tile__title"><? the_title();?></strong>
      </div>
    </a>


<?  }

}
?>



  </div>
</section>
<!-- END catalog -->
