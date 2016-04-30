<!-- BEGIN catalog -->
<section class="section l section_spaced">
  <div class="section-header">
    <h1 class="h1 uppercase">Продукция МДФ</h1>
  </div>
  <ul class="mdfnav">
   <?php wp_list_pages( 'child_of=80&sort_column=menu_order&title_li=' ); ?>
  </ul>
  <div class="clearfix">

<? if(is_page('laminat')) {?>

    <?$queryObject = new WP_Query( 'post_type=collection&posts_per_page=-1&order=ASC&orderby=menu_order' );
// The Loop!
if ($queryObject->have_posts()) {

  
  while ($queryObject->have_posts()) {
    $queryObject->the_post();
    $image = get_field('photo');
    $image = $image[sizes][medium_large];
    $mat = get_field('material');
    $tile = get_field('tile');
    $terms = get_the_terms( $post->ID , 'class' );
    // print_r($image);
    ?>
    <a href="<? echo get_permalink();?>" class="tile tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
      <div class="tile__inner">
        <strong class="tile__title"><? the_title();?></strong>
        <span class="tile__subtitle"><? echo $mat;?></span>
        <span class="tile__number">2</span>
        <span class="tile__info"><? echo $terms[0]->name;?></span>
      </div>
    </a>


<?  }

}
} // end IF LAMINAT
// ==============
else{

  global $post;
    $cat = $post_slug=$post->post_name;
?>


<?
    query_posts(array('showposts' => -1,
      'post_type' => 'mdf',
      'mdftype' => $cat,
      'orderby'=>'menu_order',
      'order'=>'ASC'));
    while (have_posts()) { the_post(); 
      
    $image = get_field('foto');
    $image = $image[sizes][medium_large];
    ?>
    <a href="<? echo get_permalink();?>" class="tile tile_small tile_<? echo $tile;?>" style="background-image: url('<? echo $image;?>')">
      <div class="tile__inner">
        <strong class="tile__title"><? the_title();?></strong>
      </div>
    </a>

    <? } ?>




<? }?>
  </div>
</section>
<!-- END catalog -->
